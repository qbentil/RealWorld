import { APIError, devMode } from "@/utils";
import { IServerAuthResponse, IUser, IUserLogin, IUserSignup, ServerCallback } from "@/interface";

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
            callback(APIError(error))
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
            callback(APIError(error))
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
            callback(APIError(error))
        }
    }


}

export default UserService;