import classNames from 'classnames';
import { PropsWithChildren } from 'react';

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
