import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { GoAlert, GoGear, GoServer } from 'react-icons/go';
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
                        <ThreadSidebarItem icon={<GoServer size={24} />} active={isActive}>
                            Servers
                        </ThreadSidebarItem>
                    )}
                </Link>
                <Link to="/client/logs">
                    {({ isActive }) => (
                        <ThreadSidebarItem icon={<GoAlert size={24} />} active={isActive}>
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
