import { Outlet, createFileRoute } from '@tanstack/react-router';
import { GoAlert, GoGear, GoServer } from 'react-icons/go';
import { ThreadSidebarItem } from './-root/ThreadSidebar';

export const Route = createFileRoute('/client')({
    component: Client,
});

function Client() {
    return (
        <>
            <nav className="bg-slate-800 w-72 flex flex-col">
                <header className="h-14 grid place-items-center">
                    <h1 className="text-2xl font-bold">Splist Client</h1>
                </header>
                <ul className="p-2 text-stone-300">
                    <ThreadSidebarItem icon={<GoServer size={24} />}>Servers</ThreadSidebarItem>
                    <ThreadSidebarItem icon={<GoAlert size={24} />}>Errors</ThreadSidebarItem>
                    <ThreadSidebarItem icon={<GoGear size={24} />}>Settings</ThreadSidebarItem>
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
        </>
    );
}
