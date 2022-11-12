import { FunctionComponent } from 'react';
import { Text } from './Text';
import styled from 'styled-components';

const Container = styled.header`
    display: grid;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100vw;
    padding: 0px 1rem;
    background: rgb(var(--color-secondary));
`;

interface HeaderProps {}
export const Header: FunctionComponent<HeaderProps> = ({}) => {
    return (
        <Container>
            <Text size={48}>TMDb</Text>
        </Container>
    );
};
