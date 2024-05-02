import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { GoCodeSquare, GoGear, GoStack, GoTelescope } from 'react-icons/go';
import { ThreadSidebar, ThreadSidebarHr, ThreadSidebarItem } from './-root/ThreadSidebar';
import { Avatar } from '../components/Avatar';

export const Route = createFileRoute('/client')({
    component: Client,
});

function Client() {
    return (
        <>
            <ThreadSidebar title="Splist Client">
                <Link to="/client/" activeOptions={{ exact: true }}>
                    {({ isActive }) => (
                        <ThreadSidebarItem icon={<GoTelescope size={24} />} active={isActive}>
                            Overview
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
                <ThreadSidebarHr />
                <ThreadSidebarItem icon={<GoStack size={24} />} active>
                    All
                </ThreadSidebarItem>
                {[1, 2, 3, 4, 5].map((it) => (
                    <ThreadSidebarItem key={it} icon={<Avatar sidebar color="orange" />} active={false}>
                        <span className="flex flex-col">
                            <span className="text-white text-sm">Server {it}</span>
                            <span className="text-xs">@remote{it}</span>
                        </span>
                    </ThreadSidebarItem>
                ))}
            </ThreadSidebar>
            <Outlet />
        </>
    );
}
