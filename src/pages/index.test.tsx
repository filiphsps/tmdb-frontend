import { render, screen } from '@testing-library/react';

import HomePage from './index.page';

describe('pages', () => {
    describe('Home', () => {
        it('renders a heading', () => {
            render(<HomePage />);

            const heading = screen.getByRole('heading', {
                name: 'Hello World'
            });

            expect(heading).toBeInTheDocument();
        });

        it('renders unchanged', () => {
            const { container } = render(<HomePage />);
            expect(container).toMatchSnapshot();
        });
    });
});
