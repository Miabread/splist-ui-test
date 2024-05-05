import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';
import { icons } from '../../components/Icons';

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
            <LayoutContainer>
                <LayoutHeader icon={<icons.Logs size={24} />} title="Logs" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
