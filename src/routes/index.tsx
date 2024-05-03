import { Link, createFileRoute } from '@tanstack/react-router';
import { LeftSidebar, LeftSidebarHr, LeftSidebarItem } from '../components/LeftSidebar';
import { GoCodeSquare, GoGear, GoHome, GoTelescope } from 'react-icons/go';
import { Avatar } from '../components/Avatar';

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <>
            <LeftSidebar title="Splist Client">
                <Link to="/" activeOptions={{ exact: true }}>
                    {({ isActive }) => (
                        <LeftSidebarItem icon={<GoHome size={24} />} active={isActive}>
                            Home
                        </LeftSidebarItem>
                    )}
                </Link>
                <Link to="/logs">
                    {({ isActive }) => (
                        <LeftSidebarItem icon={<GoCodeSquare size={24} />} active={isActive}>
                            Logs
                        </LeftSidebarItem>
                    )}
                </Link>
                <Link to="/settings">
                    {({ isActive }) => (
                        <LeftSidebarItem icon={<GoGear size={24} />} active={isActive}>
                            Settings
                        </LeftSidebarItem>
                    )}
                </Link>
                <LeftSidebarHr />
                <Link to="/" activeOptions={{ exact: true }}>
                    {({ isActive }) => (
                        <LeftSidebarItem icon={<GoTelescope size={24} />} active={isActive}>
                            Splist Client
                        </LeftSidebarItem>
                    )}
                </Link>
                {[1, 2, 3, 4, 5].map((it) => (
                    <Link to="/$remote" params={{ remote: it.toString() }}>
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
