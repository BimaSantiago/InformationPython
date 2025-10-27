import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "../ui/components/Sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import SeccionContenido from "../ui/components/SeccionContenido"


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  } 

  return (
    <div className="h-dvh w-dvw bg-azul-claro overflow-x-hidden overflow-y-auto">
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
            <main className={`transition-all duration-500 p-8 z-10 
            ${isSidebarOpen ? 'ml-64 w-[calc(100%-16rem)]' : 'ml-0 w-full'}`}>
              <Routes>
                <Route path="/" />
                <Route path="/seccion/:seccionId" element={ <SeccionContenido /> } />
              </Routes>
            </main>
        </BrowserRouter>
    </div>
  )
}

export default App