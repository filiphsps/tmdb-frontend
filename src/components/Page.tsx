import type { FunctionComponent, ReactNode } from 'react';

import styled from 'styled-components';

const Container = styled.main`
    overflow-x: hidden;
    max-width: 2048px;
    min-height: calc(100vh - 4rem);
    padding: 0px 1rem 1rem 1rem;
    margin: 0px auto;

    @media (max-width: 960px) {
        min-height: calc(100vh - 3rem);
    }
`;

interface PageProps {
    children: ReactNode;
}
export const Page: FunctionComponent<PageProps> = ({ children }) => {
    return <Container>{children}</Container>;
};
