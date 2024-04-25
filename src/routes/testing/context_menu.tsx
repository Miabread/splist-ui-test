import { createFileRoute } from '@tanstack/react-router';
import { ContextMenu, ContextMenuItem, useContextMenu } from '../../components/ContextMenu';

export const Route = createFileRoute('/testing/context_menu')({
    component: RightClick,
});

function RightClick() {
    const { parentProps, childProps } = useContextMenu();

    return (
        <div className="bg-white text-black w-40 h-32 grid place-content-center rounded" {...parentProps}>
            Right click me
            <ContextMenu propsFromHook={childProps}>
                <ContextMenuItem onClick={() => console.log('foo')}>Foofoofoo</ContextMenuItem>
                <ContextMenuItem onClick={() => console.log('bar')}>Barbarbar</ContextMenuItem>
                <ContextMenuItem onClick={() => console.log('baz')}>Bazbazbaz</ContextMenuItem>
            </ContextMenu>
        </div>
    );
}
