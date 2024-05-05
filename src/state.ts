import { create } from 'zustand';

export interface State {
    savedRemotes: {
        [handle: string]: {
            name: string;
            handle: string;
            address: string;
            username: string;
            userHandle: string;
            disconnected: Date;
        };
    };
    connectedRemotes: {
        [handle: string]: {
            userStatus: string;
            errors: number;
            warnings: number;
            ping: number;
            connected: Date;
        };
    };
}

export const useStore = create<State>()(() => ({
    savedRemotes: {
        splist_main: {
            name: 'Splist',
            handle: 'splist_main',
            address: 'https://connect.splist.gay',
            username: 'Miabread',
            userHandle: 'miabread',
            disconnected: new Date(Date.now() - 120 * 60000),
        },
        splist_alt: {
            name: 'Splist Alt',
            handle: 'splist_alt',
            address: 'https://connect.splist.gay',
            username: 'Miabread',
            userHandle: 'miabread2',
            disconnected: new Date(Date.now() - 30 * 60000),
        },
        disilla: {
            name: 'Disilla',
            handle: 'disilla',
            address: 'https://splist.disilla.org',
            username: 'erm',
            userHandle: 'miabread',
            disconnected: new Date(Date.now() - 2400 * 60000),
        },
        example1: {
            name: 'Foo',
            handle: 'example1',
            address: 'https://example.com',
            username: 'Testing 1',
            userHandle: 'testing1',
            disconnected: new Date(Date.now() - 2 * 60000),
        },
        example2: {
            name: 'Bar',
            handle: 'example2',
            address: 'https://example.com',
            username: 'Testing 2',
            userHandle: 'testing2',
            disconnected: new Date(Date.now() - 2 * 60000),
        },
        example3: {
            name: 'Baz',
            handle: 'example3',
            address: 'https://example.com',
            username: 'Testing 3',
            userHandle: 'testing3',
            disconnected: new Date(Date.now() - 2 * 60000),
        },
    },
    connectedRemotes: {
        example1: {
            userStatus: 'Status message',
            errors: 2,
            warnings: 0,
            ping: 73,
            connected: new Date(Date.now() - 2 * 60000),
        },
        example2: {
            userStatus: 'Status message',
            errors: 0,
            warnings: 10,
            ping: 100,
            connected: new Date(Date.now() - 5 * 60000),
        },
        example3: {
            userStatus: 'Status message',
            errors: 0,
            warnings: 0,
            ping: 120,
            connected: new Date(Date.now() - 10 * 60000),
        },
    },
}));
