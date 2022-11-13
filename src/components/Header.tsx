import { FunctionComponent, useState } from 'react';
import styled, { css } from 'styled-components';

import { HiMenuAlt3 } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import waves from '../img/header.svg';

const Logo = styled(Link)`
    display: block;
    color: rgb(var(--color-secondary));
    text-shadow: -0.125rem -0.125rem 0 rgb(var(--color-primary)),
        0 -0.125rem 0 rgb(var(--color-primary)),
        0.125rem -0.125rem 0 rgb(var(--color-primary)),
        0.125rem 0 0 rgb(var(--color-primary)),
        0.125rem 0.125rem 0 rgb(var(--color-primary)),
        0 0.125rem 0 rgb(var(--color-primary)),
        -0.125rem 0.125rem 0 rgb(var(--color-primary)),
        -0.125rem 0 0 rgb(var(--color-primary)),
        0.25rem 0.25rem rgb(var(--color-primary));
    font-size: 2rem;
    font-weight: 500;
`;

const Line = styled.div`
    height: 0.35rem;
    background: rgb(var(--color-secondary));
    box-shadow: 0.25rem 0.25rem 0px 0px rgb(var(--color-primary));
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;
    margin: 0.25rem 0px;

    @media (min-width: 960px) {
        height: 2.5rem;
    }
`;

const Action = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 2rem;
    max-width: 2rem;
    line-height: 100%;
    font-size: 1.25rem;
    cursor: pointer;
    transition: var(--transition);

    color: rgb(var(--color-primary));
    background: rgb(var(--color-secondary));
    box-shadow: 0.25rem 0.25rem 0px 0px rgb(var(--color-primary));

    @media (max-width: 960px) {
        aspect-ratio: 1 / 1;
    }

    @media (min-width: 960px) {
        width: auto;
        max-width: 100%;
        padding: 0px 0.5rem;
        font-size: 1.75rem;
    }

    &:hover {
        color: rgb(var(--color-primary));
        background: rgb(var(--color-primary-light));
    }
`;

const Label = styled.div`
    display: none;

    @media (min-width: 960px) {
        display: block;
        padding: 0px 0px 0px 0.5rem;
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
    }
`;

const ImageContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100vw;
    z-index: -1;
    filter: brightness(0.65);
    transition: 0ms ease-out;
    transform: translateZ(0) translateY(0);

    #waves {
        height: 100%;
        width: 100vw;
        margin-left: -0.25rem;
        object-fit: cover;

        @media (max-width: 960px) {
            width: auto;
        }
    }
`;

const Container = styled.header`
    position: sticky;
    top: 0px;
    z-index: 999;
    display: grid;
    grid-template-columns: 1fr auto 1fr auto;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 4rem;
    width: 100%;
    max-width: var(--page-width);
    margin: 0px 0px 1rem 0px;
    padding: 0px 1rem;
    transition: var(--transition);

    @media (max-width: 960px) {
        //--color-blur-background: var(--color-secondary);
        height: 3rem;
    }

    a {
        display: block;
    }

    ${({ opaque }: { opaque: boolean }) =>
        opaque
            ? css`
                  background: rgb(var(--color-primary-light));
                  box-shadow: 0.25rem 0.25rem 0px 0px
                      rgb(var(--color-secondary));

                  @media (max-width: 960px) {
                      box-shadow: 0px 0.25rem 0px 0px
                          rgb(var(--color-secondary));
                  }
              `
            : ''}
`;

interface HeaderProps {}
export const Header: FunctionComponent<HeaderProps> = ({}) => {
    const [offset, setOffset] = useState(0);

    useScrollPosition(
        ({ currPos }) => {
            setOffset(currPos.y * -1);
        },
        [offset]
    );

    return (
        <>
            <Container opaque={offset >= 45}>
                <Line />
                <Logo href="/">TMDb</Logo>
                <Line />
                <Actions>
                    <SearchBar />
                    <Action>
                        <HiMenuAlt3 />
                        <Label>Menu</Label>
                    </Action>
                </Actions>
            </Container>
            <ImageContainer
                style={{
                    top: `-${offset * 0.35}px`
                }}
            >
                <Image id="waves" src={waves} alt="wavy background" />
            </ImageContainer>
        </>
    );
};
