import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';

export const Route = createFileRoute('/logs/$remote')({
    component: LogsRemote,
});

function LogsRemote() {
    const { remote } = Route.useParams();

    return (
        <>
            <MainSidebar
                remote={remote}
                homeLink="/$remote"
                logsLink="/logs/$remote"
                settingsLink="/settings/$remote"
                clientLink="/logs"
                remoteLink="/logs/$remote"
            />
        </>
    );
}
