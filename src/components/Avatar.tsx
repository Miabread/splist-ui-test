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

interface AvatarProps {
    status?: keyof typeof statusColors;
    avatar: keyof typeof avatarColors;
    small?: boolean;
}

export function Avatar({ status, avatar, small }: AvatarProps) {
    return (
        <div className={classNames('relative rounded-full', avatarColors[avatar], small ? 'w-7 h-7' : 'w-10 h-10')}>
            {status && (
                <span
                    className={classNames(
                        'absolute top-6 left-6 rounded-full w-[1.10rem] h-[1.15rem] border-slate-600 border-[3px]',
                        statusColors[status],
                    )}
                />
            )}
        </div>
    );
}
