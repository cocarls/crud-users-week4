import { IconPlus } from "@tabler/icons-react"


const Header = ({handleOpenModal}) => {
  return (
    <header className="flex justify-between p-3">
        <h1 className="text-3xl font-bold">Usuarios</h1>
        <button onClick={handleOpenModal} className="flex gap-1 hover:bg-indigo-900 transition-colors bg-[#555A88] text-white p-2 px-9 rounded-sm ">
          <IconPlus /> 
          <h4>Crear <span className="max-sm:hidden ">nuevo usuario</span></h4>
        </button>

    </header>
  )
}
export default Header