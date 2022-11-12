import { FunctionComponent } from 'react';

interface HomePageProps {}
const HomePage: FunctionComponent<HomePageProps> = ({}) => {
    // NOTE: This page should never actually render thanks to the
    //       redirect in next.config.js. It's just here to setup
    //       jest and provide an initial basic rendering test.
    return <h1>Hello World</h1>;
};

export default HomePage;
