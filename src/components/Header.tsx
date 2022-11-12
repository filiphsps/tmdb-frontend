import { FunctionComponent, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Text } from './Text';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import waves from '../img/header.svg';

const Container = styled.header`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 4rem;
    width: 100vw;
    max-width: 100vw;
    padding: 0px 1rem;

    @media (max-width: 960px) {
        --color-stroke: var(--color-secondary);
        height: 3rem;
    }

    a {
        display: block;
    }
`;

const Line = styled.div`
    height: 0.35rem;
    background: rgb(var(--color-primary));

    @media (max-width: 960px) {
        background: rgb(var(--color-secondary));
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
                <Link href="/">
                    <Text size={38} mobileSize={32}>
                        TMDb
                    </Text>
                </Link>
                <Line />
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
