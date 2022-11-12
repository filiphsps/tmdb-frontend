import type { FunctionComponent, ReactNode } from 'react';

import styled from 'styled-components';

const Container = styled.main`
    z-index: 99;
    width: calc(100vw - 2rem);
    max-width: var(--page-width);
    min-height: calc(100vh - 3rem);
    padding: 0px;
    margin: 0px auto;

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
