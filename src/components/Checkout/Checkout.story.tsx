import React from 'react'
import Checkout from './'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Checkout', module).add('Default', () => (
    <Checkout
        personalInfo={{
            title: {
                text: 'Shipping Address',
            },
            firstName: {
                label: 'First Name',
            },
            company: {
                label: 'Company (optional)',
            },
            lastName: {
                label: 'Last Name',
            },
            address1: {
                label: 'Address',
            },
            address2: {
                label: 'Apt, Suite, Unit, etc (optional)',
            },
            city: {
                label: 'City',
            },
            country: {
                label: 'Country',
                items: [
                    {
                        text: 'United States',
                        value: 'US',
                    },
                    {
                        text: 'Venezuela',
                        value: 'VE',
                    },
                ],
            },
            region: {
                label: 'State',
            },
            postalCode: {
                label: 'Postal Code',
            },
            onSubmit: action('onShippingAddressSubmit'),
        }}
        shippingMethod={{
            title: {
                text: 'Shipping Method',
            },
            items: [
                { text: 'Fixed $5.00', value: '1', defaultChecked: true },
                { text: '1-Day Express $29.99', value: '2' },
            ],
            onSubmit: action('onShippingMethodSubmit'),
        }}
        paymentMethod={{
            title: {
                text: 'Payment Method',
            },
            braintreeToken: text(
                'braintreeToken',
                'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNklrRjFkR2g1SW4wLmV5SmxlSEFpT2pFMU56STVNVFF6TXpBc0ltcDBhU0k2SW1GaFlqRTNaREkzTFRVeU5UVXROR0U1T1MwNVpUSmhMVGN3TURNd09ETTRORFl5TWlJc0luTjFZaUk2SW5wcmR6SmpkSEpyYWpjMWJtUjJhMk1pTENKcGMzTWlPaUpCZFhSb2VTSXNJbTFsY21Ob1lXNTBJanA3SW5CMVlteHBZMTlwWkNJNklucHJkekpqZEhKcmFqYzFibVIyYTJNaUxDSjJaWEpwWm5sZlkyRnlaRjlpZVY5a1pXWmhkV3gwSWpwbVlXeHpaWDBzSW5KcFoyaDBjeUk2V3lKdFlXNWhaMlZmZG1GMWJIUWlYU3dpYjNCMGFXOXVjeUk2ZXlKdFpYSmphR0Z1ZEY5aFkyTnZkVzUwWDJsa0lqb2liV0ZuWlc1MGJ5SjlmUS5jOUVCd3F0Q2VXN19oRldaR0JfOFdlYkFZZk00WVptS2J3ME43QW1pbTZtMFllaUQ5b21nTzVyVWtJNnJvaWdsZUJsdU1PWW9jb19wbzRSOXNwd3lIZyIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy96a3cyY3Rya2o3NW5kdmtjL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImdyYXBoUUwiOnsidXJsIjoiaHR0cHM6Ly9wYXltZW50cy5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL2dyYXBocWwiLCJkYXRlIjoiMjAxOC0wNS0wOCJ9LCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL3prdzJjdHJrajc1bmR2a2MvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vb3JpZ2luLWFuYWx5dGljcy1zYW5kLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vemt3MmN0cmtqNzVuZHZrYyJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjpmYWxzZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiTWFnZW50byIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6Im1hZ2VudG8iLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6InprdzJjdHJrajc1bmR2a2MiLCJ2ZW5tbyI6Im9mZiIsIm1lcmNoYW50QWNjb3VudElkIjoibWFnZW50byJ9'
            ),
            onSubmit: action('onPaymentMethodSubmit'),
        }}
    />
))