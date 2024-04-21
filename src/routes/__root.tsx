import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { PropsWithChildren } from 'react';

export const Route = createRootRoute({
    component: Root,
});

function Root() {
    return (
        <div className="flex h-screen w-screen text-white">
            <TabNavigation />
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

function TabNavigation() {
    return (
        <nav className="flex flex-col bg-slate-900 h-screen items-center">
            <Link to="/">
                <TabLink>Home</TabLink>
            </Link>
            <hr className="border-white w-2/4" />
            {[1, 2, 3, 4, 5].map((it) => (
                <Link key={it} to="/$tab" params={{ tab: it.toString() }}>
                    <TabLink>{it}</TabLink>
                </Link>
            ))}
        </nav>
    );
}

function TabLink({ children }: PropsWithChildren) {
    return (
        <div
            className="
                w-14 h-14 m-2 grid place-items-center
                rounded-[1.75rem] hover:rounded-2xl transition-[border-radius] delay-75
                bg-orange-300 text-black font-bold text-lg
            "
        >
            {children}
        </div>
    );
}
