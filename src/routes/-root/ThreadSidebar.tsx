import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface ThreadSidebarProps extends PropsWithChildren {
    title: string;
}

export function ThreadSidebar({ children, title }: ThreadSidebarProps) {
    return (
        <nav className="bg-slate-800 w-72 flex flex-col">
            <header className="h-14 grid place-items-center">
                <h1 className="text-2xl font-bold">{title}</h1>
            </header>
            <ul className="p-2 text-stone-300">{children}</ul>
        </nav>
    );
}

interface ThreadSidebarItemProps extends PropsWithChildren<JSX.IntrinsicElements['li']> {
    active?: boolean;
    icon?: React.ReactElement;
}

export function ThreadSidebarItem({ children, active, icon }: ThreadSidebarItemProps) {
    return (
        <li
            className={classNames(
                'p-2 pl-4 mt-1 mb-1 flex items-center text-lg w-full rounded',
                'hover:bg-slate-700 hover:text-white',
                active && 'bg-slate-600 text-white',
            )}
        >
            {icon && <span className="pr-4">{icon}</span>}
            {children}
        </li>
    );
}
