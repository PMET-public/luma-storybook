import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageBuilder } from '../../PageBuilder'

const html = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-color: transparent; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 200px; margin: 0px; padding: 0px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div data-content-type=\"text\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;\"><h1 style=\"text-align: center;\">Hola!</h1>\r\n<p id=\"output\" class=\"page-generator__lorem\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div></div>`
storiesOf('📦 Components/PageBuilder/Text', module).add('Default', () => <PageBuilder html={html} />)
