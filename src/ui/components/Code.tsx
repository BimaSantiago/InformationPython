import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

interface Code {
    children: React.ReactNode
}

export default function Code({children}: Code) {
  const [copy, setCopy] = useState(false);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(String(children));
      setCopy(true);
      await sleep(3000);
      setCopy(false);
    } catch (error) {
      console.error('Error al copiar al portapapeles: ', error)
    }
  }

  return (
    <>
    <div className="my-2 shadow-lg/20">
      <header className="flex justify-between items-center
      bg-gray-700 rounded-t-lg px-4 py-1 
      text-lg text-neutral-100 tracking-widest font-medium">
        <h2 className="flex gap-2 items-center">
          <FontAwesomeIcon icon={['fab', 'python']} color="#FFD43B" size="xl" />
          python
        </h2>
        <button className="cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={handleCopy}>
          <FontAwesomeIcon icon={['far', 'clone']} />
        </button>
      </header>
      <pre className="bg-gray-800 rounded-b-lg py-2 px-4 text-sm text-green-300 overflow-y-auto tracking-wider">
        <code>
            {children}
        </code>
      </pre>
    </div>
    <div className={`${!copy ? 'opacity-0 pointer-events-none' : 'opacity-100'} absolute left-4 bottom-4 
    bg-azul-claro border border-azul-fuerte/20 rounded-md px-4 py-2 shadow-lg/20 z-50 
    transition-all duration-300 ease-in-out`}>
      <p className="text-gris-mamalon">
        Copiado en el portapapeles
      </p>
    </div>
    </>
  )
}