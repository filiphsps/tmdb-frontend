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
    padding: 0.5rem 0.15rem;
    color: rgb(var(--color-secondary));
    text-shadow: -0.1rem -0.1rem 0 rgb(var(--color-primary)),
        0 -0.1rem 0 rgb(var(--color-primary)),
        0.1rem -0.1rem 0 rgb(var(--color-primary)),
        0.1rem 0 0 rgb(var(--color-primary)),
        0.1rem 0.1rem 0 rgb(var(--color-primary)),
        0 0.1rem 0 rgb(var(--color-primary)),
        -0.1rem 0.1rem 0 rgb(var(--color-primary)),
        -0.1rem 0 0 rgb(var(--color-primary));
    font-size: 1.25rem;
    font-weight: 700;
    overflow-wrap: break-word;
    transition: var(--transition);

    @media (min-width: 960px) {
        font-size: 1.75rem;
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
    padding: 0.5rem;
    transition: var(--transition);
    transform: translateX(-100%);

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

const Position = styled.div`
    z-index: 2;
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
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
        transform: scale(0.75);
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
    transform: translateX(-175%);
    transition-delay: 0s;
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
    transform: translateX(-500%);

    span {
        display: block;
    }

    @media (min-width: 960px) {
        height: 4rem;
    }
`;

const expandedStyle = css`
    box-shadow: 0.25rem 0.25rem 0px 0px rgb(var(--color-secondary));
    --color-blur-background: var(--color-primary);

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
        transform: translateX(-175%);
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
    height: 100%;
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
    const excerptLength = 78;

    return (
        <Wrapper>
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
                            size: 32,
                            stroke: 0.65,
                            offset: 1.5
                        }}
                        mobileOptions={{
                            size: 21,
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
                )}
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
            </Container>
            <Title>{title}</Title>
        </Wrapper>
    );
};
