import 'zx/globals'
import { exit } from 'process'
import { parseArgs } from 'util'

const generateUrl = (size, fill, key) => {
  const format = key.replace(/.([A-Z]| )/g, (x) => {
    if (x[1] === ' ') {
      return `${x[0]}_`
    }

    return `${x[0]}_${x[1]}`
  })

  return `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/${format.toLowerCase()}/wght300${
    fill ? 'fill1' : ''
  }/${size}px.svg`
}

const defaultOptions = {
  style: '24',
  'out-dir': 'src/components/icons/_assets',
}

const { values, positionals } = parseArgs({
  options: {
    style: {
      type: 'string',
      short: 's',
    },
    fill: {
      type: 'boolean',
      short: 'f',
    },
    'out-dir': {
      type: 'string',
      short: 'o',
    },
    help: {
      type: 'boolean',
      short: 'h',
    },
  },
  allowPositionals: true,
})

if (values.help || positionals.length === 0) {
  help()
  exit(0)
}

if (!['20', '24'].includes(values.style ?? defaultOptions.style)) {
  echo`Invalid style: ${values.style} (must be 20 or 24)`
  exit(1)
}

await fs.mkdir(values['out-dir'] ?? defaultOptions['out-dir'], {
  recursive: true,
})

positionals.forEach(async (key) => {
  const url = generateUrl(
    values.style ?? defaultOptions.style,
    values.fill,
    key,
  )

  const data = await spinner(`Downloading ${key}...`, async () => {
    const res = await fetch(url)
    const svg = await res.text()
    return svg
  })
  echo`[DONE] Downloading ${key}`
  await fs.writeFile(
    `${values['out-dir'] ?? defaultOptions['out-dir']}/${key}${
      values.fill ? ' Fill' : ''
    }.svg`,
    data,
  )
})
