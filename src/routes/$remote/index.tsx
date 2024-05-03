import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';

export const Route = createFileRoute('/$remote/')({
    component: RemoteIndex,
});

function RemoteIndex() {
    const { remote } = Route.useParams();

    return (
        <>
            <MainSidebar
                remote={remote}
                homeLink="/$remote"
                logsLink="/logs/$remote"
                settingsLink="/settings/$remote"
                clientLink="/"
                remoteLink="/$remote"
            />
        </>
    );
}
