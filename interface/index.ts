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
    user: IUser | null;
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

export interface IUserLogin {
    email: string;
    password: string;
}


export interface IUserSignup extends IUserLogin {
    username: string;
}

export interface IUser extends IUserSignup {
    id: number,
    token: string;
    bio: string;
    image: string;
}

export interface IAuthor {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export interface IArticle {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: IAuthor;
}


export interface IServerAuthResponse extends IServerResponse {
    user: IUser
}
