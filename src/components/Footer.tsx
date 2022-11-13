import { FunctionComponent, useState } from 'react';

import Image from 'next/image';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import waves from '../img/footer.svg';

const Container = styled.footer`
    position: relative;
    height: 4rem;
`;

const ImageContainer = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100vw;
    z-index: -1;
    filter: brightness(0.65);
    transition: 00ms ease-out;
    transform: translateY(0);

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

interface FooterProps {}
export const Footer: FunctionComponent<FooterProps> = ({}) => {
    const [offset, setOffset] = useState(0);

    useScrollPosition(
        ({ currPos }) => {
            setOffset(
                document.body.scrollHeight + currPos.y - window.innerHeight
            );
        },
        [offset]
    );

    return (
        <>
            <Container></Container>
            <ImageContainer
                style={{
                    transform: `translateY(${offset * 0.35}px)`
                }}
            >
                <Image id="waves" src={waves} alt="wavy background" />
            </ImageContainer>
        </>
    );
};
