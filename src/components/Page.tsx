import type { FunctionComponent, ReactNode } from 'react';

import styled from 'styled-components';

const Container = styled.main`
    overflow-x: hidden;
    max-width: calc(100vw - 2rem);
    padding: 1rem;
`;

interface PageProps {
    children: ReactNode;
}
export const Page: FunctionComponent<PageProps> = ({ children }) => {
    return <Container>{children}</Container>;
};
