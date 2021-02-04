import Localbase from "localbase"


const Testbase = () => {


let myDatabase = new Localbase('myDatabase')
    //const [users, setUsers] = useState(null);

    const insertIntoDb = () => {
        myDatabase.collection('users').add({
            id: 2,
            name: 'John',
            age: 58
          })
    }

    const getfromdb = () => {
        const [totalDistance, setTotalDistance] = useState(0)
        myDatabase.collection('users').get().then(users => {
           ''
            users.map((postition, index, array) => {
                 console.log(user.name)
                 if(index !== array.length-1) {
                     //Her kan du udregne afstanden mellem postition og index+1
                    console.log("next name is: ", array[index+1].name)
                 }
                 
            })
            
        })
    }

    const removeTable = () => {
        myDatabase.collection('users').delete()
        //console.log('delete code here')
    }

    return ( 
        <>
            <button onClick={insertIntoDb}>adduser</button>
            <button onClick={getfromdb}>get users</button>
            <button onClick={removeTable}>delete table</button>
        </>
     );
}
 
export default Testbase;