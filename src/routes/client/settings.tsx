import { createFileRoute } from '@tanstack/react-router';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from '../-root/Layout';
import { GoGear } from 'react-icons/go';

export const Route = createFileRoute('/client/settings')({
    component: Settings,
});

function Settings() {
    return (
        <LayoutContainer>
            <LayoutHeader icon={<GoGear size={24} />} title="Settings" />
            <LayoutMain>Hello /settings/!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
