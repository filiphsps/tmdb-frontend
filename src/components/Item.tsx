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
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 0.45rem;
    padding-right: 0.75rem;
    transition: var(--transition);

    span {
        overflow-wrap: break-word;
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
    bottom: 0.45rem;
    left: 0.45rem;
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
    transition-timing-function: cubic-bezier(1, -0.1, 0.3, 0.65);
    transform: translateX(125%);

    span {
        display: block;
    }

    @media (min-width: 960px) {
        height: 4rem;
    }
`;

const expandedStyle = css`
    box-shadow: 0.35rem 0.35rem 0px 0px rgb(var(--color-primary));
    --color-stroke: var(--color-primary);

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
    }

    ${Position} {
        background: rgb(var(--color-secondary));
    }
    ${Action} {
        background: unset;
        transform: translateX(0);
    }
`;
const Container = styled.div`
    --color-stroke: var(--color-secondary);
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

    box-shadow: 0.35rem 0.35rem 0px 0px rgb(var(--color-secondary));

    ${({ expanded }: { expanded?: boolean }) => (expanded ? expandedStyle : '')}
`;

const Label = styled(Text)`
    transition: var(--transition);
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
    const excerptLength = 125;

    return (
        <Container
            ref={ref}
            expanded={taps > 0}
            onClick={() => {
                if (taps == 1) router.push(href);

                setTaps(taps + 1);
            }}
        >
            <Title>
                <Label size={48} mobileSize={32}>
                    {title}
                </Label>
            </Title>
            <Cover
                width={65 * 150}
                height={92 * 150}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={title}
            />
            <Content>
                <Label size={28} mobileSize={16}>
                    {`${data.overview.substring(0, excerptLength)}${
                        data.overview.length > excerptLength ? '...' : ''
                    }`}
                </Label>
            </Content>
            {position && (
                <Position>
                    <Label size={122} mobileSize={52}>{`${position}.`}</Label>
                </Position>
            )}
            <Action>
                <Label size={82} mobileSize={42}>
                    ➜
                </Label>
            </Action>
        </Container>
    );
};
