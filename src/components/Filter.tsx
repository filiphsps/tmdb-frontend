import { HiOutlineFilter, HiSortDescending } from 'react-icons/hi';

import { BiCategoryAlt } from 'react-icons/bi';
import { FunctionComponent } from 'react';
import { Pill } from './Pill';
import styled from 'styled-components';

const Pills = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (min-width: 960px) {
        gap: 1rem;
    }

    & > div {
        flex-grow: 1;
        font-size: 0.75rem;
        height: 1.75rem;
        padding: 0.25rem;
        gap: 0.25rem;

        @media (min-width: 960px) {
            padding: 0.5rem 0.75rem;
            font-size: 1.25rem;
            flex-grow: 0;
        }
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    width: 100%;
    max-width: 100%;
    min-height: 2rem;
    margin-bottom: 1.5rem;
`;

interface FilterProps {}
export const Filter: FunctionComponent<FilterProps> = ({}) => {
    return (
        <Container>
            <Pills>
                <Pill>
                    <span>Movies</span>
                    <HiOutlineFilter />
                </Pill>
                <Pill>
                    <span>Popular</span>
                    <HiSortDescending />
                </Pill>
                <Pill>
                    <span>Action</span>
                    <BiCategoryAlt />
                </Pill>
                <Pill>
                    <span>Comedy</span>
                    <BiCategoryAlt />
                </Pill>
                <Pill>
                    <span>Family</span>
                    <BiCategoryAlt />
                </Pill>
            </Pills>
            <Pill primary onClick={() => {}}>
                <span>Filters</span>
                <HiOutlineFilter />
            </Pill>
        </Container>
    );
};
