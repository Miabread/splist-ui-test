import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { GoHome } from 'react-icons/go';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';

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
            <LayoutContainer>
                <LayoutHeader icon={<GoHome size={24} />} title="Home" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
