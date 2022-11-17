import styled, { css } from 'styled-components';

import { FunctionComponent } from 'react';

interface Style {
    size: number;
    stroke: number;
    offset: number;
}

const String = styled.span`
    ${({
        options,
        mobileOptions
    }: {
        options: Style;
        mobileOptions?: Style;
    }) => {
        return css`
            font-size: ${options.size}px;
            //font-weight: 700;

            -webkit-text-stroke-width: ${options.stroke}px;
            -webkit-text-stroke-color: rgb(var(--color-stroke));
            text-shadow: ${options.offset * 1.05}px ${options.offset}px
                rgb(var(--color-blur-background));
            color: transparent;

            @media (max-width: 960px) {
                ${mobileOptions != undefined
                    ? css`
                          font-size: ${mobileOptions.size}px;
                          -webkit-text-stroke-width: ${mobileOptions.stroke}px;
                          text-shadow: ${mobileOptions.offset * 1.05}px
                              ${mobileOptions.offset}px
                              rgb(var(--color-blur-background));
                      `
                    : ''}
            }
        `;
    }}
`;

interface TextProps {
    children: string;
    options: Style;
    mobileOptions?: Style;
}
export const Text: FunctionComponent<TextProps> = ({
    children,
    options,
    mobileOptions
}) => {
    return (
        <String options={options} mobileOptions={mobileOptions}>
            {children}
        </String>
    );
};
