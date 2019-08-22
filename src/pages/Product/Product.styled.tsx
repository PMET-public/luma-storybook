import styled from 'styled-components'

import { Root as ImageRoot, ImageTag } from '../../components/Image'
import { Root as CarouselRoot } from '../../components/Carousel'
import { Root as BreadcrumbsRoot } from '../../components/Breadcrumbs'

export const Root = styled.div`
    display: grid;
    grid-gap: 8rem;
`

export const Wrapper = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: minmax(max-content, max-content);
    grid-gap: 1rem;

    @media ${props => props.theme.breakpoints.smallOnly} {
        display: grid;
        grid-auto-rows: max-content;
        grid-template-columns: 1fr;
    }

    @media ${props => props.theme.breakpoints.medium} {
        display: grid;
        grid-auto-rows: max-content;
        grid-gap: 2rem;
        grid-template-columns: 1fr 1fr;
        padding-top: 2rem;
    }

    @media ${props => props.theme.breakpoints.large} {
        grid-template-columns: 1.5fr 1fr;
    }
`

export const Images = styled.div`
    ${ImageRoot} {
        display: block;
        width: 100%;

        @media ${props => props.theme.breakpoints.smallOnly} {
            position: sticky;
            top: 0;
            z-index: 0;
        }
    }

    ${ImageTag} {
        width: 100%;
    }

    ${CarouselRoot} {
        @media ${props => props.theme.breakpoints.smallOnly} {
            width: 100vw;
            position: relative;
            margin-left: -50vw;
            left: 50%;
        }

        @media ${props => props.theme.breakpoints.medium} {
            grid-gap: 0.5rem;
            grid-auto-flow: row;
            grid-template-columns: repeat(1, 1.5fr);
            overflow: unset;
        }

        @media ${props => props.theme.breakpoints.large} {
            grid-auto-flow: row;
            grid-template-columns: repeat(2, 1fr);
        }
    }
`

export const InfoWrapper = styled.div`
    @media ${props => props.theme.breakpoints.smallOnly} {
        background-color: var(--color-surface);
        border-radius: 1rem 1rem 0 0;
        box-shadow: 0 -0.5rem 0.3rem rgba(0, 0, 0, 0.05);
        color: var(--color-on-surface);
        left: 50%;
        margin-left: -50vw;
        margin-top: -2rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 3rem;
        position: relative;
        width: 100vw;
        z-index: 1;

        /**
        Needed to fix this Safari bug
        https://css-tricks.com/forums/topic/safari-for-ios-z-index-ordering-bug-while-scrolling-a-page-with-a-fixed-element/
    */
        -webkit-transform: translate3d(0, 0, 0);
    }
`

export const Info = styled.div`
    display: grid;
    grid-gap: 3rem;

    @media ${props => props.theme.breakpoints.medium} {
        background-color: var(--color-surface);
        border-radius: 2rem;
        color: var(--color-on-surface);
        padding: 2rem;
        position: sticky;
        top: 2rem;
    }
`

export const Header = styled.header`
    display: grid;
    grid-gap: 1.6rem;
    grid-auto-rows: max-content;

    ${BreadcrumbsRoot} {
        font-size: 1.4rem;
        color: var(--color-on-surface75);
    }
`

export const Title = styled.h2``

export const Sku = styled.span`
    font-size: 0.85em;
    color: ${props => props.theme.colors.onSurface75};
`

export const Swatches = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const SwatchesTitle = styled.h3`
    font-size: 1.6rem;
`

export const Buttons = styled.div`
    display: grid;
    grid-gap: 1rem;
`