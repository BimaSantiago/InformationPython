import React from 'react';

const Seccion = ({ children, altura = 'min-h-screen', colorFondo = 'bg-blue-900' }) => {
  return (
    <section className={`relative ${altura} ${colorFondo}`}>
      {children}
    </section>
  );
};

export default Seccion;