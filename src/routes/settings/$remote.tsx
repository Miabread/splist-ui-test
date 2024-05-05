import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';
import { icons } from '../../components/Icons';

export const Route = createFileRoute('/settings/$remote')({
    component: SettingsRemote,
});

function SettingsRemote() {
    const { remote } = Route.useParams();

    return (
        <>
            <MainSidebar
                remote={remote}
                homeLink="/$remote"
                logsLink="/logs/$remote"
                settingsLink="/settings/$remote"
                clientLink="/settings"
                remoteLink="/settings/$remote"
            />
            <LayoutContainer>
                <LayoutHeader icon={<icons.Settings size={24} />} title="Settings" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
