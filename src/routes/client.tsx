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
                <Link to="/client/">
                    <ThreadSidebarItem icon={<GoServer size={24} />}>Servers</ThreadSidebarItem>
                </Link>
                <Link to="/client/logs">
                    <ThreadSidebarItem icon={<GoAlert size={24} />}>Logs</ThreadSidebarItem>
                </Link>
                <Link to="/client/settings">
                    <ThreadSidebarItem icon={<GoGear size={24} />}>Settings</ThreadSidebarItem>
                </Link>
            </ThreadSidebar>
            <Outlet />
        </>
    );
}
