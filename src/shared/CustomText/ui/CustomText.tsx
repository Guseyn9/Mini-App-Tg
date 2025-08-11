import React, { memo } from 'react'
import { TFontWeight } from '../config/types/TFontWeight'
import styled from 'styled-components'

type Props = {
    className?: string;
    inline?: boolean
    fz?: number
    children?: any
    fw?: TFontWeight
    color?: string
    textAlign?: 'center' | 'left' | 'end'
    gray?: boolean
    fontStyle?: 'italic' | 'normal'
}

export const CustomText = memo((props: Props) => {
    return <Styled.text className={props.className} {...props}>{props.children}</Styled.text>
}) 

const Styled = {
    text: styled.span`
        display: ${({ inline }: Props) => (inline ? 'inline' : 'block')};
        font-size: ${({ fz }: Props) => (fz ? fz : 14)}px;
        font-weight: ${({ fw }: Props) => (fw ? fw : 400)};
        line-height: ${({ fz }: Props) => (fz ? fz * 1.3 : 14 * 1.3)}px;
        transition: all 0.3s ease;
        color: ${({ color, gray }: Props) =>
            color ? color : gray ? '#898989' : '#FCFCFC'};
        text-align: ${({ textAlign }: Props) =>
            textAlign ? textAlign : 'left'};
        font-style: ${({ fontStyle }: Props) => fontStyle};
    `,
}