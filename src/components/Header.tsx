import { FunctionComponent, useState } from 'react';

import { HiMenuAlt3 } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { Text } from './Text';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import waves from '../img/header.svg';

const Logo = styled(Link)`
    display: block;
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
    filter: brightness(0.85);

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
    display: grid;
    grid-template-columns: 1fr auto 1fr auto;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 4rem;
    width: calc(100vw - 2rem);
    max-width: var(--page-width);
    margin: 0px auto 0.5rem auto;

    @media (max-width: 960px) {
        --color-blur-background: var(--color-secondary);
        height: 3rem;
    }

    a {
        display: block;
    }
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
            <Container>
                <Line />
                <Logo href="/">
                    <Text
                        options={{
                            size: 52,
                            stroke: 0.65,
                            offset: 2.75
                        }}
                        mobileOptions={{
                            size: 32,
                            stroke: 0.65,
                            offset: 2.35
                        }}
                    >
                        TMDb
                    </Text>
                </Logo>
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
                    transform: `translateY(-${offset * 0.35}px)`
                }}
            >
                <Image id="waves" src={waves} alt="wavy background" />
            </ImageContainer>
        </>
    );
};
