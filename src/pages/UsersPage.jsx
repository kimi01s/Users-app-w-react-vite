import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList"
import { useUsers } from "../hooks/useUser"
export const UsersPage = () => {
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
    } = useUsers();

    return (
        <>
            {!visibleForm ||
                <UserModalForm
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm}
                    userSelected={userSelected}
                    handlerCloseForm={handlerCloseForm}
                />
            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-outline-primary my-2"
                            onClick={handlerOpenForm}>
                            Nuevo usuario
                        </button>}

                        {
                            users.length === 0 ?
                                <div className='alert alert-warning'>no hay usuarios en el sistema</div> :
                                (
                                    <UsersList
                                        users={users}
                                        handlerRemoveUser={handlerRemoveUser}
                                        handlerUserSelectedForm={handlerUserSelectedForm}
                                    />
                                )
                        }

                    </div>
                </div>
            </div>
        </>
    )

}