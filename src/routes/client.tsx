import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { GoBroadcast, GoCodeSquare, GoGear } from 'react-icons/go';
import { ThreadSidebar, ThreadSidebarItem } from './-root/ThreadSidebar';

export const Route = createFileRoute('/client')({
    component: Client,
});

function Client() {
    return (
        <>
            <ThreadSidebar title="Splist Client">
                <Link to="/client/" activeOptions={{ exact: true }}>
                    {({ isActive }) => (
                        <ThreadSidebarItem icon={<GoBroadcast size={24} />} active={isActive}>
                            Servers
                        </ThreadSidebarItem>
                    )}
                </Link>
                <Link to="/client/logs">
                    {({ isActive }) => (
                        <ThreadSidebarItem icon={<GoCodeSquare size={24} />} active={isActive}>
                            Logs
                        </ThreadSidebarItem>
                    )}
                </Link>
                <Link to="/client/settings">
                    {({ isActive }) => (
                        <ThreadSidebarItem icon={<GoGear size={24} />} active={isActive}>
                            Settings
                        </ThreadSidebarItem>
                    )}
                </Link>
            </ThreadSidebar>
            <Outlet />
        </>
    );
}
