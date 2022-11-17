import { FunctionComponent } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import waves from '../img/footer.svg';

const Container = styled.footer`
    position: relative;
    height: 1rem;
    width: 100%;
`;

const ImageContainer = styled.div`
    position: relative;
    transform: translateY(-15rem);
    transition: 1ms;
    overflow: hidden;
    pointer-events: none;
    height: 15rem;
    width: 100%;
    margin-bottom: -15rem;

    #waves {
        position: absolute;
        right: 0px;
        bottom: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: 1;
        object-position: bottom center;
        filter: brightness(0.75);
    }
`;

interface FooterProps {}
export const Footer: FunctionComponent<FooterProps> = ({}) => {
    return (
        <>
            <Container></Container>
            <ImageContainer>
                <Image id="waves" src={waves} alt="wavy background" fill />
            </ImageContainer>
        </>
    );
};
