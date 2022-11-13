import type { FunctionComponent, ReactNode } from 'react';

import styled from 'styled-components';

const Container = styled.main`
    z-index: 9999;
    max-width: 100%;
    width: calc(var(--page-width) - 2rem);
    max-width: calc(100% - 2rem);
    min-height: calc(100vh - 3rem);
    margin: 0px 1rem;

    @media (min-width: 960px) {
        min-height: calc(100vh - 4rem);
    }
`;

interface PageProps {
    children: ReactNode;
}
export const Page: FunctionComponent<PageProps> = ({ children }) => {
    return <Container>{children}</Container>;
};
