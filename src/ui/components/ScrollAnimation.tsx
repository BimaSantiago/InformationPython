import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ScrollAnimation {
  title?: string;
  secondSectionText?: string;
  icono?: string;
}

const ScrollAnimation: React.FC<ScrollAnimation> = ({
  title = "Python",
  secondSectionText = "Bienvenidos al Curso de Python",
  icono =<FontAwesomeIcon icon={['fab', 'python']}   className="text-amarillo text-8xl md:text-9xl" />,
}) => {
  return (
    <div className="relative h-full">
      <style>
        {`
          @keyframes scale-up {
            to { transform: scale(1.5); }
          }

          @keyframes fade-away {
            to { opacity: 0; }
          }

          .scroll-section {
            view-timeline: --scroll;
          }

          .first-span {
            animation: fade-away both linear;
            animation-timeline: --scroll;
            animation-range: exit 20% exit 90%;
          }

          .last-span {
            animation:
              scale-up both ease-in-out,
              fade-away both linear;
            animation-timeline: --scroll;
            animation-range:
              exit 0% exit 100%,
              exit 50% exit 90%;
          }

           .last-span1 {
            animation:
              scale-up both ease-in-out,
              fade-away both linear;
            animation-timeline: --scroll;
            animation-range:
              exit 25% exit 100%,
              exit 65% exit 100%;
          }
        `}
      </style>
      
      <main>
        <section className="scroll-section relative h-64 text-amarillo">
          <div className='relative'>
            <div className='absolute w-full flex flex-col items-center justify-center'>
              {/* Logo de phyton */}
              <div>
                <span className="last-span block">{icono}</span>
              </div>
  {/*------------------------------------------------*/}
              {/* titulo principal*/}
              <div className='text-center w-full'>
                <h1 className="text-5xl md:text-7xl font-bold text-center">
                <span className="last-span block">{title}</span></h1>
              </div>
  {/*------------------------------------------------*/}
              {/*subtitulo*/}
              <div>
                <h3 className={`text-2xl md:text-3xl`}>
                <span className="last-span1 top-6">{secondSectionText}</span></h3>
              </div>
  {/*------------------------------------------------*/}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ScrollAnimation;