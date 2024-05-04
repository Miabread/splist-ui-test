import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { GoCodeSquare } from 'react-icons/go';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';

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
                <LayoutHeader icon={<GoCodeSquare size={24} />} title="Logs" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
