import {useState, useEffect, useContext, createContext} from 'react'

const DataContext = createContext({})

export function DataContextProvider({children}){
    const [user, setUser] = useState({})

    //make POST requests -> do get requests seperately
    const POST = async function(url, data) {
        return await fetch(url, {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
    }

    //helper methods
    const getUser = () => {
        return user
    }

    const verifyUser = async (name, password) => {   
        try {
            fetch('/signup')
            .then(response => response.json())
            .then((data) => {
                let loggedIn = false
                data.forEach((user) => {
                    if ((user.name == name) && (user.password == password)){
                        setUser({name: name})
                        loggedIn = true
                        console.log(`Authenticated as ${user.name}`)
                    }
                })

                if (loggedIn){
                    return true
                } else {
                    alert(`Username or password incorrect.`)
                    return false
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    const createUser = (name, password ) => {
       fetch('/signup')
        .then(response => response.json())
        .then((data) => {
            let checkUser = true
            data.forEach((user) => {
                if ((user.name == name)){
                    checkUser = false
                }
            })

            if (checkUser){
                POST('/signup', {name: name, password: password})
                setUser({name})
            } else {
                alert('User already exists.')           
            }
        })
    }

    return(
        <DataContext.Provider value={{getUser, createUser, verifyUser}}>
            {children}
        </DataContext.Provider>
    )
}

export function useData(){
    return useContext(DataContext)
}