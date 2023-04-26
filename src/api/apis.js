// const SERVER_URL = process.env.BACKEND_SERVER
const BACKEND_SERVER = "192.168.27.129:8085"

export async function login(loginRequest) {
    const loginUrl = `http://${BACKEND_SERVER}/auth/v1/login`
    
    const response = await fetch(
        loginUrl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginRequest)
        }
    );
    let data = await response.json()
    return {isOk: response.ok, data}
}

export async function logout() {
    let user = JSON.parse(localStorage.getItem('USER'));
    localStorage.removeItem('USER');
    const logoutUrl = `http://${BACKEND_SERVER}/auth/v1/logout`
    let logoutRequest = {
        token: user.token
    }
    let response = await fetch(
        logoutUrl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(logoutRequest)
        }
    );
    return {isOk: response.ok, data: null}
}

export async function getAllUsers() {
    const userListUrl = `http://${BACKEND_SERVER}/userlist/v1/users`
    
    let response = await fetch(userListUrl)
    let data = await response.json();
    return {isOk: response.ok, data}
}

export async function addUser(addUserRequest) {
    const url = `http://${BACKEND_SERVER}/userlist/v1/users`
    
    let response = await fetch(
        url, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addUserRequest)
        }
    );
    let data = await response.json();
    return {isOk: response.ok, data}
}

export async function getReservationsByDate(date) {
    const url = `http://${BACKEND_SERVER}/resvlist/v1/reservations/${date}`

    let response = await fetch(url)
    let data = await response.json();
    return {isOk: response.ok, data}
}

export async function bookReservation(reservationRequest) {
    const url = `http://${BACKEND_SERVER}/resvlist/v1/reservations`

    let response = await fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationRequest)
        }
    );
    let data = await response.json();
    return {isOk: response.ok, data}
}