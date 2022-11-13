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
import { Paginator } from '../../components/Paginator';
import { useRouter } from 'next/router';

interface OverviewProps {
    data: PopularMoviesResponse | TvResultsResponse;
    type: 'movie' | 'tv';
}
const Overview: FunctionComponent<OverviewProps> = ({ data, type }) => {
    const router = useRouter();

    return (
        <Page>
            <Filter />
            <ItemGrid>
                {data.results.map((item, index) => (
                    <Item
                        key={item.id}
                        data={item}
                        position={(data.page - 1) * 20 + (index + 1)}
                    />
                ))}
            </ItemGrid>
            <Paginator
                page={data.page}
                totalPages={data.total_pages}
                onPrev={
                    data.page - 1 > 0
                        ? () =>
                              router.push(
                                  '/[type]/[[..page]]',
                                  `/${type}/${data.page - 1}`
                              )
                        : null
                }
                onNext={() =>
                    router.push(
                        '/[type]/[[..page]]',
                        `/${type}/${data.page + 1}`
                    )
                }
            />
        </Page>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { type: 'movie', page: ['1'] }
            },
            {
                params: { type: 'tv', page: ['1'] }
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

    const page =
        params.page !== undefined && params.page.length > 0
            ? Number.parseInt(params.page[0])
            : 1;
    const moviedb = new MovieDb(process.env.tmdb_token);
    const revalidate = 60 * 60 * 6; // Every 6 hours;

    const args = {
        page: page
    };

    const kind = params.type;
    if (kind === 'movie') {
        return {
            props: {
                type: params.type,
                data: await moviedb.moviePopular(args)
            },
            revalidate
        };
    }

    return {
        props: {
            type: params.type,
            data: await moviedb.tvPopular(args)
        },
        revalidate
    };
};

export default Overview;
