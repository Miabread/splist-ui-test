import { createFileRoute } from '@tanstack/react-router';
import { GoHash } from 'react-icons/go';
import { ThreadSidebarItem } from './-root/ThreadSidebar';

export const Route = createFileRoute('/$tab')({
    component: Tab,
});

function Tab() {
    const { tab } = Route.useParams();
    return (
        <>
            <nav className="bg-slate-800 w-72 flex flex-col">
                <header className="h-14 grid place-items-center">
                    <h1 className="text-2xl font-bold">Tab Title</h1>
                </header>
                <ul className="p-8 text-stone-300">
                    {[1, 2, 3, 4, 5].map((it) => (
                        <ThreadSidebarItem key={it} icon={<GoHash size={24} />}>
                            Thread {it}
                        </ThreadSidebarItem>
                    ))}
                </ul>
            </nav>
            <div className="flex flex-col h-full w-full">
                <header className="bg-slate-700 h-14 grid place-items-center">header</header>

                <main className="grid place-items-center w-full h-screen bg-slate-700">Hello tab {tab}!</main>
                <footer className="bg-slate-700 h-16 grid place-items-center">footer</footer>
            </div>
            <nav className="bg-slate-800 w-72 grid place-items-center">sidebar</nav>
        </>
    );
}
