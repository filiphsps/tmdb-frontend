import type { FunctionComponent, ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import styled from 'styled-components';

const Container = styled.div`
    z-index: 1;
    position: relative;
    overflow-x: hidden;
    background: #efefef;
    width: calc(100% - 1rem);
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
