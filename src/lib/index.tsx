import React, { AllHTMLAttributes, Ref } from 'react'
import { FunctionComponent } from 'react'
import { ReactComponentLike } from 'prop-types'
import { useTheme } from '../theme'

type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

/**
 * Component Types
 */
export type Props<P = {}> = Override<AllHTMLAttributes<HTMLElement>, {
    as?: ReactComponentLike | string
    ref?: Ref<any>
    text?: string
} & P>

export type Component<P = {}> = FunctionComponent<P>

/**
 * Element Component
 */
export const Element: Component<Props> = React.forwardRef(
    ({  as: Element = 'div', text, children = text, ...props }, ref) => {
    return (
        <Element {...props} className={classes(props.className)}
            ref={ref}
        >
            {children}
        </Element>
    )
}) 

/** Container Component */
export type ContainerProps = Props<{ }>
export const Container: Component<ContainerProps> = React.forwardRef(
    ({ children, ...props }, ref) => {
        const { margin } = useTheme()
        return (
            <Element {...props} className={classes('container', props.className)}
                ref={ref}
            >
            {children}

                <style jsx global>{`
                    .container {
                        margin: auto;
                        max-width: 1800px;
                        width: 100%;
                        padding-left: ${margin};
                        padding-right: ${margin};
                    }
                `}</style>
            </Element>
        )
    })

/**
 * Classes
 * @param args 
 */
export const classes = (...args: Array<string|[string, boolean]|undefined>) => {
    return args
        .map(x => {
            if (typeof x === 'string') return x
            else if (Array.isArray(x) && !!x[1]) return x[0]
            else return null
        })
        .filter(x => x !== null)
        .join(' ')
}

/**
 * Error Boundary
 */
export class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
    constructor(props: any) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    // componentDidCatch(error) {
    //     // You can also log the error to an error reporting service
    // }

    render() {
        if (this.state.hasError) {
            return null
        }

        return this.props.children
    }
}
