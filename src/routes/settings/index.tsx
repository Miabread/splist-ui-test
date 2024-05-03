import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/settings/')({
    component: SettingsIndex,
});

function SettingsIndex() {
    return <div>Hello /settings/!</div>;
}
