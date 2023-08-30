import { useUsers } from "../hooks/useUser";
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerUserSelectedForm,
        handlerRemoveUser,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    } = useUsers();
    return (
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                visibleForm,
                handlerAddUser,
                handlerUserSelectedForm,
                handlerRemoveUser,
                handlerOpenForm,
                handlerCloseForm,
                getUsers,
            }
        }>
            {children}
        </UserContext.Provider>
    )
}