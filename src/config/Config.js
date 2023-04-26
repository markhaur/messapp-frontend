require('dotenv').config()

export const AppConfig = {
    BACKEND_SERVER: `http://${process.env.BACKEND_SERVER}`,
    FRONTEND_SERVER: `http://${process.env.FRONTEND_SERVER}`,
    LOGIN_URL: `http://${process.env.FRONTEND_SERVER}/login`,
    DASHBOARD_URL: `http://${process.env.FRONTEND_SERVER}/dashboard`,
    RESERVATIONS_URL: `http://${process.env.FRONTEND_SERVER}/reservations`,
    BOOK_RESERVATION_URL: `http://${process.env.FRONTEND_SERVER}/bookreservations`,
    ADD_USER_URL: `http://${process.env.FRONTEND_SERVER}/adduser`,
    VIEW_USER_URL: `http://${process.env.FRONTEND_SERVER}/viewuser`,
}