import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../components/MainSidebar';

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <>
            <MainSidebar homeLink="/" logsLink="/logs" settingsLink="/settings" clientLink="/" remoteLink="/$remote" />
        </>
    );
}
