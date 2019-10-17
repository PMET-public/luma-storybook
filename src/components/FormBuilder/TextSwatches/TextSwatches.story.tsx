import React from 'react'
import TextSwatches from '.'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

storiesOf('📦 Components/FormBuilder/TextSwatches', module).add('Default', () => (
    <TextSwatches
        name="size"
        type="radio"
        items={object('list', [
            { text: 'XS' },
            { text: 'M', disabled: true },
            { text: 'L', defaultChecked: true },
            { text: 'XL' },
            { text: 'S' },
        ])}
    />
))
