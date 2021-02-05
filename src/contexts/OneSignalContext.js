import React, { useState, useEffect, createContext } from "react";
const OneSignal = window.OneSignal;

export const OneSignalContext = createContext();

const OneSignalContextProvider = (props) => {
    console.log(OneSignal);
    const [OneSignalUserId, setOneSignalUserId] = useState(null);
    
    //const [Result, setResult] = useState(null);

    useEffect(() => {
        OneSignal.isPushNotificationsEnabled(function(isEnabled) {
            if (isEnabled) {
                OneSignal.getUserId().then(function (userId) {
                    console.log("OneSignal User ID:", userId);
                    setOneSignalUserId(userId);
                });
            }
        })
    }, []);
    
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