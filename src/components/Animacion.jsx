import React, { useState, useEffect, useRef } from 'react';

const Animacion = ({ 
  texto = "Hola", 
  tipo = "normal",
  tamaño = "text-6xl",
  esSvg = false,
  children
}) => {
  const [escala, setEscala] = useState(1);
  const [visibilidad, setVisibilidad] = useState(1);
  const referencia = useRef(null);
  const animacionRef = useRef(null);

  useEffect(() => {
    const manejarScroll = () => {
      if (animacionRef.current) {
        cancelAnimationFrame(animacionRef.current);
      }

      animacionRef.current = requestAnimationFrame(() => {
        if (!referencia.current) return;

        const elemento = referencia.current;
        const medidas = elemento.getBoundingClientRect();
        const altoVentana = window.innerHeight;
        
        const centroElemento = medidas.top + medidas.height / 2;
        const centroVentana = altoVentana / 2;
        
        const distanciaDelCentro = centroElemento - centroVentana;
        
        const nuevaEscala = 1 + Math.abs(distanciaDelCentro) * 0.001;
        const escalaLimitada = Math.min(1.5, Math.max(1, nuevaEscala));
        
        const nuevaVisibilidad = 1 - (escalaLimitada - 1) * 2;
        const visibilidadLimitada = Math.max(0, Math.min(1, nuevaVisibilidad));
        
        setEscala(escalaLimitada);
        setVisibilidad(visibilidadLimitada);
      });
    };

    window.addEventListener('scroll', manejarScroll, { passive: true });
    window.addEventListener('resize', manejarScroll, { passive: true });
    
    manejarScroll();

    return () => {
      if (animacionRef.current) {
        cancelAnimationFrame(animacionRef.current);
      }
      window.removeEventListener('scroll', manejarScroll);
      window.removeEventListener('resize', manejarScroll);
    };
  }, []);

  const claseAnimacion = tipo === "normal" 
    ? 'transition-all duration-150 ease-out' 
    : 'transition-all duration-1000';

  const claseContenedor = esSvg 
    ? `flex items-center justify-center ${tamaño}` 
    : 'text-center';

  return (
    <div 
      ref={referencia}
      className={`${claseContenedor} ${claseAnimacion} select-none pointer-events-none`}
      style={{ 
        transform: `scale(${escala})`,
        opacity: visibilidad
      }}
    >
      {children ? (
        children
      ) : (
        <h1 className={`${tamaño} font-bold text-white drop-shadow-2xl`}>
          {texto}
        </h1>
      )}
    </div>
  );
};

export default Animacion;