
function handleResponse(response) {
    if(response.ok){
        return response.JSON()
    }
    else{
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}



export function saveGames(data) {
    console.log('inside savegames >> ',data);
    return dispatch => {
        return fetch('http://localhost:63400/api/userdetails',{
            method: 'post',
            body: JSON.stringify(data.firstname,data.lastname),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(handleResponse)
    }
}