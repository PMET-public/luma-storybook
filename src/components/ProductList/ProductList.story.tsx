import React from 'react'
import ProductList from '.'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'

import { number } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /* Story Styles */
`

storiesOf('📦 Components/ProductList', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles />
        <ProductList
            loading={number('loading #', 0)}
            items={new Array(number('# items', 10)).fill(null).map(() => ({
                image: {
                    alt: '',
                    src: require('../../../public/images/product-item-sample.jpg'),
                },
                price: {
                    regular: 49.99,
                    special: 39.99,
                    label: 'Starting at',
                },
                title: {
                    text: 'Circle Hooded Ice Flee',
                },
                colors: [
                    { label: 'brown', value: 'brown' },
                    { label: 'gray', value: 'gray' },
                    { label: 'black', value: 'black' },
                    { label: 'blue', value: 'blue' },
                ],
            }))}
        />
    </StoryContainer>
))