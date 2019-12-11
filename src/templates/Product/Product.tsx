import React, { useState, useRef, useCallback, useEffect, MutableRefObject } from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    Wrapper,
    Images,
    CarouselWrapper,
    CarouselItem,
    InfoWrapper,
    InfoInnerWrapper,
    InfoOptions,
    Field,
    Label,
    Info,
    Header,
    Title,
    Sku,
    Buttons,
    ShortDescription,
    Description,
    ThumbSwatchesWrapper,
} from './Product.styled'

import useForm from 'react-hook-form'

import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import TextSwatches, { TextSwatchesProps } from '../../components/Form/TextSwatches'
import ThumbSwatches, { ThumbSwatchesProps } from '../../components/Form/ThumbSwatches'
import { ProductDetailsSkeleton } from './ProductDetails.skeleton'
import { ProductImageSkeleton } from './ProductImage.skeleton'

export type ProductProps = {
    loading?: boolean
    categories?: BreadcrumbsProps
    addToCartButton: ButtonProps
    shortDescription?: string
    description?: string
    gallery: ImageProps[]
    price: PriceProps

    options?: Array<
        {
            _id?: string | number
            label?: string
            required?: boolean
            error?: string | boolean
        } & (
            | {
                  type: 'text'
                  swatches: TextSwatchesProps
              }
            | {
                  type: 'thumb'
                  swatches: ThumbSwatchesProps
              }
        )
    >

    sku: Props<{
        text: string
    }>
    title: Props<{
        text: string
    }>

    onAddToCart?: (...args: any) => any
    onChange?: (...args: any) => any
}

export const Product: Component<ProductProps> = ({
    loading,
    children,
    shortDescription,
    description,
    categories,
    addToCartButton,
    gallery,
    price,
    sku,
    options,
    title,
    onAddToCart = () => {},
    onChange = () => {},
    ...props
}) => {
    const { register, handleSubmit, errors, setError, getValues } = useForm()

    const [scrollerRef, setScrollerRef] = useState<MutableRefObject<Element>>()
    const infoRef = useRef<HTMLElement>(null)

    const handleOnValueChanges = useCallback(() => {
        const values = getValues({ nest: true })
        onChange(values)
    }, [onChange])

    /**
     * Scroll to top if there are any errors
     */
    useEffect(() => {
        if (Object.entries(errors).length > 0 && infoRef.current) {
            infoRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [errors])

    return (
        <Root as="form" {...props} onSubmit={handleSubmit(onAddToCart)} onChange={handleOnValueChanges}>
            <Wrapper>
                <Images>
                    <CarouselWrapper
                        as={Carousel}
                        scrollerRef={setScrollerRef}
                        gap={1}
                        padding={3}
                        show={1}
                        snap={true}
                        hideScrollBar
                    >
                        {loading ? (
                            <CarouselItem as={Carousel.Item}>
                                <ProductImageSkeleton style={{ width: '100%' }} />
                            </CarouselItem>
                        ) : (
                            gallery.map((image, index) => (
                                <CarouselItem key={index} as={Carousel.Item}>
                                    <Image
                                        {...image}
                                        transition
                                        vignette={10}
                                        lazy={{ container: scrollerRef, ...image.lazy }}
                                    />
                                </CarouselItem>
                            ))
                        )}
                    </CarouselWrapper>
                </Images>
                <InfoWrapper ref={infoRef}>
                    <InfoInnerWrapper>
                        <Info>
                            {loading ? (
                                <ProductDetailsSkeleton
                                    style={{ width: '56rem', minWidth: '100%', maxWidth: '100%' }}
                                />
                            ) : (
                                <React.Fragment>
                                    <Header>
                                        {categories && <Breadcrumbs prefix="#" {...categories} />}
                                        <Title {...title}>{title?.text}</Title>
                                        <Price {...price} />
                                        <Sku {...sku}>{sku?.text}</Sku>
                                    </Header>

                                    {shortDescription && (
                                        <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
                                    )}

                                    {options && (
                                        <InfoOptions>
                                            {options.map(
                                                ({ _id, error: _error, type, label, required, swatches }, index) => {
                                                    const { name } = swatches
                                                    const error = errors[name]

                                                    if (_error) setError(name, typeof _error === 'string' ? _error : '')

                                                    return (
                                                        <fieldset key={_id || index}>
                                                            <Field>
                                                                {label && <Label $error={!!error}>{label}</Label>}
                                                                {type === 'text' && (
                                                                    <TextSwatches
                                                                        ref={register({ required })}
                                                                        {...(swatches as TextSwatchesProps)}
                                                                    />
                                                                )}
                                                                {type === 'thumb' && (
                                                                    <ThumbSwatchesWrapper>
                                                                        <ThumbSwatches
                                                                            {...(swatches as ThumbSwatchesProps)}
                                                                        />
                                                                    </ThumbSwatchesWrapper>
                                                                )}
                                                            </Field>
                                                        </fieldset>
                                                    )
                                                }
                                            )}
                                        </InfoOptions>
                                    )}

                                    <Buttons>
                                        <Button {...addToCartButton} />
                                    </Buttons>

                                    <input type="hidden" name="quantity" value={1} ref={register({ required: true })} />

                                    <Description dangerouslySetInnerHTML={{ __html: description }} />
                                </React.Fragment>
                            )}
                        </Info>
                    </InfoInnerWrapper>
                </InfoWrapper>
            </Wrapper>
        </Root>
    )
}
