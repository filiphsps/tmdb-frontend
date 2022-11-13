import {
    HiOutlineFilter,
    HiOutlineGlobeAlt,
    HiSortDescending
} from 'react-icons/hi';

import { BiCategoryAlt } from 'react-icons/bi';
import { FunctionComponent } from 'react';
import { Pill } from './Pill';
import styled from 'styled-components';

const Pills = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
    transition: var(--transition);

    & > div {
        gap: 0.25rem;
    }

    @media (min-width: 960px) {
        & > div {
            font-size: 1rem;
            padding: 1rem;
        }
        & > div:hover {
            background: rgb(var(--color-primary-light));
            box-shadow: 0.25rem 0.25rem 0px 0px rgb(var(--color-primary));
            transform: none;
        }
    }

    @media (max-width: 960px) {
        & > div {
            flex-grow: 1;
            flex-basis: max-content;
            flex-direction: row;
            font-size: 0.85rem;
            height: 2rem;
            padding: 0.25rem 0.45rem;

            &:last-child {
                flex-grow: 0;
                padding: 0.25rem 0.5rem;
                margin-right: auto;
            }
        }
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.25rem;
    width: 100%;
    max-width: 100%;
    min-height: 2rem;
    margin-bottom: 1.5rem;
`;
const FilterButton = styled.div`
    display: flex;

    @media (max-width: 960px) {
        justify-content: flex-start;
        align-items: flex-start;
        width: 2.25rem;
        margin: -0.15rem 0px 0px 0px;
        height: 7rem;

        & > div {
            height: 2rem;
            width: 7rem;
            transform: rotate(-90deg) translateX(calc(-50% + 0.85rem))
                translateY(calc(-50% - 1rem));
            box-shadow: -0.25rem 0.25rem 0px 0px rgb(var(--color-primary));
        }
    }

    @media (min-width: 960px) {
        & > div {
            padding: 1rem;
            font-size: 1rem;
        }
    }
`;

interface FilterProps {}
export const Filter: FunctionComponent<FilterProps> = ({}) => {
    return (
        <Container>
            <Pills>
                <Pill onClick={() => {}}>
                    <span>Movies</span>
                    <HiOutlineFilter />
                </Pill>
                <Pill onClick={() => {}}>
                    <span>Popular</span>
                    <HiSortDescending />
                </Pill>
                <Pill onClick={() => {}}>
                    <span>Action</span>
                    <BiCategoryAlt />
                </Pill>
                <Pill onClick={() => {}}>
                    <span>Comedy</span>
                    <BiCategoryAlt />
                </Pill>
                <Pill onClick={() => {}}>
                    <span>Family</span>
                    <BiCategoryAlt />
                </Pill>
                <Pill onClick={() => {}}>
                    <span>Western</span>
                    <BiCategoryAlt />
                </Pill>
                <Pill onClick={() => {}}>
                    <span>Globally</span>
                    <HiOutlineGlobeAlt />
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
