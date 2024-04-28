import { Navigate, createFileRoute } from '@tanstack/react-router';

// Temporary
export const Route = createFileRoute('/$server/')({
    component: () => {
        const { server } = Route.useParams();
        return <Navigate to="/$server/$guild/" params={{ server, guild: server }} />;
    },
});
