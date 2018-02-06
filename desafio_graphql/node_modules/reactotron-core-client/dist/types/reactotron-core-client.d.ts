/// <reference types="ws" />
import * as WebSocket from 'ws';
import { ClientOptions } from './client-options';
export declare const corePlugins: (((reactotron: any) => {
    features: {
        log: (message: any, important?: boolean) => any;
        debug: (message: any, important?: boolean) => any;
        warn: (message: any) => any;
        error: (message: any, stack: any) => any;
    };
}) | ((reactotron: any) => {
    features: {
        image: ({uri, preview, filename, width, height, caption}: {
            uri: any;
            preview: any;
            filename: any;
            width: any;
            height: any;
            caption: any;
        }) => any;
    };
}) | ((reactotron: any) => {
    features: {
        benchmark: (title: any) => {
            step: (stepTitle: any) => void;
            stop: (stopTitle: any) => void;
            last: (stopTitle: any) => void;
        };
    };
}) | ((reactotron: any) => {
    features: {
        stateActionComplete: (name: any, action: any, important?: boolean) => any;
        stateValuesResponse: (path: any, value: any, valid?: boolean) => any;
        stateKeysResponse: (path: any, keys: any, valid?: boolean) => any;
        stateValuesChange: (changes: any) => any;
        stateBackupResponse: (state: any) => any;
    };
}) | ((reactotron: any) => {
    features: {
        apiResponse: (request: any, response: any, duration: any) => void;
    };
}) | ((reactotron: any) => {
    features: {
        clear: () => any;
    };
}))[];
export declare class Client {
    options: ClientOptions;
    /**
     * Are we connected to a server?
     */
    connected: boolean;
    /**
     * The socket we're using.
     */
    socket: WebSocket;
    /**
     * Available plugins.
     */
    plugins: any[];
    /**
     * Messages that need to be sent.
     */
    sendQueue: any[];
    /**
     * Are we ready to start communicating?
     */
    isReady: boolean;
    /**
     * Starts a timer and returns a function you can call to stop it and return the elapsed time.
     */
    startTimer: () => () => number;
    /**
     * Set the configuration options.
     */
    configure(options?: ClientOptions): Client;
    /**
     * Connect to the Reactotron server.
     */
    connect(): Client;
    /**
     * Sends a command to the server
     */
    send: (type: any, payload?: {}, important?: boolean) => void;
    /**
     * Sends a custom command to the server to displays nicely.
     */
    display(config?: any): void;
    /**
     * Client libraries can hijack this to report errors.
     */
    reportError(this: any, error: any): void;
    /**
     * Adds a plugin to the system
     */
    use(pluginCreator?: (client: Client) => any): Client;
}
export declare const createClient: (options?: ClientOptions) => Client;
