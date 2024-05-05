import { create } from 'zustand';
import { Status } from './components/Avatar';

export interface State {
    savedRemotes: {
        [handle: string]: {
            lastStatus: Status;
            lastStatusMessage?: string;
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
            status: Status;
            statusMessage?: string;
            userStatus: Status;
            userStatusMessage: string;
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
            lastStatus: 'offline',
            name: 'Splist',
            handle: 'splist_main',
            address: 'https://connect.splist.gay',
            username: 'Miabread',
            userHandle: 'miabread',
            disconnected: new Date(Date.now() - 120 * 60000),
        },
        splist_alt: {
            lastStatus: 'busy',
            lastStatusMessage: 'Fatal error',
            name: 'Splist Alt',
            handle: 'splist_alt',
            address: 'https://connect.splist.gay',
            username: 'Miabread',
            userHandle: 'miabread2',
            disconnected: new Date(Date.now() - 30 * 60000),
        },
        disilla: {
            lastStatus: 'offline',
            name: 'Disilla',
            handle: 'disilla',
            address: 'https://splist.disilla.org',
            username: 'erm',
            userHandle: 'miabread',
            disconnected: new Date(Date.now() - 2400 * 60000),
        },
        example1: {
            lastStatus: 'offline',
            name: 'Foocord',
            handle: 'example1',
            address: 'https://example.com',
            username: 'Testing 1',
            userHandle: 'testing1',
            disconnected: new Date(Date.now() - 2 * 60000),
        },
        example2: {
            lastStatus: 'offline',
            name: 'Barcord',
            handle: 'example2',
            address: 'https://example.com',
            username: 'Testing 2',
            userHandle: 'testing2',
            disconnected: new Date(Date.now() - 2 * 60000),
        },
        example3: {
            lastStatus: 'offline',
            lastStatusMessage: 'Closed by user',
            name: 'Bazcord',
            handle: 'example3',
            address: 'https://example.com',
            username: 'Testing 3',
            userHandle: 'testing3',
            disconnected: new Date(Date.now() - 2 * 60000),
        },
    },
    connectedRemotes: {
        example1: {
            status: 'online',
            userStatus: 'online',
            userStatusMessage: 'Hello world!',
            errors: 0,
            warnings: 0,
            ping: 73,
            connected: new Date(Date.now() - 2 * 60000),
        },
        example2: {
            status: 'away',
            statusMessage: 'Recent warnings',
            userStatus: 'open',
            userStatusMessage: 'Looking to play',
            errors: 0,
            warnings: 10,
            ping: 100,
            connected: new Date(Date.now() - 5 * 60000),
        },
        example3: {
            status: 'busy',
            statusMessage: 'Websocket disconnected',
            userStatus: 'offline',
            userStatusMessage: 'i <3 my internet',
            errors: 2,
            warnings: 0,
            ping: 120,
            connected: new Date(Date.now() - 10 * 60000),
        },
    },
}));
