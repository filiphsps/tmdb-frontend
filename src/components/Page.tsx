import type { FunctionComponent, ReactNode } from 'react';

import styled from 'styled-components';

const Container = styled.main`
    z-index: 99;
    max-width: calc(100% - 2rem);
    width: calc(var(--page-width) - 2rem);
    min-height: calc(100vh - 3rem);

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
