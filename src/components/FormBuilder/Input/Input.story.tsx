import React from 'react'
import Input from './'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/FormBuilder/Input', module).add('Default', () => (
    <Input
        label="Label"
        placeholder={text('placeholder', '')}
        error={boolean('error', false) && { message: text('error message', '') }}
    />
))
