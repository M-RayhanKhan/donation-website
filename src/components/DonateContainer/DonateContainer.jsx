import { createContext, useEffect, useState } from "react";

export const DonateContaxt = createContext(null)

const DonateContainer = ({children}) => {
    const [donate, setDonate] = useState([]);
    useEffect(() => {
        fetch('/donate.json')
        .then(res => res.json())
        .then(data => setDonate(data))
    } , [])
    const values = {
        donate
    }
    return (
        <DonateContaxt.Provider value={values}>
            {children}
        </DonateContaxt.Provider>
    );
};

export default DonateContainer;