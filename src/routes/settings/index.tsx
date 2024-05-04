import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../../components/MainSidebar';
import { GoGear } from 'react-icons/go';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../../components/Layout';

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
                <LayoutHeader icon={<GoGear size={24} />} title="Settings" />
                <LayoutMain></LayoutMain>
            </LayoutContainer>
        </>
    );
}
