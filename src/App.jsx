import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import Layout from "./layouts/Layout";
import AddEdit from "./components/AddEdit";
import UserList from "./components/UserList";
import Modal from "./components/Modal";
import Header from "./components/Header";
import "./App.css";

const baseUrl = "https://users-crud-api-81io.onrender.com/api/v1";
//********************************************************** */
function App() {
  const [users, setUsers, loading] = useFetch();
  const [isOpen, setIsOpen] = useState(false);
  const [currentChild, setCurrentChild] = useState(null);

  useEffect(() => {
    readUsers();
  }, []);

  //Create users
  const createUser = (dataForm) => {
    setUsers({
      url: `${baseUrl}/users`,
      method: "POST",
      body: dataForm,
    });
    setIsOpen(false);
  };

  //Read users
  const readUsers = () => {
    setUsers({ url: `${baseUrl}/users` });
  };

  //updateUsers
  const updateUser = (dataForm, userId) => {
    setUsers({
      url: `${baseUrl}/users/${userId}`,
      method: "PATCH",
      body: dataForm,
    });
    setIsOpen(false);
  };

  //DeleteUser
  const deleteUser = (userId) => {
    setUsers({
      url: `${baseUrl}/users/${userId}`,
      method: "DELETE",
    });
  };

  //handlerOpenModal
  const openAdd = () => {
    setIsOpen(true);
    setCurrentChild(<AddEdit onSave={createUser} />);
  };

  const openEdit = (user) => {
    setIsOpen(true);
    setCurrentChild(<AddEdit user={user} onSave={updateUser} />);
  };
  //********************************************************* */
  return (
    <Layout>
      <Header openAdd={openAdd} />
      <main className="container">
        {loading ? (<h2>Cargando...</h2>) : 
        (<UserList users={users} openEdit={openEdit} deleteUser={deleteUser} />)}
      </main>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {currentChild}
      </Modal>
    </Layout>
  );
}

export default App;
