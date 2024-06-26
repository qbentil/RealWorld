"use client"; // This is a client component 👈🏽

import { fetchToken, fetchUser} from "@/hooks/localStorage";
import { State } from "@/interface";



const initialState: State = {
  user: null,
  token: null,
};

fetchUser((user: any) => {
  initialState.user = user
});
fetchToken((token: string) => {
  initialState.token = token
});



export default initialState;
