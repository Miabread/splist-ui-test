import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TabSidebar } from './-root/TabSidebar';
import { GoHash } from 'react-icons/go';

export const Route = createRootRoute({
    component: Root,
});

function Root() {
    return (
        <div className="flex h-screen w-screen text-white">
            <TabSidebar />
            <nav className="bg-slate-800 w-72 flex flex-col">
                <header className="h-14 grid place-items-center">
                    <h1 className="text-2xl font-bold">Tab Title</h1>
                </header>
                <ul className="p-8 text-stone-300">
                    {[1, 2, 3, 4, 5].map((it) => (
                        <li key={it} className="m-4 flex items-center text-lg">
                            <GoHash size={24} />
                            <span className="pl-2">Thread {it}</span>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex flex-col h-full w-full">
                <header className="bg-slate-700 h-14 grid place-items-center">header</header>

                <main className="grid place-items-center w-full h-screen bg-slate-700">
                    <Outlet />
                </main>
                <footer className="bg-slate-700 h-16 grid place-items-center">footer</footer>
            </div>
            <nav className="bg-slate-800 w-72 grid place-items-center">sidebar</nav>
        </div>
    );
}
