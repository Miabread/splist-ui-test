import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/logs/$remote')({
    component: LogsRemote,
});

function LogsRemote() {
    return <div>Hello /logs/$remote!</div>;
}
