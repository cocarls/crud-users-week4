import { IconX } from "@tabler/icons-react"


const Modal = ({isShowModal, handleClosedModal, handleSubmit, register, submit,idUserToEdit, errors}) => {

  


  return (
    <section className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all ${isShowModal ? "visible opacity-100" : "invisible opacity-0" }`}>
        <form onSubmit={handleSubmit(submit)} className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_290px)] relative">
            
            <h2 className="text-center text-lg font-bold">
                {idUserToEdit ? "Editar usuario" : "Nuevo usuario"}
            </h2>
            <button onClick={handleClosedModal} type="button" className="absolute top-2 right-2 ">
                <IconX className="text-black hover:text-red-500"/>
            </button>
            <div className="grid gap-1">
                <label className="font-medium" htmlFor="first_name">Nombres</label>
                <input className="outline-none border px-2 py-1 rounded-sm" id="first_name" type="text" {...register("first_name", {
                    required: {
                        value: true,
                        message:"Este campo es requerido"
                    },
                    maxLength:{
                        value: 25,
                        message: "Este campo acepta 25 caracteres como maximo"
                    }
                })} />
                {errors.first_name && (
                    <span className="text-xs text-red-500">
                        {errors.first_name.message}
                    </span>
                )}
            </div>
            <div className="grid gap-1">
                <label className="font-medium"  htmlFor="last_name">Apellidos</label>
                <input className="outline-none border px-2 py-1 rounded-sm" id="last_name" type="text" {...register("last_name",{

                    required: {
                        value: true,
                        message:"Este campo es requerido"
                    },
                    maxLength:{
                        value: 25,
                        message: "Este campo acepta 25 caracteres como maximo"
                    }
                })}/>
                {errors.last_name && (
                    <span className="text-xs text-red-500">
                        {errors.last_name.message}
                    </span>
                )}
            </div>
            <div className="grid gap-1">
                <label className="font-medium"  htmlFor="email">Correo</label>
                <input className="outline-none border px-2 py-1 rounded-sm" id="email" type="email" {...register("email",{
                     pattern:{
                        value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message:"ingrese un correo valido"
                     },
                    required: {
                        value: true,
                        message:"Este campo es requerido"
                    },
                    maxLength:{
                        value: 150,
                        message: "Este campo acepta 150 caracteres como maximo"
                    }
                })}/>
                {errors.email && (
                    <span className="text-xs text-red-500">
                        {errors.email.message}
                    </span>
                )}
            </div>
            <div className="grid gap-1">
                <label className="font-medium"  htmlFor="password">Contraseña</label>
                <input className="outline-none border px-2 py-1 rounded-sm" id="password" type="password" {...register("password",{
                    required: {
                        value: true,
                        message:"Este campo es requerido"
                    },
                    maxLength:{
                        value: 25,
                        message: "Este campo acepta 25 caracteres como maximo"
                    }
                })}/>
                 {errors.password && (
                    <span className="text-xs text-red-500">
                        {errors.password.message}
                    </span>
                )}
            </div>
            <button className=" hover:bg-indigo-900 transition-colors bg-[#555A88] text-white p-2 px-9 rounded-sm " type="submit">
            {idUserToEdit ? "Guardar cambios" : "Agregar nuevo usuario"}
            </button>
        </form>
    </section>
  )
}
export default Modal