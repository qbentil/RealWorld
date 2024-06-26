import { IServerAuthResponse, IUserLogin, IUserSignup, ServerCallback } from "@/interface";
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
            const message = error?.response && error.response?.data && error.response?.data?.errors ? formatAPIErrors(error.response.data.errors) : "Check console for error";
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
            const message = error?.response && error.response?.data && error.response?.data?.errors ? formatAPIErrors(error.response.data.errors) : "Check console for error";
            callback(message);
        }
    }
}

export default UserService;