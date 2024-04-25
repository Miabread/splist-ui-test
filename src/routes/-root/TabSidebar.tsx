import { Link } from '@tanstack/react-router';
import { PropsWithChildren } from 'react';
import { useStore } from '../../state';
import { ContextMenu, ContextMenuItem, useContextMenu } from '../../components/ContextMenu';
import { GoArrowDown, GoArrowUp, GoDuplicate, GoX } from 'react-icons/go';

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
    const resetTabs = useStore((store) => store.resetTabs);

    return (
        <Link to="/" {...parentProps}>
            <TabSidebarItem>Home</TabSidebarItem>
            <ContextMenu propsFromHook={childProps}>
                <ContextMenuItem onClick={() => resetTabs()}>Reset all tabs</ContextMenuItem>
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
            <TabSidebarItem>
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

function TabSidebarItem({ children }: PropsWithChildren) {
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
