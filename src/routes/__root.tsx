import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TabSidebar } from './-root/TabSidebar';

export const Route = createRootRoute({
    component: Root,
});

function Root() {
    return (
        <div className="flex h-screen w-screen text-white">
            <TabSidebar />
            <Outlet />
        </div>
    );
}
