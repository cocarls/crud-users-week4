
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BASE_URL, EMPTY_FORM_VALUES } from './constans/users'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import UserList from './components/UserList'

function App() {
   const [isShowModal, setIsShowModal] = useState(false)

   const [users, setUsers] = useState([])
   const [idUserToEdit, setIdUserToEdit] = useState(null)

   const {handleSubmit, register, reset, formState} = useForm()
   const {errors} = formState

   const submit = (data)=>{
      if(idUserToEdit){
         updateUser(data) 
      }else{
         createUser(data)
      }
     
     
   }

   const handleOpenModal = ()=> {
      setIsShowModal(true)
   }

   const handleClosedModal = () => {
      setIsShowModal(false)
      reset(EMPTY_FORM_VALUES)
      setIdUserToEdit(null)
   }

   const createUser = (data)=>{
    axios
      .post(BASE_URL + "/users/", data)
      .then(()=> {
         handleClosedModal()
         getAllUsers()
      })
      .catch((err)=> console.log(err))
   }

   const deleteUser = (id)=>{
      axios
       .delete(BASE_URL + `/users/${id}/`)
       .then(()=> getAllUsers())
       .catch((err)=> console.log(err))
   }

   const updateUser = (data)=>{
      axios
        .put(BASE_URL + `/users/${idUserToEdit}/`, data)
        .then(()=> {
         getAllUsers()
         handleClosedModal()
        })
        .catch((err)=> console.log(err))
   }

   const getAllUsers = ()=>{
   axios
    .get(BASE_URL + "/users/")
    .then(({data})=> setUsers(data))
    .catch((err)=> console.log(err))
   }

   const handleClickUpdate = (userToUpdate)=>{
       handleOpenModal()
       reset(userToUpdate)
       setIdUserToEdit(userToUpdate.id)
   }
 
  useEffect(() => {
    getAllUsers()
  },[])
  
  
  return (
    <main className='min-h-screen'>
      
      <Header handleOpenModal={handleOpenModal} />

      <Modal isShowModal={isShowModal} handleClosedModal={handleClosedModal} handleSubmit={handleSubmit} register={register} submit={submit} idUserToEdit={idUserToEdit} errors={errors}/>

       <UserList users={users} deleteUser={deleteUser} handleClickUpdate={handleClickUpdate}/>
    </main>
  )
}

export default App
