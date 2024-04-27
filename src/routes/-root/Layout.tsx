import { PropsWithChildren } from 'react';

export function LayoutContainer({ children }: PropsWithChildren) {
    return <div className="flex flex-col h-full w-full">{children}</div>;
}

export function LayoutHeader({}: PropsWithChildren) {
    return <header className="bg-slate-700 h-14 grid place-items-center">header</header>;
}

export function LayoutMain({ children }: PropsWithChildren) {
    return <main className="grid place-items-center w-full h-screen bg-slate-700">{children}</main>;
}

export function LayoutFooter({}: PropsWithChildren) {
    return <footer className="bg-slate-700 h-16 grid place-items-center">footer</footer>;
}

export function LayoutSidebar({ children }: PropsWithChildren) {
    return <nav className="bg-slate-800 w-56 flex flex-col flex-shrink-0">{children}</nav>;
}
