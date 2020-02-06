import React from 'react'
import ThumbSwatches from '.'
import { storiesOf } from '@storybook/react'
import { number, boolean, text } from '@storybook/addon-knobs'
import { Form } from '../Form'

storiesOf('📦 Components/Form/ThumbSwatches', module).add('Default', () => (
    <Form>
        <ThumbSwatches
            loading={boolean('loading', false)}
            name="color"
            type="radio"
            label={text('label', '')}
            items={Array(number('quantity', 5)).fill({
                image: {
                    alt: '',
                    src: require('../../../../public/images/product-item-sample.jpg'),
                },
            })}
            style={{ minWidth: '40rem' }}
            error={text('error', '')}
        />
    </Form>
))
