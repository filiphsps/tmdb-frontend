import { FunctionComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 1.75rem;
    padding: 0.5rem 0.75rem;
    color: rgb(var(--color-primary));
    background: rgb(var(--color-secondary));
    box-shadow: 0.25rem 0.25rem 0px 0px rgb(var(--color-primary));
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    transition: var(--transition);

    svg {
        transform: scale(1.15);
    }

    @media (min-width: 960px) {
        font-size: 1.25rem;
    }

    ${({
        primary,
        clickable,
        disabled
    }: {
        primary?: boolean;
        clickable: boolean;
        disabled?: boolean;
    }) =>
        css`
            ${primary
                ? css`
                      color: rgb(var(--color-primary));
                      background: rgb(var(--color-primary-light));
                  `
                : ''}

            ${disabled
                ? css`
                      background: #cfcfcf;
                      color: #6f6f6f;
                      opacity: 0.5;
                  `
                : ''}

            ${!disabled && clickable
                ? css`
                      cursor: pointer;
                      user-select: none;

                      @media (min-width: 960px) {
                          &:hover {
                              box-shadow: 0.45rem 0.45rem 0px 0px
                                  rgb(var(--color-primary));
                              transform: translate(-0.15rem, -0.15rem);
                          }
                      }
                  `
                : ''}
        `}
`;

interface PillProps {
    children: ReactNode;
    onClick?: () => void | Promise<void>;
    primary?: boolean;
    disabled?: boolean;
}
export const Pill: FunctionComponent<PillProps> = ({
    children,
    onClick,
    primary,
    disabled
}) => {
    return (
        <Container
            onClick={onClick}
            primary={primary}
            clickable={onClick !== undefined}
            disabled={disabled}
        >
            {children}
        </Container>
    );
};
