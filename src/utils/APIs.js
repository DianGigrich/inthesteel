// in dev mode
const URL_PREFIX= "http://localhost:3001"
// in prod mode
// const URL_PREFIX= "https://inthesteel.herokuapp.com"

const  API = {
    login: (userObj)=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    signup: (userObj)=>{
        return fetch(`${URL_PREFIX}/api/users`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    

    // user information
    getUserTodos:(userId)=>{
        return fetch(`${URL_PREFIX}/api/users/${userId}`).then(res=>res.json())

    },
    getUserFromToken:(token)=>{
        return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
// examples TODO. make these relevant to connect to backend
    // item REST
    createItem:(itemObj,token)=>{
        return fetch(`${URL_PREFIX}/api/items`,{
            method:"POST",
            body:JSON.stringify(itemObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    deleteItem:(itemId,token)=>{
        return fetch(`${URL_PREFIX}/api/items/${itemId}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    editItem:(itemObj,itemId,token)=>{
        return fetch(`${URL_PREFIX}/api/items/${itemId}`,{
            method:"PUT",
            body:JSON.stringify(itemObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
}
export default API