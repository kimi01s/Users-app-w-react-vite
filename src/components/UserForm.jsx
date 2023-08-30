import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";


export const UserForm = ({ userSelected, handlerCloseForm }) => {

    const { handlerAddUser, initialUserForm } = useContext(UserContext);
    const [userForm, setUserForm] = useState(initialUserForm);
    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username.trim() || (!password && id === 0) || !email.trim()) {
            Swal.fire(
                'Formulario incompleto',
                'Debe completar los campos del formulario',
                'warning'
            );
            return;
        }
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    };

    const onCloseForm=()=>{
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control my-3 w-75"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
                required
            />
            {id > 0 || <input
                type="password"
                className="form-control my-3 w-75"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
                required
            />}

            <input
                type="text"
                className="form-control my-3 w-75"
                placeholder="email"
                name="email"
                value={email}
                onChange={onInputChange}
                required
            />
            <input type="hidden"
                name="id"
                value={id}
            />
            <button
                className="btn btn-outline-primary"
                type="submit"
            >
                {id > 0 ? 'Guardar cambios' : 'Crear'}
            </button>
            {!handlerCloseForm || <button
                className="btn btn-outline-primary mx-2"
                type="button"
                onClick={onCloseForm}
            >
                Cerrar
            </button>}
            
        </form>
    )
}