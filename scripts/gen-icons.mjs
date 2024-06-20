import 'zx/globals'

import config from '../svgr.config.js'

fs.exists(config.outDir).then(async (x) => {
  x && (await fs.remove(config.outDir))
})
await spinner('Generating icons...', async () => {
  return $`pnpm svgr --config-file svgr.config.js src/components/Icons/_assets`
})

echo`[DONE] Generating icons`
