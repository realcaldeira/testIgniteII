import React, { createContext, useContext, ReactNode } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


interface StorageProviderProps {
    children: ReactNode;
}

interface DataProps {
    key: string;
   
}

const AuthData = createContext({ } as DataProps);

function StorageData({ children }: StorageProviderProps){
    return(
        <AuthData.Provider value={{
            key: '@passmanager:logins',
            
        }}>
            { children }
        </AuthData.Provider>
    )
}

function useStorageData(){
    const context = useContext(AuthData);

   

    return context;
}

export { StorageData, useStorageData }