import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export const UserRow = ({ id, username, email }) => {
    const { handlerRemoveUser, handlerUserSelectedForm } = useContext(UserContext);
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <button
                        className="btn btn-outline-success btn-sm"
                        type="button"
                        onClick={() => handlerUserSelectedForm({
                            id,
                            username,
                            email,
                        })}
                    >editar</button>
                </td>
                <td>
                    <NavLink className={'btn btn-outline-primary btn-sm'}
                        to={'/users/edit/' + id}>Update link</NavLink>
                </td>
                <td>
                    <button
                        className="btn btn-outline-danger btn-sm"
                        type="button"
                        onClick={() => handlerRemoveUser(id)}>eliminar</button>
                </td>
            </tr>
        </>
    )
}