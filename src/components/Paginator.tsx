import { FunctionComponent } from 'react';
import { Pill } from './Pill';
import styled from 'styled-components';

const Pages = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;
    width: 100%;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    & > div {
        padding: 1.5rem;
    }
    ${Pages} > div {
        padding: 1.5rem 1.25rem;
    }
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
