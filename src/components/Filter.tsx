import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.span`
    display: grid;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: calc(100vw - 2rem);
    padding: 0px 1.5rem 0px 1rem;
    margin-bottom: 1rem;
    background: rgb(var(--color-secondary));
    box-shadow: 0.35rem 0.35rem 0px 0px rgb(var(--color-primary-light));
`;

interface FilterProps {}
export const Filter: FunctionComponent<FilterProps> = ({}) => {
    return <Container></Container>;
};
