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

const Container = styled.nav`
    display: grid;
    grid-template-columns: 20% 1fr 20%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 100%;
    padding: 1rem;
    background: rgb(var(--color-primary-light));
    & > div,
    ${Pages} > div {
        background: rgb(var(--color-secondary));
    }

    & > div {
        padding: 1rem;
    }
    ${Pages} > div {
        padding: 1rem 0.75rem;
    }

    @media (min-width: 960px) {
        & > div {
            padding: 1.5rem;
        }
        ${Pages} > div {
            padding: 1.5rem 1.25rem;
        }
    }
`;

interface PaginatorProps {
    page: number;
    totalPages: number;
    onPrev?: () => void;
    onNext?: () => void;
}
export const Paginator: FunctionComponent<PaginatorProps> = ({
    page,
    totalPages,
    onPrev,
    onNext
}) => {
    return (
        <Container>
            {onPrev ? <Pill onClick={onPrev}>Back</Pill> : <section />}
            <Pages>
                {page > 1 && <Pill onClick={() => {}}>{1}</Pill>}
                <Pill onClick={() => {}}>{page}</Pill>
                <Pill onClick={() => {}}>{totalPages}</Pill>
            </Pages>
            {onNext ? <Pill onClick={onNext}>Next</Pill> : <section />}
        </Container>
    );
};
