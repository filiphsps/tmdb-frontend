import type { FunctionComponent, ReactNode } from 'react';

interface SiteContainerProps {
    children: ReactNode;
}
export const SiteContainer: FunctionComponent<SiteContainerProps> = ({
    children
}) => {
    return (
        <div>
            {children}
        </div>
    );
};
