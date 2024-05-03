import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$remote/')({
    component: RemoteIndex,
});

function RemoteIndex() {
    return <div>Hello /$remote/!</div>;
}
