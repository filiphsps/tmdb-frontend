import type { FunctionComponent, ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import styled from 'styled-components';

const Container = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(
        215deg,
        rgba(32, 32, 32, 1) 0%,
        rgba(14, 14, 14, 1) 100%
    );
    width: 100vw;
    max-width: 100vw;
`;

interface SiteContainerProps {
    children: ReactNode;
}
export const SiteContainer: FunctionComponent<SiteContainerProps> = ({
    children
}) => {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
};
