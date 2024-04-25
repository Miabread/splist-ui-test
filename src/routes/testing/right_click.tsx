import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/testing/right_click')({
    component: RightClick,
});

const useContextMenu = () => {
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
        onContextMenu(e: React.MouseEvent) {
            e.preventDefault();
            e.stopPropagation();
            setPoint({ x: e.pageX, y: e.pageY });
        },
    };

    const childProps = point && {
        style: { top: `${point.y}px`, left: `${point.x}px` },
        onClick(e: React.MouseEvent) {
            e.stopPropagation();
        },
        onContextMenu(e: React.MouseEvent) {
            e.preventDefault();
            e.stopPropagation();
        },
    };

    return { parentProps, childProps };
};

function RightClick() {
    const { parentProps, childProps } = useContextMenu();

    return (
        <div className="bg-white text-black w-40 h-32 grid place-content-center" {...parentProps}>
            Right click me
            {childProps && (
                <div className="bg-black text-white absolute w-20 h-40 grid place-content-center" {...childProps}>
                    Clicked!!
                </div>
            )}
        </div>
    );
}
