import axios from "axios";
import { createContext } from "react";

export let SettingContext = createContext()



function goToSetting(password, token) {

  return axios.post("http://127.0.0.1:8000/api/user/password/check", {
    password,
  },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res).catch((err) => err)

}


export default function SettingContextProvider(props) {

  return <SettingContext.Provider value={{ goToSetting }}>
    {props.children}
  </SettingContext.Provider>
}