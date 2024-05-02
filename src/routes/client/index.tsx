import { createFileRoute } from '@tanstack/react-router';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from '../-root/Layout';
import { GoAlert, GoMoon, GoPulse, GoTelescope, GoXCircle } from 'react-icons/go';
import { Avatar } from '../../components/Avatar';

export const Route = createFileRoute('/client/')({
    component: Index,
});

function Index() {
    return (
        <>
            <LayoutContainer>
                <LayoutHeader icon={<GoTelescope size={24} />} title="Overview" />
                <LayoutMain>
                    <main className="mt-2 w-4/5 m-auto">
                        <section>
                            <h1 className="flex gap-3 text-lg font-bold p-4">
                                <GoPulse size={24} /> Connected
                            </h1>
                            <ConnectedTable />
                        </section>
                        <section className="mt-10">
                            <h1 className="flex gap-3 text-lg font-bold p-4">
                                <GoMoon size={24} /> Saved
                            </h1>
                            <SavedTable />
                        </section>
                    </main>
                </LayoutMain>
                <LayoutFooter></LayoutFooter>
            </LayoutContainer>
        </>
    );
}

const ConnectedTable = () => {
    return (
        <div className="w-full bg-slate-600 rounded p-5 pt-1">
            <table className="w-full">
                <thead>
                    <tr className="text-left font-medium">
                        <th className="p-2">Remote</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Logs</th>
                        <th className="p-2">Ping</th>
                    </tr>
                </thead>
                <tbody>
                    <ConnectedRow />
                    <ConnectedRow />
                    <ConnectedRow />
                </tbody>
            </table>
        </div>
    );
};

const ConnectedRow = () => {
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
                    <Avatar color="blue" status="online" />
                    <span className="pl-2 flex flex-col">
                        <span className="text-white">Foobar</span>
                        <span className="text-sm">Playing your mom</span>
                    </span>
                </div>
            </td>
            <td className="p-2">
                <span className="flex gap-1 items-center">
                    <GoXCircle /> 0
                    <span className="w-2" />
                    <GoAlert /> 0
                </span>
            </td>
            <td className="p-2">120 ms</td>
        </tr>
    );
};

const SavedTable = () => {
    return (
        <div className="w-full bg-slate-600 rounded p-5 pt-1">
            <table className="w-full">
                <thead>
                    <tr className="text-left font-medium">
                        <th className="p-2">Remote</th>
                        <th className="p-2">Account</th>
                        <th className="p-2">Server</th>
                        <th className="p-2">Last Connected</th>
                    </tr>
                </thead>
                <tbody>
                    <SavedRow />
                    <SavedRow />
                    <SavedRow />
                </tbody>
            </table>
        </div>
    );
};

const SavedRow = () => {
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
};
