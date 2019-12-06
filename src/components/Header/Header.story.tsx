import React from 'react'
import Header from './'
import { storiesOf } from '@storybook/react'

import Logo from '../../../public/images/luma.svg'

import IconSearchSvg from 'remixicon/icons/System/search-line.svg'
import IconBagSvg from 'remixicon/icons/Finance/shopping-bag-line.svg'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Header', module).add('Default', () => (
    <Header
        loading={boolean('loading', false)}
        logo={{
            as: 'a',
            href: '#',
            title: 'Luma',
            svg: Logo,
        }}
        menu={{
            items: [
                {
                    as: 'a',
                    href: '#',
                    text: 'New In',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Women',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Men',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Gear',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Training',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Gift Cards',
                },
            ],
        }}
        utilities={{
            items: [
                {
                    as: 'a',
                    href: '#',
                    text: 'Help',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'My Account',
                },
                {
                    as: 'a',
                    href: '#',
                    icon: {
                        svg: IconSearchSvg,
                    },
                    text: 'Search',
                },
                {
                    as: 'a',
                    href: '#',
                    icon: {
                        svg: IconBagSvg,
                        count: 3,
                    },
                    text: 'My Basket',
                },
            ],
        }}
    />
))
