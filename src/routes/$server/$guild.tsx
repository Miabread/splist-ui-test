import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { GoHash, GoPeople, GoStack } from 'react-icons/go';
import { ThreadSidebar, ThreadSidebarHr, ThreadSidebarItem } from '../-root/ThreadSidebar';

export const Route = createFileRoute('/$server/$guild')({
    component: Guild,
});

function Guild() {
    const { server, guild } = Route.useParams();
    return (
        <>
            <ThreadSidebar title={`Guild ${guild}`}>
                <Link to="/$server/$guild/members" params={{ server, guild }}>
                    {({ isActive }) => (
                        <ThreadSidebarItem icon={<GoPeople size={24} />} active={isActive}>
                            Members
                        </ThreadSidebarItem>
                    )}
                </Link>
                <Link to="/$server/$guild" params={{ server, guild }} activeOptions={{ exact: true }}>
                    {({ isActive }) => (
                        <ThreadSidebarItem icon={<GoStack size={24} />} active={isActive}>
                            Threads
                        </ThreadSidebarItem>
                    )}
                </Link>

                <ThreadSidebarHr />

                {[1, 2, 3, 4, 5].map((it) => (
                    <Link to="/$server/$guild/$thread" key={it} params={{ server, guild, thread: it.toString() }}>
                        {({ isActive }) => (
                            <ThreadSidebarItem icon={<GoHash size={24} />} active={isActive}>
                                Thread {it}
                            </ThreadSidebarItem>
                        )}
                    </Link>
                ))}
            </ThreadSidebar>
            <Outlet />
        </>
    );
}
