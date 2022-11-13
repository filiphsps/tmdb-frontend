import { FunctionComponent, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { HiSearch } from 'react-icons/hi';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    max-width: 2rem;
    font-size: 1.25rem;
    user-select: none;
    cursor: pointer;

    @media (min-width: 960px) {
        height: 2.5rem;
        width: 2.5rem;
        max-width: 2.5rem;
        font-size: 1.75rem;
    }
`;

const Input = styled.input`
    -webkit-appearance: none;
    all: unset;
    overflow: hidden;
    width: calc(100% - 1rem);
    max-width: 0px;
    height: calc(100% - 0.4rem);
    max-height: 100%;
    padding: 0px;
    border-radius: 0px;
    background: rgba(255, 255, 255, 0.85);
    font-size: 0.75rem;
    text-transform: uppercase;
    border: 0.15rem solid transparent;

    transition: var(--transition);
    @media (min-width: 960px) {
        border-width: 0.2rem;
        border-right-width: 0px;
        border-left-width: 0px;
    }

    border-right-width: 0px;
    border-left-width: 0px;
`;

const Container = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    max-width: calc(100% - 2rem);
    transition: var(--transition);

    color: rgb(var(--color-primary));
    background: rgb(var(--color-secondary));
    box-shadow: 0.25rem 0.25rem 0px 0px rgb(var(--color-primary));

    @media (min-width: 960px) {
        width: 2.5rem;
        height: 2.5rem;
    }

    @media (min-width: 960px) {
        &:hover {
            color: rgb(var(--color-primary));
            background: rgb(var(--color-primary-light));
        }
    }

    ${({ active }: { active?: boolean }) =>
        active
            ? css`
                  & {
                      width: 100%;
                      color: rgb(var(--color-primary));
                      background: rgb(var(--color-primary-light));
                  }

                  ${Icon} {
                      color: rgb(var(--color-primary));
                      background: rgb(var(--color-primary-light));
                  }
                  ${Input} {
                      max-width: 6.5rem;
                      padding: 0px 0.5rem;
                      border-color: rgb(var(--color-primary-light));
                      border-left-width: 0.15rem;

                      @media (min-width: 960px) {
                          max-width: 16rem;
                          border-left-width: 0.2rem;
                      }
                  }
              `
            : ''}
`;

interface SearchBarProps {}
export const SearchBar: FunctionComponent<SearchBarProps> = ({}) => {
    const [active, setActive] = useState(false);
    const containerRef = useRef();
    const inputRef = useRef();
    useOnClickOutside(containerRef, () => setActive(false));

    return (
        <Container ref={containerRef} active={active}>
            <Input ref={inputRef} placeholder="search..." />
            <Icon
                onClick={() => {
                    if (!active) (inputRef as any)?.current?.focus?.();
                    setActive(!active);
                }}
            >
                <HiSearch />
            </Icon>
        </Container>
    );
};
