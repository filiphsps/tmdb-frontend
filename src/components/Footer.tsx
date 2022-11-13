import { FunctionComponent, useState } from 'react';

import Image from 'next/image';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import waves from '../img/footer.svg';

const Container = styled.footer`
    position: relative;
    height: 4rem;
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: 4rem solid rgb(var(--color-secondary));
`;

const ImageContainer = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100vw;
    height: 65vh;
    z-index: -1;
    transform: translate3d(0, 0, 0);
    transition: 1ms;
    overflow: hidden;
    pointer-events: none;

    #waves {
        position: relative;
        height: 100%;
        width: 100%;
        filter: brightness(0.8);
    }
`;

interface FooterProps {}
export const Footer: FunctionComponent<FooterProps> = ({}) => {
    const [offset, setOffset] = useState(0);
    const [height, setHeight] = useState(0);

    useScrollPosition(
        ({ currPos }) => {
            setHeight(document.body.offsetHeight - window.innerHeight);
            setOffset(
                (document.body.offsetHeight -
                    (document.body.scrollHeight + currPos.y)) /
                    (document.body.offsetHeight - window.innerHeight)
            );
        },
        [offset]
    );

    return (
        <>
            <Container></Container>
            <ImageContainer
                style={{
                    transform: `translate3d(0px, -${
                        height - height * offset - (200 - 200 * offset)
                    }px, 0px)`
                }}
            >
                <Image id="waves" src={waves} alt="wavy background" fill />
            </ImageContainer>
        </>
    );
};
