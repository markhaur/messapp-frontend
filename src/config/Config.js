
export const AppConfig = {
    BACKEND_SERVER: `http://${process.env.REACT_APP_BACKEND_SERVER}`,
    FRONTEND_SERVER: `http://${process.env.REACT_APP_FRONTEND_SERVER}`,
    LOGIN_URL: `http://${process.env.REACT_APP_FRONTEND_SERVER}/login`,
    DASHBOARD_URL: `http://${process.env.REACT_APP_FRONTEND_SERVER}/dashboard`,
    RESERVATIONS_URL: `http://${process.env.REACT_APP_FRONTEND_SERVER}/reservations`,
    BOOK_RESERVATION_URL: `http://${process.env.REACT_APP_FRONTEND_SERVER}/bookreservations`,
    ADD_USER_URL: `http://${process.env.REACT_APP_FRONTEND_SERVER}/adduser`,
    VIEW_USER_URL: `http://${process.env.REACT_APP_FRONTEND_SERVER}/viewuser`,
}