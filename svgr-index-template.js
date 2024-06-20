const path = require('path')

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    return `export { default as Icon${exportName}} from './${basename}'`
  })

  return `
    import type { SVGProps } from "react";

    ${exportEntries.join('\n')}

    export type IconComponent = (props: SVGProps<SVGSVGElement> & { size?: number }) => React.JSX.Element
  `
}

module.exports = defaultIndexTemplate
