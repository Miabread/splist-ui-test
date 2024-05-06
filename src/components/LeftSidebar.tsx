import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { LayoutSidebar, LayoutSidebarHeader } from './Layout';

interface LeftSidebarProps extends PropsWithChildren {
    title: string;
}

export function LeftSidebar({ children, title }: LeftSidebarProps) {
    return (
        <LayoutSidebar>
            <LayoutSidebarHeader>
                <h1 className="font-bold">{title}</h1>
            </LayoutSidebarHeader>
            <ul className="p-1.5 text-stone-300">{children}</ul>
        </LayoutSidebar>
    );
}

interface LeftSidebarItemProps extends PropsWithChildren<JSX.IntrinsicElements['li']> {
    active: boolean;
    icon: React.ReactElement;
}

export function LeftSidebarItem({ children, active, icon }: LeftSidebarItemProps) {
    return (
        <li
            className={classNames(
                'p-1.5 m-0.5 flex items-center w-full rounded',
                active ? 'bg-slate-600 text-white' : 'hover:bg-slate-700 hover:text-white',
            )}
        >
            <span className="pr-2">{icon}</span>
            {children}
        </li>
    );
}

export function LeftSidebarHr({ title }: { title: string }) {
    if (!title) return <hr className="border-stone-400 mt-5 mx-2" />;

    return (
        <div className="flex items-center mt-5 mx-2">
            <hr className="border-stone-400 border-b w-4 flex-shrink-0" />
            <h2 className="text-stone-400 mx-2 text-sm font-bold">{title}</h2>
            <hr className="border-stone-400 border-b w-full" />
        </div>
    );
}
