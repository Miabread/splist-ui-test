import { createFileRoute } from '@tanstack/react-router';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from '../-root/Layout';
import { GoCodeSquare } from 'react-icons/go';

export const Route = createFileRoute('/client/logs')({
    component: Logs,
});

function Logs() {
    return (
        <LayoutContainer>
            <LayoutHeader icon={<GoCodeSquare size={24} />} title="Logs" />
            <LayoutMain>Hello logs!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
