import React from 'react'
import ProductItem from './'
import { storiesOf } from '@storybook/react'
import { text, array } from '@storybook/addon-knobs'

storiesOf('📦 Components/ProductItem', module)
    .add('Default', () => (
        <div className="story">
            <ProductItem className="story__product-item"
                badge={{
                    label: text('badge', 'New Arrival'),
                }}
                image={{
                    alt: '',
                    src: text('image', require('../../../public/images/product-item-sample.jpg')),
                }}
                price={{
                    price: text('price', '$149.99'),
                    priceSpecial: text('priceSpecial', '$49.00'),
                    priceLabel: text('priceLabel', 'Starting at'),
                }}
                title={{
                    label: text('title', 'Circle Hooded Ice Flee'),
                }}
                colors={array('colors', [
                    { value: 'green' }, 
                    { value: 'blue' }, 
                    { value: 'gray' },
                ])}
            />

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100vw;
                }

                .story__product-item {
                    width: 60rem;
                }
            `}</style>
        </div>
    ))
