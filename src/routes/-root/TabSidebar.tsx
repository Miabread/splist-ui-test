import { Link } from '@tanstack/react-router';
import { PropsWithChildren } from 'react';
import { useStore } from '../../state';
import { ContextMenu, ContextMenuItem, useContextMenu } from '../../components/ContextMenu';
import { GoArrowDown, GoArrowUp, GoDuplicate, GoPlus, GoX, GoXCircle } from 'react-icons/go';
import classNames from 'classnames';

export function TabSidebar() {
    const tabs = useStore((store) => store.tabs);

    return (
        <nav className="flex flex-col bg-slate-900 h-screen items-center">
            <HomeLink />
            <hr className="border-white w-2/4" />
            {tabs.map((link, key) => (
                <TabLink key={key} link={link} index={key} />
            ))}
        </nav>
    );
}

function HomeLink() {
    const { parentProps, childProps } = useContextMenu();
    const createNewTab = useStore((store) => store.createNewTab);
    const closeAllTabs = useStore((store) => store.closeAllTabs);

    return (
        <Link to="/" {...parentProps}>
            <TabSidebarItem active={childProps !== null}>Home</TabSidebarItem>
            <ContextMenu propsFromHook={childProps}>
                <ContextMenuItem onClick={() => createNewTab()} icon={<GoPlus size={16} />}>
                    New tab
                </ContextMenuItem>
                <ContextMenuItem onClick={() => closeAllTabs()} icon={<GoXCircle size={16} />}>
                    Close all
                </ContextMenuItem>
            </ContextMenu>
        </Link>
    );
}

function TabLink({ link, index }: { link: string; index: number }) {
    const { parentProps, childProps } = useContextMenu();
    const closeTab = useStore((store) => store.closeTab);
    const duplicateTab = useStore((store) => store.duplicateTab);
    const shiftTabUp = useStore((store) => store.shiftTabUp);
    const shiftTabDown = useStore((store) => store.shiftTabDown);

    return (
        <Link to={link} {...parentProps}>
            <TabSidebarItem active={childProps !== null}>
                {link}
                <ContextMenu propsFromHook={childProps}>
                    <ContextMenuItem onClick={() => closeTab(index)} icon={<GoX size={16} />}>
                        Close
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => duplicateTab(index)} icon={<GoDuplicate size={16} />}>
                        Duplicate
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => shiftTabUp(index)} icon={<GoArrowUp size={16} />}>
                        Shift up
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => shiftTabDown(index)} icon={<GoArrowDown size={16} />}>
                        Shift down
                    </ContextMenuItem>
                </ContextMenu>
            </TabSidebarItem>
        </Link>
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
                'rounded-[1.75rem] hover:rounded-2xl transition-[border-radius] delay-75',
                active && 'rounded-2xl',
            )}
        >
            {children}
        </div>
    );
}
