#! /usr/bin/env node
const [_, _bin, command, name, ...attr] = process.argv

const usage = `
🏗  \x1b[4mStorybook Generator\x1b[0m

    → yarn generate <action> <PascalName>

    Actions:
    –––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    component: Generates a new UI Component
        ↳ yarn generate component <ComponentName>
        ↳ yarn generate template <TemplateName>
`


switch (command) {
    case 'component':
        return require('./lib/new-component')(name, 'components')
    case 'template':
        return require('./lib/new-component')(name, 'templates')
    default:
        return console.log(usage)
}
