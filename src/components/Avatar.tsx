import classNames from 'classnames';

const statusColors = {
    online: 'bg-green-600',
    away: 'bg-yellow-600',
    open: 'bg-blue-600',
    busy: 'bg-red-600',
    offline: 'bg-neutral-400',
};

const avatarColors = {
    orange: 'bg-orange-300',
    blue: 'bg-blue-300',
    pink: 'bg-pink-300',
};

export type Status = keyof typeof statusColors;

interface AvatarProps {
    status?: keyof typeof statusColors;
    color: keyof typeof avatarColors;
    sidebar?: boolean;
}

export function Avatar({ status, color, sidebar }: AvatarProps) {
    return (
        <div className={classNames('relative rounded-full', avatarColors[color], sidebar ? 'w-7 h-7' : 'w-10 h-10')}>
            {status && (
                <span
                    className={classNames(
                        'absolute rounded-full',
                        statusColors[status],
                        sidebar
                            ? 'top-[1.05rem] left-[1.05rem] w-[0.75rem] h-[0.75rem] border-[2px] border-slate-800'
                            : 'top-6 left-6 w-[1.10rem] h-[1.15rem] border-[3px] border-slate-600',
                    )}
                />
            )}
        </div>
    );
}
