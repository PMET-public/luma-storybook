import React from 'react'
import Home from './'
import { storiesOf } from '@storybook/react'
import { HomeProps } from './Home'
import App from '../App'
import { AppMockData } from '../App/App.story'

export const HomeMockData: HomeProps = {
    assembler: {
        components: [
            {
                name: 'BubbleCarousel',
                props: {
                    text: 'Categories',
                    hideOnBreakpoint: 'medium-screen',
                    items: [
                        {
                            text: 'Women',
                            href: '#',
                            target: 'blank',
                            image: {
                                alt: 'Women',
                                src: require('../../../public/images/fashion-thumb1.jpg'),
                            },
                        },
                        {
                            text: 'Men',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Men',
                                src: require('../../../public/images/fashion-thumb2.jpg'),
                            },
                        },
                        {
                            text: 'Gear',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Gear',
                                src: require('../../../public/images/fashion-thumb3.jpg'),
                            },
                        },
                        {
                            text: 'Training',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Training',
                                src: require('../../../public/images/fashion-thumb4.jpg'),
                            },
                        },
                        {
                            text: 'Sale',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Sale',
                                src: require('../../../public/images/fashion-thumb5.jpg'),
                            },
                        },
                    ],
                },
            },
            {
                name: 'Banner',
                props: {
                    image: {
                        alt: '',
                        src: require('../../../public/images/banner-2.jpg'),
                        height: 650,
                        width: '100%',
                    },
                    titles: [
                        { 
                            text: 'Twice around, twice as nice', 
                            large: true,
                        },
                        { 
                            text: 'Find conscientious, comfy clothing in our eco-friendly collection',
                        },
                    ],
                    position: 'bottom',
                    buttons: [
                        { 
                            as: 'a',
                            text: 'Shop Performance', 
                            fill: true, 
                            href: '#',
                        },
                    ],
                },
            },
            {
                name: 'ProductsCarousel',
                props: {
                    title: {
                        as: 'h3',
                        text: 'New Arrivals',
                    },
                    items: new Array(10).fill({
                        as: 'a',
                        href: '#',
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                        price: {
                            price: '$49.99',
                            priceSpecial: '$39.99',
                            priceLabel: 'Starting at',
                        },
                        title: {
                            text: 'Circle Hooded Ice Flee',
                        },
                        colors: [
                            { value: 'brown' },
                            { value: 'gray' },
                            { value: 'black' },
                            { value: 'blue' },

                        ],
                    }),
                },
            },
            {
                name: 'ProductsCarousel',
                props: {
                    title: {
                        as: 'h3',
                        text: 'Summer Sale',
                    },
                    items: new Array(10).fill({
                        as: 'a',
                        href: '#',
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                        price: {
                            price: '$49.99',
                            priceSpecial: '$39.99',
                            priceLabel: 'Starting at',
                        },
                        title: {
                            text: 'Circle Hooded Ice Flee',
                        },
                        colors: [
                            { value: 'brown' },
                            { value: 'gray' },
                            { value: 'black' },
                            { value: 'blue' },

                        ],
                    }),
                },
            },
        ],
    },
}

storiesOf('📑 Templates/Home', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <Home {...HomeMockData} />
        </App>
    ))
