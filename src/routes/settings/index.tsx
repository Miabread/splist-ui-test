import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';

export const Route = createFileRoute('/settings/')({
    component: SettingsIndex,
});

function SettingsIndex() {
    return (
        <>
            <MainSidebar
                homeLink="/"
                logsLink="/logs"
                settingsLink="/settings"
                clientLink="/settings"
                remoteLink="/settings/$remote"
            />
        </>
    );
}
