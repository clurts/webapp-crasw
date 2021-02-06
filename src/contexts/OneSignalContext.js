import React, { useState, useEffect, createContext, useMemo } from "react";
import Localbase from 'localbase'
const OneSignal = window.OneSignal;

export const OneSignalContext = createContext();

const OneSignalContextProvider = (props) => {
    console.log(OneSignal);
    const [OneSignalUserId, setOneSignalUserId] = useState(null);
    const ONE_SIGNAL_SDK_DB = useMemo(() => new Localbase(), []);
    
    //const [Result, setResult] = useState(null);

    useEffect(() => {

        ONE_SIGNAL_SDK_DB.collection('Ids').doc('userId').get()
            .then(user => {
                setOneSignalUserId(user.id)
            })

    }, [ONE_SIGNAL_SDK_DB]);
    
    OneSignalUserId && console.log("OneSignal User ID:", OneSignalUserId)
    /*useEffect(() => {
        if (OneSignalUserId !== null)
            (async () => {
                const response = await fetch(
                    `https://onesignal.com/api/v1/notifications`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                        },
                        body: JSON.stringify({
                            app_id: "d7e0ffdf-e3cc-418f-b319-8d70e58ccdeb",
                            include_player_ids: [`${OneSignalUserId}`],
                            data: { foo: "bar" },
                            contents: { en: "English Message" },
                        }),
                    }
                );
                const result = await response.json();
                console.log(result);
                setResult(result);
            })();
    }, [OneSignalUserId]);*/

    return (
        <OneSignalContext.Provider value={{ OneSignalUserId }}>
            {props.children}
        </OneSignalContext.Provider>
    );
};

export default OneSignalContextProvider;