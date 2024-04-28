import { Link, createFileRoute } from '@tanstack/react-router';
import { ThreadSidebar, ThreadSidebarHr, ThreadSidebarItem } from '../-root/ThreadSidebar';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../-root/Layout';
import { GoHome, GoOrganization } from 'react-icons/go';

export const Route = createFileRoute('/$server/')({
    component: Server,
});

function Server() {
    const { server } = Route.useParams();
    return (
        <>
            <ThreadSidebar title={`Server ${server}`}>
                <ThreadSidebarItem icon={<GoOrganization size={24} />} active>
                    Guilds
                </ThreadSidebarItem>
                <ThreadSidebarHr />
                {[1, 2, 3, 4, 5].map((it) => (
                    <Link to="/$server/$guild" key={it} params={{ server, guild: it.toString() }}>
                        <ThreadSidebarItem icon={<GoHome size={24} />} active={false}>
                            Guild {it}
                        </ThreadSidebarItem>
                    </Link>
                ))}
            </ThreadSidebar>
            <LayoutContainer>
                <LayoutHeader icon={<GoOrganization size={24} />} title={server} />
                <LayoutMain>Hello server {server}!</LayoutMain>
            </LayoutContainer>
        </>
    );
}
