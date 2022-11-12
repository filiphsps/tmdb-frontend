import { GetStaticPaths, GetStaticProps } from 'next';
import {
    MovieDb,
    PopularMoviesResponse,
    TvResultsResponse
} from 'moviedb-promise';

import { Filter } from '../../components/Filter';
import { FunctionComponent } from 'react';
import { Item } from '../../components/Item';
import { ItemGrid } from '../../components/ItemGrid';
import { Page } from '../../components/Page';

interface OverviewProps {
    data: PopularMoviesResponse | TvResultsResponse;
}
const Overview: FunctionComponent<OverviewProps> = ({ data }) => {
    return (
        <Page>
            <Filter />
            <ItemGrid>
                {data.results.map((item, index) => (
                    <Item key={item.id} data={item} position={index + 1} />
                ))}
            </ItemGrid>
        </Page>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { type: 'movie', page: [] }
            },
            {
                params: { type: 'tv', page: [] }
            }
        ],
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (Array.isArray(params.type) || !['movie', 'tv'].includes(params.type))
        return {
            notFound: true
        };

    const moviedb = new MovieDb(process.env.tmdb_token);
    const revalidate = 60 * 60 * 6; // Every 6 hours;

    const kind = params.type;
    if (kind === 'movie') {
        return {
            props: {
                data: await moviedb.moviePopular()
            },
            revalidate
        };
    }

    return {
        props: {
            data: await moviedb.tvPopular()
        },
        revalidate
    };
};

export default Overview;
