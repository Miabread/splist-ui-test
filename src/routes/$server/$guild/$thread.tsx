import { createFileRoute } from '@tanstack/react-router';
import { GoHash } from 'react-icons/go';
import { LayoutContainer, LayoutHeader, LayoutMain, LayoutFooter } from '../../-root/Layout';

export const Route = createFileRoute('/$server/$guild/$thread')({
    component: Thread,
});

function Thread() {
    const { thread } = Route.useParams();
    return (
        <LayoutContainer>
            <LayoutHeader icon={<GoHash size={24} />} title={thread} />
            <LayoutMain>Hello thread {thread}!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
