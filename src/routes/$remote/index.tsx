import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';
import { icons } from '../../components/Icons';

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
                <LayoutHeader icon={<icons.Home size={24} />} title="Home" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
