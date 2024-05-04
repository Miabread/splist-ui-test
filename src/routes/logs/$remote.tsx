import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { GoCodeSquare } from 'react-icons/go';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';

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
                <LayoutHeader icon={<GoCodeSquare size={24} />} title="Logs" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
