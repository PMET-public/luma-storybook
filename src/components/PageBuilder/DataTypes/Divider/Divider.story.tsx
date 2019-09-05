import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageBuilder } from '../../PageBuilder'

const html = `<div data-content-type=\"row\" data-appearance=\"contained\" data-element=\"main\"><div data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"inner\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 10px; padding: 10px;\"><div data-content-type=\"divider\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-color: rgb(252, 0, 9); border-width: 1px; margin: 0px; padding: 10px;\"><hr data-element=\"line\" style=\"width: 100%; border-width: 2px; border-color: rgb(135, 135, 135); display: inline-block;\"></div></div></div>`
storiesOf('📦 Components/PageBuilder/Divider', module).add('Default', () => <PageBuilder html={html} />)
