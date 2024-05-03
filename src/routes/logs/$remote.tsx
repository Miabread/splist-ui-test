import { Link, createFileRoute } from '@tanstack/react-router';
import { GoHome, GoCodeSquare, GoGear, GoTelescope } from 'react-icons/go';
import { Avatar } from '../../components/Avatar';
import { LeftSidebar, LeftSidebarItem, LeftSidebarHr } from '../../components/LeftSidebar';

export const Route = createFileRoute('/logs/$remote')({
    component: LogsRemote,
});

function LogsRemote() {
    const { remote } = Route.useParams();

    return (
        <>
            <LeftSidebar title={`Remote ${remote}`}>
                <Link to="/$remote" params={{ remote }} activeOptions={{ exact: true }}>
                    {({ isActive }) => (
                        <LeftSidebarItem icon={<GoHome size={24} />} active={isActive}>
                            Home
                        </LeftSidebarItem>
                    )}
                </Link>
                <Link to="/logs/$remote" params={{ remote }}>
                    {({ isActive }) => (
                        <LeftSidebarItem icon={<GoCodeSquare size={24} />} active={isActive}>
                            Logs
                        </LeftSidebarItem>
                    )}
                </Link>
                <Link to="/settings/$remote" params={{ remote }}>
                    {({ isActive }) => (
                        <LeftSidebarItem icon={<GoGear size={24} />} active={isActive}>
                            Settings
                        </LeftSidebarItem>
                    )}
                </Link>
                <LeftSidebarHr />
                <Link to="/logs" activeOptions={{ exact: true }}>
                    {({ isActive }) => (
                        <LeftSidebarItem icon={<GoTelescope size={24} />} active={isActive}>
                            Splist Client
                        </LeftSidebarItem>
                    )}
                </Link>
                {[1, 2, 3, 4, 5].map((it) => (
                    <Link to="/logs/$remote" params={{ remote: it.toString() }}>
                        {({ isActive }) => (
                            <LeftSidebarItem key={it} icon={<Avatar sidebar color="orange" />} active={isActive}>
                                <span className="flex flex-col">
                                    <span className="text-white text-sm">Server {it}</span>
                                    <span className="text-xs">@remote{it}</span>
                                </span>
                            </LeftSidebarItem>
                        )}
                    </Link>
                ))}
            </LeftSidebar>
        </>
    );
}
