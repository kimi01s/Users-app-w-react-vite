import { UserRow } from "./UserRow"

export const UsersList = ({ users = [], handlerRemoveUser, handlerUserSelectedForm }) => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Editar</th>
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
                                handlerRemoveUser={handlerRemoveUser}
                                handlerUserSelectedForm={handlerUserSelectedForm}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}