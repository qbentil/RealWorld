import { IServerAuthResponse, IUser, IUserLogin, IUserSignup, ServerCallback } from "@/interface";
import { devMode, formatAPIErrors } from "@/utils";

import Axios from "@/utils/Axios";

class UserService {
    static async signup(body: IUserSignup, callback: ServerCallback) {
        try {
            const { data } = await Axios<IServerAuthResponse>({
                url: "/users",
                method: "POST",
                data: {
                    user: body,
                },
            });
            callback(null, data.user);

        } catch (error: any) {
            devMode && console.log(`update /user/signup`, error);
            const message = error?.response && error.response?.data && error.response?.data?.errors ? formatAPIErrors(error.response.data.errors) : "Something went wrong! Try again.";
            callback(message);
        }
    }

    static async login(body: IUserLogin, callback: ServerCallback) {
        try {
            const { data } = await Axios<IServerAuthResponse>({
                url: "/users/login",
                method: "POST",
                data: {
                    user: body
                },
            });
            callback(null, data.user);
        } catch (error: any) {
            devMode && console.log(`update /user/login`, error);
            const message = error?.response && error.response?.data && error.response?.data?.errors ? formatAPIErrors(error.response.data.errors) : "Something went wrong! Try again.";
            callback(message);
        }
    }

    static async update(body: IUser, callback: ServerCallback) {
        const { id, token, ...rest } = body;
        try {
            const { data } = await Axios<IServerAuthResponse>({
                url: "/user",
                method: "PUT",
                data: {
                    user: rest
                },
            });
            callback(null, data.user);
        } catch (error: any) {
            devMode && console.log(`update /user`, error);
            const message = error?.response && error.response?.data && error.response?.data?.errors ? formatAPIErrors(error.response.data.errors) : "Something went wrong! Try again.";
            callback(message);
        }
    }


}

export default UserService;