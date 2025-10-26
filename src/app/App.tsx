import { BrowserRouter, Routes } from "react-router-dom"
import Sidebar from "../ui/components/Sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="h-dvh w-dvw bg-azul-claro">
        <BrowserRouter>
            <button className={`${isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} absolute m-4 p-2 text-3xl
            bg-amarillo rounded-full shadow-lg text-gris cursor-pointer 
            hover:text-gris-medio transition-all duration-300`}
            onClick={toggleSidebar}>
                <FontAwesomeIcon icon={['fas', 'bars']} />
            </button>
            <Sidebar 
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
            <Routes>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App