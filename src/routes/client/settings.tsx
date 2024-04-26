import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/client/settings')({
    component: () => <div>Hello /client/settings!</div>,
});
