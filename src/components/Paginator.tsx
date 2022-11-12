import { FunctionComponent } from 'react';
import { Pill } from './Pill';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    height: 2rem;
    width: 100%;
`;

const Pages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;
    width: 100%;
`;

interface PaginatorProps {}
export const Paginator: FunctionComponent<PaginatorProps> = ({}) => {
    return (
        <Container>
            <Pill primary>Back</Pill>
            <Pages>
                <Pill primary>1</Pill>
                <Pill>2</Pill>
                <Pill>3</Pill>
            </Pages>
            <Pill primary>Next</Pill>
        </Container>
    );
};
