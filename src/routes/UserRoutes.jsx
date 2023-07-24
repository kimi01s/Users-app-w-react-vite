import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { NavBar } from "../components/layout/NavBar"

export const UserRoutes = ({login, handlerLogout}) => {
    return (
        <>
            <NavBar
                handlerLogout={handlerLogout}
                login={login}
            />
            <Routes>
                <Route path="users" element={<UsersPage />} />
                <Route path="/" element={<Navigate to='/users' />} />
            </Routes>
        </>
    )
}