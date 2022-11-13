import { FunctionComponent, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import Image from 'next/image';
import { MovieResult } from 'moviedb-promise';
import { Text } from './Text';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { useRouter } from 'next/router';

const Title = styled.div`
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 0.75rem 0px 0.75rem 0.75rem;
    color: rgb(var(--color-secondary));
    text-shadow: -0.125rem -0.125rem 0 rgb(var(--color-primary)),
        0 -0.125rem 0 rgb(var(--color-primary)),
        0.125rem -0.125rem 0 rgb(var(--color-primary)),
        0.125rem 0 0 rgb(var(--color-primary)),
        0.125rem 0.125rem 0 rgb(var(--color-primary)),
        0 0.125rem 0 rgb(var(--color-primary)),
        -0.125rem 0.125rem 0 rgb(var(--color-primary)),
        -0.125rem 0 0 rgb(var(--color-primary));
    font-size: 1rem;
    font-weight: 700;
    overflow-wrap: break-word;
    transition: var(--transition);
    transform: translate(-0.25rem, -0.75rem);

    @media (min-width: 960px) {
        font-size: 1.25rem;
    }
`;
const Content = styled.div`
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    transition: var(--transition);
    transform: translateX(-100%);
    --color-blur-background: var(--color-primary);

    span {
        overflow-wrap: break-word;
    }
`;
const Cover = styled(Image)`
    z-index: 0;
    position: relative;
    display: block;
    width: calc(100% + 1.5rem);
    height: calc(100% + 1.5rem);
    margin: -0.75rem;
    aspect-ratio: 65 / 92;
    transition: 100ms ease-out;
`;

const PositionContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 1.75rem;

    @media (max-width: 960px) {
        padding: 1rem;
    }
`;
const Position = styled.div`
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.25rem;
    max-width: 2.25rem;
    min-width: 2.25rem;
    height: 2.25rem;
    max-height: 2.25rem;
    min-height: 2.25rem;
    aspect-ratio: 1 / 1;
    background: rgb(var(--color-primary));
    border-radius: 100%;
    transition: var(--transition);
    transition-timing-function: cubic-bezier(1, -0.1, 0.3, 0.65);

    span {
        transform: scale(0.65);
    }

    @media (min-width: 960px) {
        width: 4rem;
        max-width: 4rem;
        min-width: 4rem;
        height: 4rem;
        max-height: 4rem;
        min-height: 4rem;

        span {
            transform: scale(0.5);
        }
    }
`;
const Rating = styled(Position)`
    background: rgb(var(--color-secondary));
    transform: translateX(-20rem);
    transition-delay: 0s;
    margin: -1rem;
    --color-blur-background: var(--color-primary);

    @media (max-width: 960px) {
        margin: 0px;
    }
`;

const Action = styled(Position)`
    position: absolute;
    left: unset;
    right: 0.75rem;
    height: 2.25rem;
    text-shadow: 3rem 3rem rgb(var(--color-secondary));
    color: rgb(var(--color-primary));
    background: unset;
    border-radius: unset;
    transition: var(--transition);
    transform: translateX(-20rem);
    margin: -1rem 0.5rem -1rem -1rem;
    --color-blur-background: var(--color-primary);

    span {
        display: block;
    }

    @media (min-width: 960px) {
        height: 4rem;
    }
    @media (max-width: 960px) {
        margin: 0px 0.5rem 0px 0px;
    }
`;

const expandedStyle = css`
    box-shadow: 0.25rem 0.25rem 0px 0px rgb(var(--color-secondary));

    ${Cover} {
        transition-timing-function: cubic-bezier(1, -0.1, 0.3, 0.65);
        transition-duration: 500ms;
        transform: translateX(-100%);
    }

    ${Title} {
        transform: translateX(-100%);
    }
    ${Content} {
        transform: translateX(0);
        transition-delay: 350ms;
    }

    ${Position} {
        transform: translateX(-20rem);
    }
    ${Rating} {
        transform: translateX(0);
        transition-delay: 150ms;
    }
    ${Action} {
        background: unset;
        transform: translateX(0);
        transition: 400ms cubic-bezier(1, -0.1, 0.3, 0.65);
        transition-delay: 75ms;
    }

    @media (min-width: 960px) {
        &:hover {
            box-shadow: 0.25rem 0.25rem 0px 0px rgb(var(--color-secondary));
        }
    }
`;
const Container = styled.div`
    --color-blur-background: var(--color-secondary);
    position: relative;
    display: block;
    width: 100%;
    padding: 0.75rem;
    object-fit: contain;
    aspect-ratio: 65 / 92;
    background-size: cover;
    background: rgb(var(--color-primary-light));
    transition: var(--transition);
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    cursor: pointer;

    box-shadow: 0.25rem 0.25rem 0px 0px rgb(var(--color-primary));
    @media (min-width: 960px) {
        &:hover {
            box-shadow: 0.45rem 0.45rem 0px 0px rgb(var(--color-primary));
            transform: translate(-0.15rem, -0.15rem);
        }
    }

    ${({ expanded }: { expanded?: boolean }) => (expanded ? expandedStyle : '')}
`;

const Label = styled(Text)`
    transition: var(--transition);
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1rem;
    height: 100%;
    transition: var(--transition);

    ${({ expanded }: { expanded?: boolean }) =>
        expanded
            ? css`
                  gap: 0.5rem;

                  ${Title} {
                      padding: 0.75rem 0px 0.75rem 0.75rem;
                      background: rgb(var(--color-primary));
                      box-shadow: 0.25rem 0.25rem 0px 0px
                          rgb(var(--color-secondary));

                      font-size: 1.25rem;
                      transform: none;
                      @media (min-width: 960px) {
                          font-size: 1.5rem;
                      }
                  }
              `
            : ''}
`;

interface ItemProps {
    data: MovieResult;
    position?: number;
}
export const Item: FunctionComponent<ItemProps> = ({ data, position }) => {
    const [taps, setTaps] = useState(0);
    const router = useRouter();
    const ref = useRef();
    useOnClickOutside(ref, () => setTaps(0));

    const title = data.title || (data as any).name;
    const isSeries = data.video === undefined ? true : data.video;
    const href = `/${isSeries ? 'tv' : 'movie'}/${data.id}`;
    const excerptLength = 72;

    return (
        <Wrapper expanded={taps > 0}>
            <Container
                ref={ref}
                expanded={taps > 0}
                onClick={() => {
                    if (taps == 1) router.push(href);

                    setTaps(taps + 1);
                }}
            >
                <Cover
                    width={65 * 150}
                    height={92 * 150}
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt={title}
                />
                <Content>
                    <Label
                        options={{
                            size: 30,
                            stroke: 0.65,
                            offset: 1.5
                        }}
                        mobileOptions={{
                            size: 18,
                            stroke: 0.65,
                            offset: 1.5
                        }}
                    >
                        {`${data.overview.substring(0, excerptLength)}${
                            data.overview.length > excerptLength ? '...' : ''
                        }`}
                    </Label>
                </Content>

                {position && (
                    <PositionContainer>
                        <Position>
                            <Label
                                options={{
                                    size: 122,
                                    stroke: 2,
                                    offset: 5
                                }}
                                mobileOptions={{
                                    size: 56,
                                    stroke: 0.75,
                                    offset: 2.75
                                }}
                            >{`${position}.`}</Label>
                        </Position>
                    </PositionContainer>
                )}
                <PositionContainer>
                    <Rating>
                        <Label
                            options={{
                                size: 48,
                                stroke: 0.85,
                                offset: 2.75
                            }}
                            mobileOptions={{
                                size: 32,
                                stroke: 0.75,
                                offset: 2.15
                            }}
                        >{`${data.vote_average * 10}%`}</Label>
                    </Rating>
                </PositionContainer>
                <PositionContainer>
                    <Action>
                        <Label
                            options={{
                                size: 82,
                                stroke: 1.5,
                                offset: 4.5
                            }}
                            mobileOptions={{
                                size: 42,
                                stroke: 0.75,
                                offset: 2.5
                            }}
                        >
                            ➜
                        </Label>
                    </Action>
                </PositionContainer>
            </Container>
            <Title>{title}</Title>
        </Wrapper>
    );
};
