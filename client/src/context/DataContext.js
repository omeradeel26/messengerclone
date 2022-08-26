import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import 'whatwg-fetch';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');
const DataContext = createContext({});

export function DataContextProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  //make POST requests -> do get requests seperately
  const POST = async function (url, data) {
    return await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  const sendSocketIO = () => {
    socket.emit('example_message', 'demo');
  }

  //helper methods
  const getUser = () => {
    return user;
  };

  const signIn = async (name, password) => {
    try {
      POST("/users/signIn", { name: name, password: password })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setUser(data);
            navigate("/");
          } else {
            alert("Username or password is incorrect.");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = (name, password) => {
    try {
      POST("/users/signUp", { name: name, password: password })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data) {
            setUser({ name: name, password: password, messages: [] });
            navigate("/");
          } else {
            alert("User already exists.");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async (userName) => {
    return new Promise((reject, resolve) => {
      const newUsers = [];
      fetch("/users/all")
        .then((response) => response.json())
        .then((users) => {
          if (userName !== "") {
            const newUsers = [];
            users.forEach((user) => {
              if (user.name.slice(0, userName.length) === userName) {
                newUsers.push(user);
              }
            });
            resolve(newUsers);
          } else {
            resolve(users);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <DataContext.Provider value={{ getUser, signIn, signUp, getUsers }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
