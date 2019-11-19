import React from 'react'
import Checkbox from '.'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'

storiesOf('📦 Components/Form/Checkbox', module).add('Default', () => (
    <Checkbox
        label="Label"
        placeholder={text('placeholder', '')}
        error={boolean('error', false) && { message: text('error message', '') }}
        type={select('type', { checkbox: 'checkbox', radio: 'radio' }, 'checkbox')}
        name="test"
        items={[
            {
                text: 'Option 1',
                value: 'option1',
            },
            {
                text: 'Option 2',
                value: 'option2',
                defaultChecked: true,
            },
            {
                text: 'Option 3',
                value: 'option3',
            },
        ]}
    />
))
