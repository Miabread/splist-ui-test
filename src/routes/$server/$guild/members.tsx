import { createFileRoute } from '@tanstack/react-router';
import { GoPeople } from 'react-icons/go';
import { LayoutContainer, LayoutHeader, LayoutMain, LayoutFooter } from '../../-root/Layout';

export const Route = createFileRoute('/$server/$guild/members')({
    component: Members,
});

function Members() {
    return (
        <LayoutContainer>
            <LayoutHeader icon={<GoPeople size={24} />} title="Members" />
            <LayoutMain>Hello members!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
