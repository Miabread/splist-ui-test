import { createFileRoute } from '@tanstack/react-router';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from '../-root/Layout';

export const Route = createFileRoute('/client/settings')({
    component: Settings,
});

function Settings() {
    return (
        <LayoutContainer>
            <LayoutHeader></LayoutHeader>
            <LayoutMain>Hello /settings/!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
