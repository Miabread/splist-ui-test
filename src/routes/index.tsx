import { createFileRoute } from '@tanstack/react-router';
import { MainSidebar } from '../components/MainSidebar';
import { LayoutContainer, LayoutHeader, LayoutMain } from '../components/Layout';
import { Avatar } from '../components/Avatar';
import { PropsWithChildren, ReactElement } from 'react';
import { icons } from '../components/Icons';

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
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
                        headings={['Remote', 'Status', 'Logs', 'Ping']}
                    >
                        <ConnectedRow />
                        <ConnectedRow />
                        <ConnectedRow />
                    </Table>

                    <Table
                        title={
                            <>
                                <icons.RemotesSaved size={24} /> Saved
                            </>
                        }
                        headings={['Remote', 'Account', 'Server', 'Last Connected']}
                    >
                        <SavedRow />
                        <SavedRow />
                        <SavedRow />
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

function ConnectedRow() {
    return (
        <tr className="text-stone-300 border-slate-700 border-solid border-t border-b">
            <td className="p-2">
                <div className="flex items-center">
                    <Avatar color="orange" />
                    <span className="pl-2 flex flex-col">
                        <span className="text-white">Example Remote</span>
                        <span className="text-sm">@exampleremote</span>
                    </span>
                </div>
            </td>
            <td className="p-2">
                <div className="flex items-center">
                    <Avatar color="blue" status="online" />
                    <span className="pl-2 flex flex-col">
                        <span className="text-white">Foobar</span>
                        <span className="text-sm">Playing your mom</span>
                    </span>
                </div>
            </td>
            <td className="p-2">
                <span className="flex gap-1 items-center">
                    <icons.Errors /> 0
                    <span className="w-2" />
                    <icons.Warnings /> 0
                </span>
            </td>
            <td className="p-2">120 ms</td>
        </tr>
    );
}

function SavedRow() {
    return (
        <tr className="text-stone-300 border-slate-700 border-solid border-t border-b">
            <td className="p-2">
                <div className="flex items-center">
                    <Avatar color="orange" />
                    <span className="pl-2 flex flex-col">
                        <span className="text-white">Test Server</span>
                        <span className="text-sm">@exampleremote</span>
                    </span>
                </div>
            </td>
            <td className="p-2">
                <div className="flex items-center">
                    <Avatar color="blue" />
                    <span className="pl-2 flex flex-col">
                        <span className="text-white">Foobar</span>
                        <span className="text-sm">@foobar</span>
                    </span>
                </div>
            </td>
            <td className="p-2">https://connect.splist.org</td>
            <td className="p-2">10/10/2010</td>
        </tr>
    );
}
