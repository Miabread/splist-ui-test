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

const avatarStyles = {
    sidebar: 'w-7 h-7',
    home: 'w-10 h-10',
};

const indicatorStyles = {
    sidebar: 'top-[1.05rem] left-[1.05rem] w-[0.75rem] h-[0.75rem] border-[2px] border-slate-800',
    home: 'top-6 left-6 w-[1.10rem] h-[1.15rem] border-[3px] border-slate-600',
};

export type Status = keyof typeof statusColors;

interface AvatarProps {
    status?: keyof typeof statusColors;
    color: keyof typeof avatarColors;
    style: keyof typeof avatarStyles;
}

export function Avatar({ status, color, style }: AvatarProps) {
    return (
        <div className={classNames('relative rounded-full', avatarColors[color], avatarStyles[style])}>
            {status && (
                <span className={classNames('absolute rounded-full', statusColors[status], indicatorStyles[style])} />
            )}
        </div>
    );
}

interface NamedAvatarProps extends AvatarProps {
    name: string;
    message?: string;
}

const nameStyles = {
    sidebar: 'text-sm',
    home: 'text-white',
};

const messageStyles = {
    sidebar: 'text-xs',
    home: 'text-sm',
};

export function NamedAvatar({ name, message, style, ...avatar }: NamedAvatarProps) {
    return (
        <div className="flex gap-2 items-center">
            <Avatar {...avatar} style={style} />
            <span className="flex flex-col">
                <span className={nameStyles[style]}>{name}</span>
                <span className={messageStyles[style]}>{message}</span>
            </span>
        </div>
    );
}
