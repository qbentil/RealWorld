export interface ITab {
    name: string
    label: string
    Icon?: any
}

export interface ServerCallback {
    (error: string | null, data?: any): void;
}

// Define the type for your state
export interface State {
    user: any | null;
    token: string | null;

}

// Define the type for your action
export type Action = {
    type: string;
    payload: any;
};

export interface IServerResponse {
    success: true,
    data?: any,
    message?: string
}