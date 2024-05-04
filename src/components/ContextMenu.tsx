import { PropsWithChildren, useEffect, useState, JSX } from 'react';

export const useContextMenu = () => {
    const [point, setPoint] = useState<null | { x: number; y: number }>(null);

    useEffect(() => {
        const handleClick = () => setPoint(null);
        window.addEventListener('click', handleClick);
        window.addEventListener('contextmenu', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('contextmenu', handleClick);
        };
    }, []);

    const parentProps = {
        onContextMenu(e: React.MouseEvent<unknown>) {
            e.preventDefault();
            e.stopPropagation();
            setPoint({ x: e.pageX, y: e.pageY });
        },
    };

    const childProps = point && {
        style: { top: `${point.y}px`, left: `${point.x}px`, position: 'absolute' } as const,
        onContextMenu(e: React.MouseEvent<unknown>) {
            e.preventDefault();
            e.stopPropagation();
        },
    };

    return { parentProps, childProps };
};

interface Props {
    propsFromHook: ReturnType<typeof useContextMenu>['childProps'];
}

export function ContextMenu({ propsFromHook, children }: PropsWithChildren<Props>) {
    if (!propsFromHook) return null;
    return (
        <ul {...propsFromHook} className="bg-slate-900 text-stone-300 p-2 rounded text-base font-normal shadow z-50">
            {children}
        </ul>
    );
}

interface ContextMenuItemProps extends PropsWithChildren<JSX.IntrinsicElements['li']> {
    icon?: React.ReactElement;
}

export function ContextMenuItem({ children, icon, ...props }: ContextMenuItemProps) {
    return (
        <li
            {...props}
            className="
                hover:bg-orange-300 active:bg-orange-400 hover:text-black
                rounded p-1 flex justify-between items-center
            "
        >
            {children}
            {icon && <span className="ml-3">{icon}</span>}
        </li>
    );
}
