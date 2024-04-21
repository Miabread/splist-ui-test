import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$tab')({
    component: Tab,
});

function Tab() {
    const { tab } = Route.useParams();
    return <h3>Hello tab {tab}!</h3>;
}
