import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';
import { icons } from '../../components/Icons';

export const Route = createFileRoute('/settings/')({
    component: SettingsIndex,
});

function SettingsIndex() {
    return (
        <>
            <MainSidebar
                homeLink="/"
                logsLink="/logs"
                settingsLink="/settings"
                clientLink="/settings"
                remoteLink="/settings/$remote"
            />
            <LayoutContainer>
                <LayoutHeader icon={<icons.Settings size={24} />} title="Settings" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
