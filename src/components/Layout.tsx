import classNames from 'classnames';
import { PropsWithChildren, ReactElement } from 'react';

export function LayoutContainer({ children }: PropsWithChildren) {
    return <div className="flex flex-col h-full w-full">{children}</div>;
}

interface LayoutHeaderProps extends PropsWithChildren {
    title: string;
    icon: ReactElement;
}

export function LayoutHeader({ title, icon, children }: LayoutHeaderProps) {
    return (
        <header className="bg-slate-700 h-12 flex-shrink-0 flex items-center text-stone-300 border-b-slate-900 border-solid border-b-2 gap-3 pl-4 pr-5">
            {icon}
            <h1 className="text-white font-bold mr-auto">{title}</h1>
            {children}
        </header>
    );
}

export function LayoutMain({ children, className, ...props }: PropsWithChildren<JSX.IntrinsicElements['main']>) {
    return (
        <main className={classNames('w-full h-screen bg-slate-700', className)} {...props}>
            {children}
        </main>
    );
}

export function LayoutFooter({ children }: PropsWithChildren) {
    return <footer className="bg-slate-700 h-16 grid place-items-center">{children}</footer>;
}

export function LayoutSidebar({ children }: PropsWithChildren) {
    return <nav className="bg-slate-800 w-56 flex flex-col flex-shrink-0">{children}</nav>;
}

export function LayoutSidebarHeader({ children }: PropsWithChildren) {
    return (
        <header className="h-12 flex items-center p-4 border-b-slate-900 border-solid border-b-2 flex-shrink-0">
            {children}
        </header>
    );
}
