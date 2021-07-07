import createDataContext from "./CreateDataContext";
import Api from "../Api/axios";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return {
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "signin":
      return {
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "signout":
      return { name: "", email: "", token: null };
    default:
      return state;
  }
};

const signin = (dispatch) => {
  return async ({ email, password, history }) => {
    try {
      const response = await Api.post("/signin", { email, password });
      await localStorage.setItem("token", response.data.token);
      await localStorage.setItem("name", response.data.name);
      await localStorage.setItem("email", response.data.email);
      dispatch({ type: "signup", payload: response.data });
      history.push("/home");
    } catch (err) {
      console.log(err);
    }
  };
};

// const Osignin = (dispatch) => {
// 	return async ({ token, email, username, history }) => {
// 		try {
// 			const response = await Api.post("/Osignin", { email });
// 			await localStorage.setItem("token", token);
// 			await localStorage.setItem("username", username);
// 			await localStorage.setItem("email", email);
// 			dispatch({ type: "signup", payload: { token, username, email } });
// 			history.push("/home");
// 		} catch (err) {
// 			dispatch({ type: "add_error", payload: "Something went wrong with Login In" });
// 		}
// 	};
// };

const signup = (dispatch) => {
  return async ({ email, password, name, history, cpassword }) => {
    if (password !== cpassword) {
      alert("Passwords don't Match");
      return;
    }
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      alert("Email is incorrect");
      return;
    }
    if (password.length < 8) {
      alert("Password is too short");
      return;
    }
    try {
      console.log("started signin");
      const response = await Api.post("/register", {
        name,
        email,
        password,
      });
      console.log("request made to server");
      await localStorage.setItem("name", response.data.name);
      await localStorage.setItem("email", response.data.email);
      await localStorage.setItem("name", response.data.token);
      dispatch({
        type: "signup",
        payload: { name, email, token: response.data.token },
      });
      console.log("local for signup set");
      history.push("/home");
    } catch (err) {
      alert("User already registered");
    }
  };
};

const Osignup = (dispatch) => {
  return async ({ email, name, token, history }) => {
    try {
      console.log("started oauth");
      await Api.post("/Osignup", { email, name, password: token });
      console.log("request to server made");
      await localStorage.setItem("token", token);
      await localStorage.setItem("name", name);
      await localStorage.setItem("email", email);
      dispatch({ type: "signup", payload: { token, name, email } });
      history.push("/home");
    } catch (err) {
      console.log(err);
      alert("error signing up try after some time.");
    }
  };
};

// const update = (dispatch) => {
//   return async ({ email, level }) => {
//     try {
//       await Api.post("/update", { email, level });
//       dispatch({ type: "update", payload: { level } });
//       await localStorage.setItem("level", level);
//     } catch (err) {
//       dispatch({ type: "add_error", payload: "Something Went Wrong" });
//     }
//   };
// };

const tryLocalLogin = (dispatch) => {
  return async () => {
    const token = await localStorage.getItem("token");
    const username = await localStorage.getItem("name");
    const email = await localStorage.getItem("email");
    if (token) {
      dispatch({ type: "signup", payload: { token, username, email } });
    }
  };
};

const signout = (dispatch) => {
  return async (history) => {
    await localStorage.clear();
    dispatch({ type: "signout" });
    history.push("/");
  };
};

export const { Context, Provider } = createDataContext(
  AuthReducer,
  { signup, signin, signout, tryLocalLogin, Osignup },
  { token: null, username: "", email: "" }
);
