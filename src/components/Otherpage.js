import { useMemo } from 'react'
import Localbase from 'localbase'
//const OneSignal = window.OneSignal;

const Otherpage = () => {

    const db = useMemo(() => new Localbase('ONE_SIGNAL_SDK_DB'), []);


    function sendMessage() {
        db.collection('Ids').doc('userId').get()
        .then(user => {
            console.log(user.id)

            fetch("https://onesignal.com/api/v1/notifications", {
            method: "POST", 
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                "app_id": "e5b94a5a-a3b9-4f0b-b5a1-54d44283e640",
                "include_player_ids": [user.id],
                "headings": {"en": "Heading in english"},
                "contents": {"en": "This is the english message"}
              })
        })
        .then(response => console.log(response))
        })
        /*fetch("https://onesignal.com/api/v1/notifications", {
            mode: "no-cors",
            method: "POST", 
            headers: {
                "Content-Type":"application/json",
                "Authorization":"Basic NTNhOTgzODktZWJkMS00NjcwLWE5ODAtZmJlNTg3NmM0NTk4"
            },
            body: JSON.stringify({
                "app_id": "e5b94a5a-a3b9-4f0b-b5a1-54d44283e640",
                "include_player_ids": ["2c8eaf24-bdc0-4d95-afaa-7b8a36188f8f"],
                "headings": {"en": "Heading in english"},
                "contents": {"en": "This is the english message"}
              })
        })
        .then(response => console.log(response))*/
    }


    return (
        <div>
            <h2>Dette er otherpage.</h2>
            <p>with an image from an external ressource</p>
            <img src="https://miro.medium.com/max/3703/1*jFyawcsqoYctkTuZg6wQ1A.jpeg" alt="external monkey"/>
            <button onClick={sendMessage}>send en besked...</button>
        </div>
     );
}
 
export default Otherpage;