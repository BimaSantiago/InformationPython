import React from 'react';
import Animacion from './components/Animacion';
import fondo from "./py.jpg";
import pythonSVG from "./python.svg";
import Seccion from './components/Seccion';

function App() {
  return (
    <div className="App bg-blue-900">
      <Seccion altura="h-screen" colorFondo="bg-blue-900">
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <img 
            src={fondo}
            alt="Python" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="mb-8">
              <Animacion 
                texto=""
                tipo="normal"
                tamaño="w-32 h-32 md:w-48 md:h-48"
                esSvg={true}
              >
                <img 
                  src={pythonSVG} 
                  alt="Python Logo" 
                  className="w-full h-full object-contain" 
                />
              </Animacion>
            </div>
            
            <Animacion 
              texto="BIENVENIDO"
              tipo="normal"
              tamaño="text-4xl md:text-6xl lg:text-8xl"
            />
          </div>
        </div>
      </Seccion>
      <Seccion altura="min-h-screen" colorFondo="bg-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-white py-20">
          <h1 className="text-4xl mb-8 text-center font-bold text-white">
            ¿Qué es Python?
          </h1>
        </div>
      </Seccion>
    </div>
  );
}

export default App;