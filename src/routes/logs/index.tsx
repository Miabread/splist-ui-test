import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';
import { icons } from '../../components/Icons';

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
            <LayoutContainer>
                <LayoutHeader icon={<icons.Logs size={24} />} title="Logs" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
