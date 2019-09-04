import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { PageBuilder } from '../../PageBuilder'

const html = `<div data-content-type=\"row\" data-appearance=\"contained\" data-element=\"main\"><div data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"inner\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 10px; padding: 10px;\"><div data-content-type=\"html\" data-appearance=\"default\" data-element=\"main\" style=\"text-align: left; border-style: none; border-color: rgb(135, 135, 135); border-width: 1px; margin: 0px; padding: 0px;\">&lt;pre&gt;\r\n&lt;code&gt;\r\nimport React from 'react'\r\nimport { Component } from '../../../../lib'\r\nimport { Root } from './Html.styled'\r\n\r\nimport HtmlComponent, { HtmlProps as HtmlComponentProps } from '../../../Html'\r\n\r\nexport type HtmlProps = HtmlComponentProps\r\n\r\nexport const Html: Component&lt;HtmlProps&gt; = ({ children, ...props }) =&gt; {\r\n    return &lt;Root as={HtmlComponent} {...props} /&gt;\r\n}\r\n&lt;/code&gt;\r\n&lt;/pre&gt;</div></div></div>`
storiesOf('📦 Components/PageBuilder/Html', module).add('Default', () => <PageBuilder html={text('html', html)} />)