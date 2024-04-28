import { createFileRoute } from '@tanstack/react-router';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from '../-root/Layout';
import { GoBroadcast } from 'react-icons/go';

export const Route = createFileRoute('/client/')({
    component: Index,
});

function Index() {
    return (
        <LayoutContainer>
            <LayoutHeader icon={<GoBroadcast size={24} />} title="Servers" />
            <LayoutMain>Hello servers!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
