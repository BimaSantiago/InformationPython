import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="w-full space-y-8">
      {/* Hero Section */}
      <div className="bg-azul-fuerte rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <FontAwesomeIcon 
            icon={['fab', 'python']} 
            className="text-amarillo text-8xl md:text-9xl" 
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-amarillo mb-4">
          Bienvenidos al Curso de Python
        </h1>
      </div>

      {/* Introducción */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-azul-fuerte mb-4">
          Sobre este Curso
        </h2>
        <p className="text-gris-oscuro text-lg leading-relaxed mb-4">
          Estimados estudiantes, les doy la más cordial bienvenida a este curso de programación en Python. 
          Este material didáctico ha sido diseñado específicamente para guiarlos en su proceso de aprendizaje 
          de uno de los lenguajes de programación más versátiles y demandados en la industria tecnológica actual.
        </p>
        <p className="text-gris-oscuro text-lg leading-relaxed">
          A lo largo de este curso, exploraremos desde los fundamentos básicos de la programación hasta 
          conceptos más avanzados, siempre con un enfoque práctico y aplicado a situaciones reales. 
          Cada sección está estructurada para facilitar su comprensión y fomentar el desarrollo de 
          habilidades de pensamiento lógico y resolución de problemas.
        </p>
      </div>

      {/* Objetivos del Curso */}
      <div className="bg-azul rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-azul-fuerte mb-6">
          Objetivos del Curso
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon 
                icon={['fas', 'graduation-cap']} 
                className="text-azul-fuerte text-3xl mt-1" 
              />
              <div>
                <h3 className="text-xl font-bold text-azul-fuerte mb-2">
                  Fundamentos Sólidos
                </h3>
                <p className="text-gris-oscuro">
                  Comprender los conceptos fundamentales de la programación y la lógica computacional.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon 
                icon={['fas', 'code']} 
                className="text-azul-fuerte text-3xl mt-1" 
              />
              <div>
                <h3 className="text-xl font-bold text-azul-fuerte mb-2">
                  Desarrollo Práctico
                </h3>
                <p className="text-gris-oscuro">
                  Desarrollar habilidades prácticas mediante ejercicios y proyectos aplicados.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon 
                icon={['fas', 'brain']} 
                className="text-azul-fuerte text-3xl mt-1" 
              />
              <div>
                <h3 className="text-xl font-bold text-azul-fuerte mb-2">
                  Pensamiento Lógico
                </h3>
                <p className="text-gris-oscuro">
                  Fortalecer el pensamiento lógico y la capacidad de resolver problemas complejos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon 
                icon={['fas', 'rocket']} 
                className="text-azul-fuerte text-3xl mt-1" 
              />
              <div>
                <h3 className="text-xl font-bold text-azul-fuerte mb-2">
                  Preparación Profesional
                </h3>
                <p className="text-gris-oscuro">
                  Prepararse para futuros estudios superiores o el ingreso al campo laboral tecnológico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura del Curso */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-azul-fuerte mb-6">
          Estructura del Curso
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-azul-claro rounded-lg">
            <div className="bg-azul-fuerte text-amarillo rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-azul-fuerte mb-1">Introducción</h3>
              <p className="text-gris-oscuro">
                Fundamentos de programación, instalación de Python y primeros pasos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-azul-claro rounded-lg">
            <div className="bg-azul-fuerte text-amarillo rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-azul-fuerte mb-1">Python Básico</h3>
              <p className="text-gris-oscuro">
                Variables, tipos de datos, operadores y entrada/salida de información.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-azul-claro rounded-lg">
            <div className="bg-azul-fuerte text-amarillo rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-azul-fuerte mb-1">Control de Flujo</h3>
              <p className="text-gris-oscuro">
                Estructuras condicionales, bucles, listas y operaciones lógicas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-azul-claro rounded-lg">
            <div className="bg-azul-fuerte text-amarillo rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-azul-fuerte mb-1">Funciones</h3>
              <p className="text-gris-oscuro">
                Creación de funciones, parámetros, alcances y manejo de excepciones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="bg-amarillo-claro rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-azul-fuerte mb-4">
          Recomendaciones para el Estudio
        </h2>
        <ul className="space-y-3 text-gris-oscuro text-lg">
          <li className="flex items-start gap-3">
            <FontAwesomeIcon 
              icon={['fas', 'check-circle']} 
              className="text-azul-fuerte text-xl mt-1 flex-shrink-0" 
            />
            <span>
              <strong>Practiquen constantemente:</strong> La programación se aprende haciendo. 
              Realicen todos los ejercicios propuestos.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon 
              icon={['fas', 'check-circle']} 
              className="text-azul-fuerte text-xl mt-1 flex-shrink-0" 
            />
            <span>
              <strong>No teman equivocarse:</strong> Los errores son parte fundamental del 
              aprendizaje en programación.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon 
              icon={['fas', 'check-circle']} 
              className="text-azul-fuerte text-xl mt-1 flex-shrink-0" 
            />
            <span>
              <strong>Utilicen el menú lateral:</strong> Naveguen por las diferentes secciones 
              siguiendo el orden sugerido.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon 
              icon={['fas', 'check-circle']} 
              className="text-azul-fuerte text-xl mt-1 flex-shrink-0" 
            />
            <span>
              <strong>Consulten el material frecuentemente:</strong> Este recurso estará disponible 
              para su consulta en cualquier momento.
            </span>
          </li>
        </ul>
      </div>

      {/* Mensaje Final */}
      <div className="bg-azul-fuerte rounded-lg shadow-lg p-8 text-center">
        <p className="text-xl text-amarillo-claro leading-relaxed">
          Les deseo mucho éxito en este curso. Recuerden que el aprendizaje de la programación 
          requiere dedicación y práctica constante. Estoy seguro de que, con esfuerzo y 
          perseverancia, alcanzarán los objetivos propuestos.
        </p>
        <p className="text-2xl font-bold text-amarillo mt-6">
          ¡Bienvenidos y comencemos este viaje en el mundo de la programación!
        </p>
      </div>
    </div>
  )
}