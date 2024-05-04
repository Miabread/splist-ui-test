import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { GoGear } from 'react-icons/go';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';

export const Route = createFileRoute('/settings/$remote')({
    component: SettingsRemote,
});

function SettingsRemote() {
    const { remote } = Route.useParams();

    return (
        <>
            <MainSidebar
                remote={remote}
                homeLink="/$remote"
                logsLink="/logs/$remote"
                settingsLink="/settings/$remote"
                clientLink="/settings"
                remoteLink="/settings/$remote"
            />
            <LayoutContainer>
                <LayoutHeader icon={<GoGear size={24} />} title="Settings" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
