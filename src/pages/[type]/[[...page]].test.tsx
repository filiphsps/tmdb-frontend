import OverviewPage from './[[...page]].page';
import { render } from '@testing-library/react';

describe('pages', () => {
    describe('Overview', () => {
        it.skip('renders unchanged', () => {
            const { container } = render(
                <OverviewPage data={{ results: [] }} />
            );
            expect(container).toMatchSnapshot();
        });
    });
});
