import { UserForm } from "./UserForm"

export const UserModalForm = ({handlerAddUser, initialUserForm, userSelected, handlerCloseForm}) => {
    return (
        <>
            <div className="abrir-modal animacion fadeIn">
                <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {userSelected.id > 0 ? 'Editar Usuario' : 'Crear Usuario'}
                                </h5>
                            </div>
                            <div className="modal-body">
                                <UserForm
                                    handlerAddUser={handlerAddUser}
                                    initialUserForm={initialUserForm}
                                    userSelected={userSelected}
                                    handlerCloseForm={handlerCloseForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}