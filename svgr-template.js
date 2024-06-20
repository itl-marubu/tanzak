const template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl },
) => {
  props[0].typeAnnotation = {
    type: 'TSTypeAnnotation',
    typeAnnotation: {
      type: 'TSIntersectionType',
      types: [
        {
          type: 'TSTypeReference',
          typeName: {
            type: 'Identifier',
            name: 'SVGProps',
          },
          typeParameters: {
            type: 'TSTypeParameterInstantiation',
            params: [
              {
                type: 'TSTypeReference',
                typeName: {
                  type: 'Identifier',
                  name: 'SVGSVGElement',
                },
              },
            ],
          },
        },
        {
          type: 'TSTypeReference',
          typeName: {
            type: 'Identifier',
            name: 'Props',
          },
        },
      ],
    },
  }

  return tpl`${imports}

  ${interfaces}
  type Props = {
    size?: number
  }
  
  const ${componentName} = (${props}) => {
    return ${jsx};
  }
  
  ${exports}`
}

module.exports = template
