import { Link } from '@tanstack/react-router';
import { NamedAvatar } from './Avatar';
import { LeftSidebar, LeftSidebarHr, LeftSidebarItem } from './LeftSidebar';
import { icons } from './Icons';
import { useStore } from '../state';

interface MainSidebarProps {
    remote?: string;
    homeLink: string;
    logsLink: string;
    settingsLink: string;
    clientLink: string;
    remoteLink: string;
}

export function MainSidebar({ remote, ...links }: MainSidebarProps) {
    const savedRemotes = useStore((store) => store.savedRemotes);
    const connectedRemotes = useStore((store) => store.connectedRemotes);

    return (
        <LeftSidebar title={remote ? savedRemotes[remote].name : 'Splist Client'}>
            <Link to={links.homeLink} params={{ remote }} activeOptions={{ exact: true }}>
                {({ isActive }) => (
                    <LeftSidebarItem icon={<icons.Home size={24} />} active={isActive}>
                        Home
                    </LeftSidebarItem>
                )}
            </Link>
            <Link to={links.logsLink} params={{ remote }}>
                {({ isActive }) => (
                    <LeftSidebarItem icon={<icons.Logs size={24} />} active={isActive}>
                        Logs
                    </LeftSidebarItem>
                )}
            </Link>
            <Link to={links.settingsLink} params={{ remote }}>
                {({ isActive }) => (
                    <LeftSidebarItem icon={<icons.Settings size={24} />} active={isActive}>
                        Settings
                    </LeftSidebarItem>
                )}
            </Link>

            <LeftSidebarHr title="Connected" />
            <Link to={links.clientLink} activeOptions={{ exact: true }}>
                {({ isActive }) => (
                    <LeftSidebarItem icon={<icons.SplistClient size={24} />} active={isActive}>
                        Splist Client
                    </LeftSidebarItem>
                )}
            </Link>
            {Object.entries(connectedRemotes).map(([handle, remote]) => (
                <Link key={handle} to={links.remoteLink} params={{ remote: handle }}>
                    {({ isActive }) => (
                        <LeftSidebarItem active={isActive}>
                            <NamedAvatar
                                color="orange"
                                status={remote.status}
                                style="sidebar"
                                name={savedRemotes[handle].name}
                                message={remote.statusMessage}
                            />
                        </LeftSidebarItem>
                    )}
                </Link>
            ))}

            <LeftSidebarHr title="Saved" />
            {Object.entries(savedRemotes)
                .filter(([handle]) => !Object.hasOwn(connectedRemotes, handle))
                .map(([handle, remote]) => (
                    <Link key={handle} to={links.remoteLink} params={{ remote: handle }}>
                        {({ isActive }) => (
                            <LeftSidebarItem active={isActive}>
                                <NamedAvatar
                                    color="orange"
                                    status={remote.lastStatus}
                                    style="sidebar"
                                    name={savedRemotes[handle].name}
                                    message={remote.lastStatusMessage}
                                />
                            </LeftSidebarItem>
                        )}
                    </Link>
                ))}
        </LeftSidebar>
    );
}
