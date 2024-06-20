const modAttrCurrentColor =
  ({ elements = [], attributes: attrs = [], skips = [], mode = 'add' }) =>
  ({ types: t }) => {
    return {
      visitor: {
        JSXOpeningElement(path) {
          if (!t.isJSXIdentifier(path.node.name)) {
            return
          }

          if (path.node.name.name === 'svg') {
            const isSkip = path.node.attributes.some((attr) => {
              return attr.name.name === 'data-original'
            })
            if (isSkip) {
              path.scope.setData('skip', true)
            }
          }

          if (!elements.includes(path.node.name.name)) {
            return
          }
          if (path.scope.getData('skip')) {
            return
          }

          attrs.forEach((target) => {
            let hasTarget = false

            path.node.attributes.forEach((attribute) => {
              if (attribute.name.name === target) {
                hasTarget = true
                if (
                  t.isStringLiteral(attribute.value) &&
                  !skips.includes(attribute.value.value)
                ) {
                  attribute.value.value = 'currentColor'
                }
              }
            })

            if (mode === 'add' && !hasTarget) {
              const fillAttribute = t.jsxAttribute(
                t.jsxIdentifier(target),
                t.stringLiteral('currentColor'),
              )
              path.node.attributes.push(fillAttribute)
            }
          })
        },
      },
    }
  }

module.exports = {
  icon: '#babel-insert-size',
  typescript: true,
  expandProps: true,
  outDir: 'src/components/Icons/generated',
  index: true,
  template: require('./svgr-template.js'),
  indexTemplate: require('./svgr-index-template.js'),
  plugins: ['@svgr/plugin-jsx'],
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-replace-jsx-attribute-value',
          {
            values: [
              {
                value: '#babel-insert-size',
                newValue: 'props.size ?? "1em"',
                literal: true,
              },
            ],
          },
        ],
        modAttrCurrentColor({
          elements: [
            'rect',
            'path',
            'circle',
            'ellipse',
            'line',
            'polygon',
            'polyline',
            'g',
          ],
          attributes: ['fill', 'stroke'],
          skips: ['none'],
          mode: 'replace',
        }),
        modAttrCurrentColor({
          elements: ['svg'],
          attributes: ['fill'],
          skips: ['none'],
        }),
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['svg'],
            attributes: ['data-original'],
          },
        ],
      ],
    },
  },
}
