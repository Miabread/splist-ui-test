import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/client/errors')({
    component: () => <div>Hello /client/errors!</div>,
});
