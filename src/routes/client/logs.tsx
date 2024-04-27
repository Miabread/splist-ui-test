import { createFileRoute } from '@tanstack/react-router';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from '../-root/Layout';

export const Route = createFileRoute('/client/logs')({
    component: Logs,
});

function Logs() {
    return (
        <LayoutContainer>
            <LayoutHeader></LayoutHeader>
            <LayoutMain>Hello /logs/!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
