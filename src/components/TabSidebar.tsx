import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { icons } from './Icons';

export function TabSidebar() {
    return (
        <nav className="flex flex-col bg-slate-900 h-screen items-center">
            <TabSidebarItem active>
                <icons.SplistClient size={24} />
            </TabSidebarItem>
            <hr className="border-white w-2/4" />
        </nav>
    );
}

interface TabSidebarItemProps {
    active: boolean;
}

function TabSidebarItem({ children, active }: PropsWithChildren<TabSidebarItemProps>) {
    return (
        <div
            className={classNames(
                'w-14 h-14 m-2 grid place-items-center',
                'bg-orange-300 text-black font-bold text-lg',
                'transition-[border-radius] delay-75',
                active ? 'rounded-2xl' : 'rounded-[1.75rem] hover:rounded-2xl',
            )}
        >
            {children}
        </div>
    );
}
