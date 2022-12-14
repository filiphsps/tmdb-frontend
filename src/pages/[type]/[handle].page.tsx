import { GetStaticPaths, GetStaticProps } from 'next';

import { FunctionComponent } from 'react';
import { Page } from '../../components/Page';

interface ItemPageProps {}
const ItemPage: FunctionComponent<ItemPageProps> = ({}) => {
    return (
        <Page>
            hello world
            <div style={{ paddingBottom: '400vh' }} />
        </Page>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { type: 'movie', handle: 'test' } }],
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (Array.isArray(params.type) || !['movie', 'tv'].includes(params.type))
        return {
            notFound: true
        };

    return {
        props: {},
        revalidate: 10
    };
};

export default ItemPage;
