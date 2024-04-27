import { createFileRoute } from '@tanstack/react-router';
import { GoHash } from 'react-icons/go';
import { ThreadSidebar, ThreadSidebarItem } from './-root/ThreadSidebar';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain, LayoutSidebar } from './-root/Layout';

export const Route = createFileRoute('/$tab')({
    component: Tab,
});

function Tab() {
    const { tab } = Route.useParams();
    return (
        <>
            <ThreadSidebar title={`Tab ${tab}`}>
                {[1, 2, 3, 4, 5].map((it) => (
                    <ThreadSidebarItem key={it} icon={<GoHash size={24} />}>
                        Thread {it}
                    </ThreadSidebarItem>
                ))}
            </ThreadSidebar>
            <LayoutContainer>
                <LayoutHeader icon={<GoHash size={24} />} title="Thread" />
                <LayoutMain>Hello tab {tab}!</LayoutMain>
                <LayoutFooter></LayoutFooter>
            </LayoutContainer>
            <LayoutSidebar></LayoutSidebar>
        </>
    );
}
