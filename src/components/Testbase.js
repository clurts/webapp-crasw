import Localbase from "localbase"


const Testbase = () => {


let myDatabase = new Localbase('myDatabase')
    //const [users, setUsers] = useState(null);

    const insertIntoDb = () => {
        myDatabase.collection('users').add({
            id: 2,
            name: 'Joe',
            age: 58
          })
    }

    const getfromdb = () => {
        myDatabase.collection('users').get().then(users => {
            users.map(user => {
                 console.log(user.name)
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