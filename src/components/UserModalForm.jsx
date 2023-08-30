import { useContext } from "react"
import { UserForm } from "./UserForm"
import { UserContext } from "../context/UserContext"

export const UserModalForm = () => {
    const { userSelected, handlerCloseForm } = useContext(UserContext);
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