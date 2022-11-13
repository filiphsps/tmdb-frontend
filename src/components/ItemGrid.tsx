import { FunctionComponent, ReactNode } from 'react';

import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 960px) {
        gap: 2rem 1rem;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    }
`;

interface ItemGridProps {
    children: ReactNode;
}
export const ItemGrid: FunctionComponent<ItemGridProps> = ({ children }) => {
    return <Grid>{children}</Grid>;
};
