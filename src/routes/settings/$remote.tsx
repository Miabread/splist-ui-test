import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';

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
        </>
    );
}
