import {
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { makeGetRequest, makePostRequest } from "./httpRequests";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:3001";
const DataContext = createContext({});

export function DataContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentConvo, setCurrentConvo] = useState(null);
  const [searchedUser, setSearchedUser] = useState(null);
  const navigate = useNavigate();
  const socket = io.connect(ENDPOINT);

  // useEffect(() => {
  //   const listener = async (data) => {
  //     if (data.recipient === user.name) {
  //       const newUser = await makeGetRequest("/user/search", {
  //         userName: user.name,
  //       });

  //       setUser(newUser);

  //       const convo = await makeGetRequest("/messages/getConvo", {
  //         recipient: data.sender,
  //         userId: user._id,
  //       });

  //       setCurrentConvo(convo);
  //     }
  //   };

  //   socket.on("receiveMessage", listener);

  //   return () => {
  //     socket.off("receiveMessage", listener);
  //   };
  // }, [user]);

  //helper methods
  const getUser = () => {
    return user;
  };

  const getCurrentConvo = () => {
    return currentConvo;
  };

  const getSearchedUser = () => {
    return searchedUser;
  };

  const signIn = async (name, password) => {
    try {
      const user = await makeGetRequest("/user/signIn", {
        name: name,
        password: password,
      });

      if (user) {
        setUser(user);
        navigate("/dashboard");
      } else {
        alert("Username or password is incorrect.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (name, password) => {
    try {
      const user = await makePostRequest("/user/signIn", {
        name: name,
        password: password,
      });

      if (user) {
        setUser(user);
        navigate("/dashboard");
      } else {
        alert("User already exists.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchUsers = async (userName) => {
    if (userName == user.name) {
      return;
    }

    const newUser = await makeGetRequest("./user/search", {
      userName: userName,
    });
    if (newUser) {
      setSearchedUser(newUser);
      selectConvo(newUser.name);
    } else {
      alert("User not found.");
      setSearchedUser(null);
    }
  };

  const viewConvos = () => {
    setSearchedUser(null);
  };

  const createConvo = async (recipient) => {
    await makePostRequest("/messages/createConvo", {
      recipientName: recipient,
      userId: user._id,
    });

    setSearchedUser(null);
  };

  const sendMessage = async (message) => {
    if (message == "") {
      return;
    }

    const date = new Date();
    const msg = {
      author: user.name,
      text: message,
      date: date.toLocaleString(),
    };

    if ("isTemp" in currentConvo) {
      createConvo(currentConvo.recipient);
    }

    const { convo, sender } = await makePostRequest("/messages/sendMessage", {
      recipientName: currentConvo.recipient,
      userId: user._id,
      message: msg,
    });

    setUser(sender);
    setCurrentConvo(convo);

    // socket.emit("sendMessage", {
    //   recipient: currentConvo.recipient,
    //   sender: user.name,
    // });
  };

  const selectConvo = async (recipient) => {
    const convo = await makeGetRequest("/messages/getConvo", {
      recipient: recipient,
      userId: user._id,
    });

    if (convo) {
      setCurrentConvo(convo);
    } else {
      let tempConvo = {
        recipient: recipient,
        messages: [],
        isTemp: true,
      };
      setCurrentConvo(tempConvo);
    }
  };

  return (
    <DataContext.Provider
      value={{
        getUser,
        getCurrentConvo,
        getSearchedUser,
        viewConvos,
        selectConvo,
        sendMessage,
        searchUsers,
        signIn,
        signUp,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
