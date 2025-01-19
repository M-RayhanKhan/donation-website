import React, { createContext, useEffect, useState } from 'react';

export const ClientContext = createContext(null)

const ClientData = ({children}) => {
    const [clientData , setClientData] = useState([]);
    useEffect(() => {
        fetch('/client.json').then(res => res.json()).then(data => setClientData(data))
    } , [])

    return (
        <ClientContext.Provider value={{clientData}}>
            {children}
        </ClientContext.Provider>
    );
};

export default ClientData;