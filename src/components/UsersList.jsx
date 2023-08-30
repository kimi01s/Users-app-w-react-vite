import { useContext } from "react"
import { UserRow } from "./UserRow"
import { UserContext } from "../context/UserContext"

export const UsersList = () => {
    const { users } = useContext(UserContext);
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Editar</th>
                        <th>Editar routes</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({ id, username, email, password }) => (
                            <UserRow
                                key={id}
                                id={id}
                                username={username}
                                email={email}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}