import styled, { css } from 'styled-components';

import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MovieResult } from 'moviedb-promise';
import { Text } from './Text';

const Content = styled.div`
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
const Container = styled(Link)`
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

    box-shadow: 0.35rem 0.35rem 0px 0px rgb(var(--color-primary-light));

    &:hover {
        box-shadow: 0.35rem 0.35rem 0px 0px rgb(var(--color-primary));
        --color-stroke: var(--color-primary);

        ${Cover} {
            transition-timing-function: cubic-bezier(1, -0.1, 0.3, 0.65);
            transition-duration: 500ms;
            transform: translateX(-100%);
        }
    }
`;

const Position = styled.div`
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.45rem;
`;
const Label = styled(Text)`
    transition: var(--transition);
`;

interface ItemProps {
    data: MovieResult;
    position?: number;
}
export const Item: FunctionComponent<ItemProps> = ({ data, position }) => {
    console.log(data);
    const title = data.title || (data as any).name;
    const isSeries = data.video === undefined ? true : data.video;
    return (
        <Container href={`/${isSeries ? 'tv' : 'movie'}/${data.id}`}>
            <Content>
                <Label size={48} mobileSize={32}>
                    {title}
                </Label>
            </Content>
            <Cover
                width={65 * 150}
                height={92 * 150}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={title}
            />
            {position && (
                <Position>
                    <Label size={122} mobileSize={52}>{`${position}.`}</Label>
                </Position>
            )}
        </Container>
    );
};
