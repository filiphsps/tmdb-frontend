import styled, { css } from 'styled-components';

import { FunctionComponent } from 'react';

const String = styled.span`
    ${({
        size,
        mobileSize
    }: {
        size: number;
        mobileSize?: number;
        secondary?: boolean;
    }) => {
        let stroke = 0.0075;
        let offset = 0.065;

        return css`
            font-size: ${size}px;
            font-weight: 800;

            -webkit-text-stroke-width: ${size * stroke}px;
            -webkit-text-stroke-color: #2f2f2f;
            text-shadow: ${size * offset}px ${size * offset}px
                rgb(var(--color-stroke));
            color: transparent;

            @media (max-width: 960px) {
                ${mobileSize > 0
                    ? css`
                          font-size: ${mobileSize}px;
                          -webkit-text-stroke-width: ${mobileSize * stroke +
                          0.25}px;
                          text-shadow: ${mobileSize * offset}px
                              ${mobileSize * offset}px rgb(var(--color-stroke));
                      `
                    : ''}
            }
        `;
    }}
`;

interface TextProps {
    children: string;
    size?: number;
    mobileSize?: number;
    secondary?: boolean;
}
export const Text: FunctionComponent<TextProps> = ({
    children,
    size,
    mobileSize
}) => {
    return (
        <String size={size || 14} mobileSize={mobileSize}>
            {children}
        </String>
    );
};
