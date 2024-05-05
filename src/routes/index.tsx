import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../components/MainSidebar';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../components/Layout';
import { Avatar } from '../components/Avatar';
import { PropsWithChildren, ReactElement } from 'react';
import { icons } from '../components/Icons';
import { State, useStore } from '../state';
import { TimeSince } from '../components/TimeSince';

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
    const savedRemotes = useStore((store) => store.savedRemotes);
    const connectedRemotes = useStore((store) => store.connectedRemotes);

    return (
        <>
            <MainSidebar homeLink="/" logsLink="/logs" settingsLink="/settings" clientLink="/" remoteLink="/$remote" />
            <LayoutContainer>
                <LayoutHeader icon={<icons.Home size={24} />} title="Home" />
                <LayoutMain className="px-16">
                    <Table
                        title={
                            <>
                                <icons.RemotesConnected size={24} /> Connected
                            </>
                        }
                        headings={['Remote', 'Status', 'Health', 'Connected']}
                    >
                        {Object.entries(connectedRemotes).map(([handle, remote]) => (
                            <ConnectedRow {...remote} {...savedRemotes[handle]} key={handle} />
                        ))}
                    </Table>

                    <Table
                        title={
                            <>
                                <icons.RemotesSaved size={24} /> Saved
                            </>
                        }
                        headings={['Remote', 'Account', 'Server', 'Disconnected']}
                    >
                        {Object.entries(savedRemotes)
                            .filter(([handle]) => !Object.hasOwn(connectedRemotes, handle))
                            .map(([handle, remote]) => (
                                <SavedRow {...remote} key={handle} />
                            ))}
                    </Table>
                </LayoutMain>
            </LayoutContainer>
        </>
    );
}

interface TableProps extends PropsWithChildren {
    title: ReactElement;
    headings: string[];
}

function Table({ title, headings, children }: TableProps) {
    return (
        <section className="mt-4 w-full">
            <h1 className="flex gap-3 text-lg font-bold p-4 pb-3 pl-0">{title}</h1>
            <div className="w-full bg-slate-600 rounded p-5 pt-1">
                <table className="w-full">
                    <thead>
                        <tr className="text-left font-medium">
                            {headings.map((heading, key) => (
                                <th className="p-2" key={key}>
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </table>
            </div>
        </section>
    );
}

function ConnectedRow(props: State['savedRemotes'][number] & State['connectedRemotes'][number]) {
    return (
        <tr className="text-stone-300 border-slate-700 border-solid border-t border-b">
            <td className="p-2">
                <div className="flex items-center">
                    <Avatar color="orange" status={props.status} />
                    <span className="pl-2 flex flex-col">
                        <span className="text-white">{props.name}</span>
                        <span className="text-sm">{props.statusMessage}</span>
                    </span>
                </div>
            </td>
            <td className="p-2">
                <div className="flex items-center">
                    <Avatar color="blue" status={props.userStatus} />
                    <span className="pl-2 flex flex-col">
                        <span className="text-white">{props.username}</span>
                        <span className="text-sm">{props.userStatusMessage}</span>
                    </span>
                </div>
            </td>
            <td className="p-2">
                <span className="flex gap-3 items-center">
                    <span className="flex gap-1 items-center">
                        <icons.Errors /> {props.errors}
                    </span>
                    <span className="flex gap-1 items-center">
                        <icons.Warnings /> {props.warnings}
                    </span>
                    <span className="flex gap-1 items-center">
                        <icons.Ping /> {props.ping}ms
                    </span>
                </span>
            </td>
            <td className="p-2">
                <TimeSince date={props.connected} />
            </td>
        </tr>
    );
}

function SavedRow(props: State['savedRemotes'][number]) {
    return (
        <tr className="text-stone-300 border-slate-700 border-solid border-t border-b">
            <td className="p-2">
                <div className="flex items-center">
                    <Avatar color="orange" status={props.lastStatus} />
                    <span className="pl-2 flex flex-col">
                        <span className="text-white">{props.name}</span>
                        <span className="text-sm">{props.lastStatusMessage}</span>
                    </span>
                </div>
            </td>
            <td className="p-2">
                <div className="flex items-center">
                    <Avatar color="blue" />
                    <span className="pl-2 flex flex-col">
                        <span className="text-white">{props.username}</span>
                        <span className="text-sm">@{props.userHandle}</span>
                    </span>
                </div>
            </td>
            <td className="p-2">{props.address}</td>
            <td className="p-2">
                <TimeSince date={props.disconnected} />
            </td>
        </tr>
    );
}
