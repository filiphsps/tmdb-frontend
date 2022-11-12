import 'destyle.css';
import '../app.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SiteContainer } from '../components/SiteContainer';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, user-scalable=no"
                />
            </Head>
            <SiteContainer>
                <Component key={router.asPath} {...pageProps} />
            </SiteContainer>
        </>
    );
};

export default App;
