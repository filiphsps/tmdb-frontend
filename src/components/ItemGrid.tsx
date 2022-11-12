import { FunctionComponent, ReactNode } from 'react';

import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    justify-content: center;
    align-items: center;
    max-width: 100%;

    @media (min-width: 960px) {
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    }
`;

interface ItemGridProps {
    children: ReactNode;
}
export const ItemGrid: FunctionComponent<ItemGridProps> = ({ children }) => {
    return <Grid>{children}</Grid>;
};
