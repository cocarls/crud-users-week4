import {  IconPencil, IconTrash, IconUser } from "@tabler/icons-react"

const User = ({userInfo, deleteUser, handleClickUpdate}) => {
  return (
    <article className="border-2 p-4 rounded-lg grid gap-2">
        <h5 className="border-b-2 flex items-center text-lg font-bold"><IconUser /> {userInfo.first_name} {userInfo.last_name}</h5>
        
        <div className="">
          <span className="text-slate-300">CORREO</span>
          <p className="font-serif"> {userInfo.email}</p>
        </div>
        <div className="flex gap-2 justify-end">
            <button onClick={()=> deleteUser(userInfo.id)} className="bg-red-500 hover:bg-red-600 transition-colors text-white p-1 rounded-sm">
              <IconTrash size={20}/>
            </button>
            <button onClick={()=>handleClickUpdate(userInfo)} className="bg-slate-200 hover:bg-slate-300 transition-colors text-white p-1 rounded-sm border border-slate-300">
                <IconPencil size={20}/>
            </button>
        </div>
        {/* <div>
          <span>Contraseña:</span>
          <p> {userInfo.password}</p>
        </div> */}
            
            
        
    </article>
  )
}
export default User