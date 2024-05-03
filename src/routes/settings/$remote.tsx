import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/settings/$remote')({
    component: SettingsRemote,
});

function SettingsRemote() {
    return <div>Hello /settings/$remote!</div>;
}
