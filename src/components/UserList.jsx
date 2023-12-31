import User from "./User"

const UserList = ({users, deleteUser, handleClickUpdate}) => {
  return (
   <section className="grid grid-cols-[repeat(auto-fit,_320px)] justify-center max-w-[1024px] mx-auto gap-5 py-12">
    {
        users.map((user)=> <User key={user.id} userInfo={user} deleteUser={deleteUser} handleClickUpdate={handleClickUpdate}/>)
    }
   </section>
  )
}
export default UserList