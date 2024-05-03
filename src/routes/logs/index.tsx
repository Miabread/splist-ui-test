import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/logs/')({
    component: LogsIndex,
});

function LogsIndex() {
    return <div>Hello /logs/!</div>;
}
