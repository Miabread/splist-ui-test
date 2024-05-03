import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';

export const Route = createFileRoute('/logs/')({
    component: LogsIndex,
});

function LogsIndex() {
    return (
        <>
            <MainSidebar
                homeLink="/"
                logsLink="/logs"
                settingsLink="/settings"
                clientLink="/logs"
                remoteLink="/logs/$remote"
            />
        </>
    );
}
