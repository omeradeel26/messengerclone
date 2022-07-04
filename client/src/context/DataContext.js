import {useState, useEffect, useContext, createContext} from 'react'

const DataContext = createContext({})

export function DataContextProvider({children}){
    const [data, setData] = useState({})

    useEffect(() =>{
        fetch("/home")
        .then(res => res.json())
        .then(info => setData(info)) 
    }, [])

    return(
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}

export function useData(){
    return useContext(DataContext)
}