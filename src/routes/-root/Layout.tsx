import { PropsWithChildren, ReactElement } from 'react';

export function LayoutContainer({ children }: PropsWithChildren) {
    return <div className="flex flex-col h-full w-full">{children}</div>;
}

interface LayoutHeaderProps {
    title: string;
    icon: ReactElement;
}

export function LayoutHeader({ title, icon }: LayoutHeaderProps) {
    return (
        <header className="bg-slate-700 h-14 flex-shrink-0 flex items-center text-stone-300 border-b-slate-900 border-solid border-b-2">
            <span className="pl-5">{icon}</span>
            <h1 className="pl-3 text-white text-2xl font-bold">{title}</h1>
        </header>
    );
}

export function LayoutMain({ children }: PropsWithChildren) {
    return <main className="grid place-items-center w-full h-screen bg-slate-700">{children}</main>;
}

export function LayoutFooter({ children }: PropsWithChildren) {
    return <footer className="bg-slate-700 h-16 grid place-items-center">{children}</footer>;
}

export function LayoutSidebar({ children }: PropsWithChildren) {
    return <nav className="bg-slate-800 w-56 flex flex-col flex-shrink-0">{children}</nav>;
}
