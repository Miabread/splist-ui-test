import { createFileRoute } from '@tanstack/react-router';
import {
    LayoutContainer,
    LayoutFooter,
    LayoutHeader,
    LayoutMain,
    LayoutSidebar,
    LayoutSidebarHeader,
} from '../-root/Layout';
import { GoAlert, GoBroadcast, GoMoon, GoPulse, GoXCircle } from 'react-icons/go';

export const Route = createFileRoute('/client/')({
    component: Index,
});

function Index() {
    return (
        <>
            <LayoutContainer>
                <LayoutHeader icon={<GoBroadcast size={24} />} title="Servers" />
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
            <LayoutSidebar>
                <LayoutSidebarHeader />
            </LayoutSidebar>
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
            <td className="p-2 text-white">
                <div className="flex items-center">
                    <div className="bg-orange-300 w-10 h-10 rounded-full" />
                    <span className="pl-2 flex">Test Server</span>
                </div>
            </td>
            <td className="p-2">
                <div className="flex items-center">
                    <div className="relative bg-blue-300 w-10 h-10 rounded-full">
                        <span className="absolute top-6 left-6 bg-green-600 rounded-full w-[1.10rem] h-[1.15rem] border-slate-600 border-[3px]" />
                    </div>
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
            <td className="p-2 text-white">
                <div className="flex items-center">
                    <div className="bg-orange-300 w-10 h-10 rounded-full" />
                    <span className="pl-2 flex">Test Server</span>
                </div>
            </td>
            <td className="p-2">
                <div className="flex items-center">
                    <div className="bg-blue-300 w-10 h-10 rounded-full" />
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
