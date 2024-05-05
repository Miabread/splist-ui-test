const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: -1 },
];

const timeSince = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find((i) => i.seconds < seconds)!;
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
};

interface TimeSinceProps {
    date: Date;
}

export function TimeSince({ date, ...props }: TimeSinceProps & JSX.IntrinsicElements['span']) {
    return <span {...props}>{timeSince(date)}</span>;
}
