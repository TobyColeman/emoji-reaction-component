import React from 'react'

import { storiesOf } from '@storybook/react'

import Cross from '../src/Cross'

storiesOf('Cross', module)
  .add('default', () => <Cross isOpen={true} />)
