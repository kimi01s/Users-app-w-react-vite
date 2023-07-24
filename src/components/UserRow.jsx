export const UserRow = ({ id, username, email, handlerRemoveUser, handlerUserSelectedForm }) => {
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
                    <button
                        className="btn btn-outline-danger btn-sm"
                        type="button"
                        onClick={() => handlerRemoveUser(id)}>eliminar</button>
                </td>
            </tr>
        </>
    )
}