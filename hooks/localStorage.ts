import { DecodeBase64, EncodeBase64 } from "@/utils";

export const fetchUser = (callback: (user: any) => void) => {
  let userInfo = null;
  if (typeof window !== "undefined") {
    userInfo =
      sessionStorage.getItem("loggedin_user") !== "undefined"
        ? sessionStorage.getItem("loggedin_user")
        : sessionStorage.clear();
  }
  callback(JSON.parse(userInfo as string));
};


export const setUser = (user: any) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("loggedin_user", JSON.stringify(user));
  }
};

export const removeUser = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("loggedin_user");
  }
}
export const fetchToken = (callback: (token: string) => void) => {
  let token = null;
  if (typeof window !== "undefined") {
    token =
      sessionStorage.getItem("access_token") !== "undefined"
        ? sessionStorage.getItem("access_token")
        : sessionStorage.clear();
  }
  callback(token as string);
};



export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("access_token", token);
  }
};


export const removeToken = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("access_token");
  }
}
