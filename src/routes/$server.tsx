import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { GoHash, GoPeople, GoStack } from 'react-icons/go';
import { ThreadSidebar, ThreadSidebarHr, ThreadSidebarItem } from './-root/ThreadSidebar';

export const Route = createFileRoute('/$server')({
    component: Server,
});

function Server() {
    const { server } = Route.useParams();
    return (
        <>
            <ThreadSidebar title={`Tab ${server}`}>
                <Link to="/$server/members" params={{ server }}>
                    {({ isActive }) => (
                        <ThreadSidebarItem icon={<GoPeople size={24} />} active={isActive}>
                            Members
                        </ThreadSidebarItem>
                    )}
                </Link>
                <Link to="/$server" params={{ server }} activeOptions={{ exact: true }}>
                    {({ isActive }) => (
                        <ThreadSidebarItem icon={<GoStack size={24} />} active={isActive}>
                            Threads
                        </ThreadSidebarItem>
                    )}
                </Link>

                <ThreadSidebarHr />

                {[1, 2, 3, 4, 5].map((it) => (
                    <Link to="/$server/$thread" params={{ server, thread: it.toString() }}>
                        {({ isActive }) => (
                            <ThreadSidebarItem key={it} icon={<GoHash size={24} />} active={isActive}>
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
