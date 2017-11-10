import React from 'react'
import titleize from 'titleize'

import H2 from './H2'
import Div from './Div'
import Flex from './Flex'
import SlabStat from './SlabStat'

export default ({ properties }) => {
  const spacingProperties = [
    'margin', 'margin-top', 'margin-left', 'margin-right', 'margin-bottom',
    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom'
  ]

  return (
    <Div>
      <H2>Spacing Resets</H2>

      <Flex
        wrap='wrap'
        children={spacingProperties.map(prop => {
          const props = properties[prop] || []
          const resets = props.filter(v => v === '0')

          return (
            <SlabStat
              w={[1/2, 1/3, 1/5]}
              title={titleize(prop.replace('-', ' '))}
              stat={resets.length}
            />
          )
        })}
      />
    </Div>
  )
}