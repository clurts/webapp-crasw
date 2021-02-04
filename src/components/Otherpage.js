
const Otherpage = () => {




    function sendMessage() {
        fetch("https://onesignal.com/api/v1/notifications", {
            method: "POST", 
            headers: {
                "Content-Type":"application/json",
                "Authorization":"Basic NTNhOTgzODktZWJkMS00NjcwLWE5ODAtZmJlNTg3NmM0NTk4",
                "mode": "cors",
                "Access-Control-Allow-Origin": "https://onesignal.com/api/v1/notifications"
            },
            body: {
                "app_id": "e5b94a5a-a3b9-4f0b-b5a1-54d44283e640",
                "include_player_ids": ["2c8eaf24-bdc0-4d95-afaa-7b8a36188f8f"],
                "headings": {"en": "Heading in english"},
                "contents": {"en": "This is the english message"}
              }
        })
        .then(response => console.log(response))
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