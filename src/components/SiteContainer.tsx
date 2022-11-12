import type { FunctionComponent, ReactNode } from 'react';

import { Header } from './Header';
import styled from 'styled-components';

const Container = styled.div`
    overflow-x: hidden;
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
        </Container>
    );
};
