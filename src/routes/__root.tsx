import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TabSidebar } from './-root/TabSidebar';

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
                        <li key={it} className="flex items-center text-lg">
                            <span className="mr-2 font-bold italic text-2xl">#</span> Thread {it}
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
