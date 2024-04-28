import { createFileRoute } from '@tanstack/react-router';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from '../../-root/Layout';
import { GoStack } from 'react-icons/go';

export const Route = createFileRoute('/$server/$guild/')({
    component: AllThreads,
});

function AllThreads() {
    return (
        <LayoutContainer>
            <LayoutHeader icon={<GoStack size={24} />} title="Threads" />
            <LayoutMain>Hello threads!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
