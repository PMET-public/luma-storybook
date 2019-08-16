import React from 'react'
import BubbleCarousel from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/BubbleCarousel', module)
    .add('Default', () => (
        <BubbleCarousel
            label="Shop the Look"
            items={[
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb1.jpg'),
                    },
                    text: 'Minimalist',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb1.jpg'),
                    },
                    text: 'Minimalist',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb2.jpg'),
                    },
                    text: 'Dressy',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb3.jpg'),
                    },
                    text: 'Beachy',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb4.jpg'),
                    },
                    text: 'Biz Cas’',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb5.jpg'),
                    },
                    text: 'All Time',
                },
            ]}
        />
    ))
