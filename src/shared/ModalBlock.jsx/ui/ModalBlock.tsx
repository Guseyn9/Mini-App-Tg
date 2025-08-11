import React from 'react';
import { memo } from 'react';
import { styled } from 'styled-components';

type Props = {
    className?: string;
    children?: any
    bgColor?: string
    onClick?: () => void
    width?: string
    height?: string
    padding?: string
    margin?: string
    borderRadius?: string
    fz?: string
    fw?: string
    border?: string
    textColor?: string
    hoverBgColor?: string
    disabled?: boolean;
    transform?: string;
    visibility?: string;
    opacity?: string;
}

export const ModalBlock = memo((props: Props) => {
    return (
      <>
        <Styled.block
            className={props.className}
            onClick={props.onClick}
            {...props}
            disabled={props.disabled}
        >
            {props.children}
        </Styled.block>
        <Styled.darkenWindow onClick={props.onClick} className={props.className} visibility={props.visibility} opacity={props.opacity}></Styled.darkenWindow>
      </>
    )
})

const Styled = {
    block: styled.div<Props>`
        font-family: 'Inter';
        overflow: hidden;
        position: fixed;
        bottom: 0;
        left: 0;
        transition: all .3s ease-in-out;
        background-color: #131212;
        width: 100%;
        padding: 32px 20px;
        border-radius: 24px 24px 0 0;
        border: ${({ border }: Props) => (border ? border : 'none')};
        visibility: hidden;
        transform: ${({ transform }: Props) => (transform ? transform : 'translateY(100%)')};
        visibility: ${({ visibility }: Props) => (visibility ? visibility : 'hidden')};
        z-index: 4;
    `,
    darkenWindow: styled.div<Props>`
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      background: #000000;
      opacity: ${({ opacity }: Props) => (opacity ? opacity : '0')};
      visibility: ${({ visibility }: Props) => (visibility ? visibility : 'hidden')};
      z-index: 3;
      transition: opacity .3s ease-in-out;
    `
}
