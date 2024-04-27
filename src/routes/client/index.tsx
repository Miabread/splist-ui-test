import { createFileRoute } from '@tanstack/react-router';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from '../-root/Layout';
import { GoServer } from 'react-icons/go';

export const Route = createFileRoute('/client/')({
    component: Index,
});

function Index() {
    return (
        <LayoutContainer>
            <LayoutHeader icon={<GoServer size={24} />} title="Servers" />
            <LayoutMain>Hello /client/!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
