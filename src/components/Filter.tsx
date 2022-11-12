import { HiOutlineFilter, HiSortDescending } from 'react-icons/hi';

import { BiCategoryAlt } from 'react-icons/bi';
import { FunctionComponent } from 'react';
import { Pill } from './Pill';
import styled from 'styled-components';

const Pills = styled.div`
    display: flex;
    justify-content: flex-atart;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (min-width: 960px) {
        gap: 1rem;
    }

    & > div {
        flex-grow: 1;
        flex-basis: auto;
        flex-direction: row;
        font-size: 1rem;
        height: 2rem;
        padding: 0.25rem;
        gap: 0.25rem;

        @media (min-width: 960px) {
            padding: 0.5rem 0.75rem;
            font-size: 1.25rem;
        }

        &:last-child {
            flex-grow: 0;
            margin-right: auto;
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
const FilterButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 2.25rem;
    margin: -0.15rem 0px 0px 0px;
    height 7rem;

    & > div {
        height: 2rem;
        width: 7rem;
        transform: rotate(-90deg) translateX(calc(-50% + 0.85rem))
            translateY(calc(-50% - 1rem));
        box-shadow: -0.25rem 0.25rem 0px 0px rgb(var(--color-primary));
    }
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
            <FilterButton>
                <Pill primary onClick={() => {}}>
                    <span>Filter</span>
                    <HiOutlineFilter />
                </Pill>
            </FilterButton>
        </Container>
    );
};
