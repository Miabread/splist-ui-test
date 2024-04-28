import { createFileRoute } from '@tanstack/react-router';
import { GoHash, GoPeople, GoStack } from 'react-icons/go';
import { ThreadSidebar, ThreadSidebarHr, ThreadSidebarItem } from './-root/ThreadSidebar';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain, LayoutSidebar } from './-root/Layout';

export const Route = createFileRoute('/$tab')({
    component: Tab,
});

function Tab() {
    const { tab } = Route.useParams();
    return (
        <>
            <ThreadSidebar title={`Tab ${tab}`}>
                <ThreadSidebarItem icon={<GoPeople size={24} />} active={false}>
                    Members
                </ThreadSidebarItem>
                <ThreadSidebarItem icon={<GoStack size={24} />} active={false}>
                    All Threads
                </ThreadSidebarItem>
                <ThreadSidebarHr />
                {[1, 2, 3, 4, 5].map((it) => (
                    <ThreadSidebarItem key={it} icon={<GoHash size={24} />} active={false}>
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
