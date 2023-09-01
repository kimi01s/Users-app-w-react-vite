import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, removeUser, saveUser, updateUser } from "../services/userServices";
const initialUsers = [];
const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};
export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const getUsers = async () => {
    const result = await findAll();
    dispatch({
      type: "loadingUsers",
      payload: result.data,
    });
  };
  const handlerAddUser = async (user) => {
    let response;

    if (user.id === 0) {
      response = await saveUser(user);
    } else {
      response = await updateUser(user);
    }

    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: response.data,
    });

    Swal.fire(
      user.id === 0 ? "Usuario creado" : "Usuario Actualizado",
      user.id === 0
        ? "El usuario ha sido creado con éxito!"
        : "El usuario ha sido actualizado con éxito!",
      "success"
    );
    handlerCloseForm();
    navigate("/users");
  };

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: "Está seguro que desea eliminar el usuario?",
      text: "Cuidado, el usuario será eliminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeUser(id);
        dispatch({
          type: "removeUser",
          payload: id,
        });
        Swal.fire(
          "Usuario eliminado!",
          "El usuario ha sido eliminado con éxito.",
          "success"
        );
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    setUserSelected({ ...user });
    setVisibleForm(true);
  };
  const handlerOpenForm = () => {
    setVisibleForm(true);
  };
  const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  };
  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    getUsers,
    handlerAddUser,
    handlerUserSelectedForm,
    handlerRemoveUser,
    handlerOpenForm,
    handlerCloseForm,
  };
};
