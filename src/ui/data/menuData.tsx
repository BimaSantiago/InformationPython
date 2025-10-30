import Code from "../components/Code";
import DivContent from "../components/DivContent";
import type { DropdownProps } from "../types/types";

export const DROPDOWNS: DropdownProps[] = [
    {
        id: '1',
        icon: ['far', 'house'],
        title: 'Introducción',
        items: [
            {
                id: '1.1_como-funciona',
                item: '¿Cómo funciona un programa de computadora?',
                content: {
                    title: '¿Cómo funciona un programa de computadora?',
                    body: (
                        <DivContent>
                            <p>
                                Un programa es lo que hace que una computadora sea útil. Por sí solas, 
                                las computadoras solo pueden ejecutar operaciones extremadamente simples, como sumar o dividir, 
                                pero lo hacen a velocidades muy altas y pueden repetirlas muchísimas veces. Para realizar una 
                                tarea compleja, como calcular una velocidad promedio, se necesita un programa que le dé a la 
                                computadora una serie de instrucciones simples:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Aceptar un número para la distancia.</li>
                                <li>Aceptar un número para el tiempo de viaje.</li>
                                <li>Dividir el primer valor entre el segundo y guardar el resultado.</li>
                                <li>Mostrar el resultado en un formato legible.</li>
                            </ul>
                            <p>Estas acciones sencillas forman un programa. La clave para que esto funcione es el lenguaje.</p>    
                        </DivContent>
                        )
                }
            },
            {
                id: '1.2_lenguajes-naturales-programacion',
                item: 'Lenguajes naturales vs. Lenguajes de programación',
                content: {
                    title: 'Lenguajes naturales vs. Lenguajes de programación',
                    body: (
                    <DivContent>
                        <p>
                            Las computadoras tienen su propio lenguaje, llamado <strong className="text-blue-400">
                            lenguaje máquina</strong>, que es muy rudimentario. Una computadora funciona como un perro bien adiestrado que 
                            solo responde a un conjunto de comandos conocidos. Este conjunto de comandos se 
                            llama <strong className="text-blue-400">lista de instrucciones (IL)</strong>. 
                            Los lenguajes máquina son desarrollados por humanos. En contraste, los idiomas que
                            hablan las personas, como el español, se llaman <strong className="text-blue-400">lenguajes naturales</strong> y
                            evolucionan por sí mismos con el tiempo.
                        </p>
                    </DivContent>
                    )
                } 
            },
            {
                id: '1.3_compone-un-lenguaje',
                item: '¿Qué compone a un lenguaje?',
                content: {
                    title: '¿Qué compone a un lenguaje?',
                    body: (
                        <DivContent>
                            <p>
                                Cualquier lenguaje, ya sea de máquina o natural, consta de los siguientes elementos:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong className="text-blue-400">Alfabeto: </strong>Un conjunto de símbolos que se usan para formar palabras (ej. el alfabeto latino).</li>
                                <li><strong className="text-blue-400">Léxico: </strong>Un diccionario con el conjunto de palabras que el lenguaje ofrece (ej. la palabra "computadora" está en el léxico del español).</li>
                                <li><strong className="text-blue-400">Sintaxis: </strong>Un conjunto de reglas que determinan si una cadena de palabras forma una oración válida.</li>
                                <li><strong className="text-blue-400">Semántica: </strong>Un conjunto de reglas que definen si una frase tiene sentido (ej. "Me comí una dona" tiene sentido semántico, pero "Una dona me comió", no).</li>
                            </ul>
                        </DivContent>
                    )
                }
            },
            {
                id: '1.4',
                item: 'Lenguaje máquina vs. lenguaje de alto nivel',
                content: {
                    title: 'Lenguaje máquina vs. lenguaje de alto nivel',
                    body: (
                        <DivContent>
                            <p>
                                El lenguaje máquina es la lengua materna de una computadora, pero está muy lejos del lenguaje humano. Para crear un puente entre ambos, se necesitan los lenguajes de programación de alto nivel. Estos usan símbolos y palabras que los humanos pueden leer y permiten expresar comandos complejos. Un programa escrito en un lenguaje de alto nivel se llama código fuente, y se guarda en un archivo fuente.
                            </p>
                        </DivContent>
                    )
                }
            },
            {
                id: '1.5',
                item: 'Compilación vs. Interpretación',
                content: {
                    title: 'Compilación vs. Interpretación',
                    body: (
                        <DivContent>
                            <p>
                                Para que una computadora ejecute un programa, este debe ser traducido a lenguaje máquina, un proceso que la propia computadora puede realizar. Hay dos formas principales de hacerlo:
                            </p>
                                <ul className="list-disc list-inside ml-4">
                                    <li><strong className="text-blue-400">• Compilación:  </strong>Un programa traductor (compilador) analiza todo el código fuente de una vez y crea un archivo ejecutable en lenguaje máquina.</li>
                                    <li><strong className="text-blue-400">• Interpretación:  </strong>Un programa (intérprete) lee y ejecuta el código fuente línea por línea.</li>
                                
                                    <p>¿Qué hace el intérprete?
                                        El código fuente de un programa se guarda en archivos de texto plano. Un intérprete lee este archivo de arriba hacia abajo y de izquierda a derecha. Primero, verifica que cada línea sea correcta ; si encuentra un error, detiene su trabajo y muestra un mensaje de error, indicando dónde está el problema. Si la línea es correcta, el intérprete la ejecuta. Debido a esto, es posible que una parte del código se ejecute con éxito antes de que se encuentre un error más adelante.
                                        Compilación vs. Interpretación – Ventajas y Desventajas
                                        Ninguno de los dos modelos es superior; ambos tienen sus pros y sus contras.
                                    </p>
                                </ul>
                            <p>•    Compilación:
                                <li><strong className="text-blue-400">• Ventajas:   </strong>La ejecución del código es más rápida; el usuario final no necesita el compilador; el código máquina es difícil de leer, lo que protege la propiedad intelectual.</li>
                                <li><strong className="text-blue-400">• Desventajas:    </strong> El proceso de compilación puede ser lento; se necesita un compilador para cada plataforma de hardware.</li>
                            </p>
                            <p>Python es un lenguaje interpretado, por lo que hereda estas características. Afortunadamente, el intérprete de Python es gratuito</p>
                        </DivContent>
                    )
                }
            },
            {
                id: '1.6',
                item: 'Introducción a Python',
                content: {
                    title: 'Introducción a Python',
                    body: (
                        <DivContent>
                            <p>
                                Python - una herramienta, no un reptil
                                Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. Su nombre no proviene de la serpiente, sino de la serie de comedia de la BBC llamada Monty Python's Flying Circus. El creador del lenguaje lo nombró en honor al programa.
                            </p>
                            <p>¿Quién creó Python?
                            A diferencia de otros grandes lenguajes de programación desarrollados por corporaciones, Python fue creado por una sola persona: Guido van Rossum, nacido en los Países Bajos. Aunque miles de personas han contribuido a su desarrollo, la idea original fue suya.
                            Los objetivos de Python en 1999, Guido van Rossum definió sus metas para Python:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>•   Un lenguaje fácil e intuitivo, pero tan potente como sus competidores.</li>
                                <li>•   Ser de código abierto, para que cualquiera pudiera contribuir a su desarrollo.</li>
                                <li>•   Tener un código tan comprensible como el inglés simple.</li>
                                <li>•   Ser adecuado para tareas cotidianas, permitiendo tiempos de desarrollo cortos.</li>
                            </ul>                            
                        </DivContent>
                    )
                }
            },
            {
                id: '1.7',
                item: '¿Qué hace que Python sea tan especial?',
                content: {
                    title: '¿Qué hace que Python sea tan especial?',
                    body: (
                        <DivContent>
                            <p>
                                Python es extremadamente popular por varias razones:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>•   •   Es fácil de aprender, lo que permite empezar a programar más rápido.</li>
                                <li>•   •   Es fácil de enseñar, permitiendo a los profesores centrarse en conceptos de programación en lugar de en la complejidad del lenguaje.</li>
                                <li>•   •   Es fácil de utilizar para escribir nuevo software, a menudo de forma más rápida.</li>
                                <li>•   •   Es fácil de entender, lo que simplifica la lectura de código escrito por otros.</li>
                                 <li>•  •   •   Es fácil de obtener, ya que es gratuito, de código abierto y funciona en múltiples plataformas.</li>
                            </ul> 
                            <p>¿Por qué no Python?
                            A pesar de su popularidad, hay áreas donde Python no es la opción principal:
                            </p>
                            <p> 
                                <li><strong className="text-blue-400">Programación de bajo nivel:</strong>Para crear controladores de hardware o motores gráficos de alto rendimiento, no se usaría Python.</li>
                                <li><strong className="text-blue-400">  Aplicaciones para dispositivos móviles:     </strong> Aunque podría cambiar en el futuro, este campo aún no ha sido conquistado por Python.</li>
                            </p>
                        </DivContent>
                    )
                }
            },
            {
                id: '1.8',
                item: 'Existe más de un Python',
                content: {
                    title: 'Existe más de un Python',
                    body: (
                        <DivContent>
                            <p>
                                Existen dos versiones principales: 
                            </p>
                            
                            <p>
                                Python 2 y Python 3.
                            </p>
                            <p> 
                                <li><strong className="text-blue-400">• Python 2: </strong>Es una versión antigua cuyo desarrollo de nuevas características se ha detenido, aunque sigue recibiendo actualizaciones de seguridad y corrección de errores. Todavía se usa porque hay demasiadas aplicaciones existentes escritas en él.</li>
                                <li><strong className="text-blue-400">• Python 3: </strong> Es la versión actual y la que está en evolución activa.</li>
                            </p>
                            <p>
                                Ambas versiones no son compatibles entre sí. Un script de Python 2 no se ejecutará en un entorno de Python 3 y viceversa. Para cualquier proyecto nuevo, se debe usar Python 3, que es la versión utilizada en este curso.
                            </p>
                        </DivContent>
                    )
                }
            },
            {
                id: '1.9',
                item: 'Implementaciones de Python',
                content: {
                    title: 'Implementaciones de Python',
                    body: (
                        <DivContent>
                            <p>
                              Una "implementación" es un entorno que permite ejecutar programas escritos en Python.
                            </p>
                        
                            <p> 
                                <li><strong className="text-blue-400">• CPython:  </strong>Es la implementación tradicional y de referencia, mantenida por la Python Software Foundation (PSF). Está escrita en el lenguaje de programación "C", lo que permite que se pueda usar en casi cualquier plataforma. Es la versión más influyente.</li>
                                <li><strong className="text-blue-400">• Cython:  </strong>Es una herramienta que traduce código Python a código "C". Su objetivo es solucionar la falta de eficiencia de Python en cálculos matemáticos complejos, haciendo que el código se ejecute mucho más rápido.</li>
                                <li><strong className="text-blue-400">• Jython:  </strong>Es un entorno de Python escrito en RPython (una versión restringida de Python). Es principalmente una herramienta para los desarrolladores de Python para probar nuevas características.</li>
                                <li><strong className="text-blue-400">• MicroPython:  </strong>Es una implementación de código abierto de Python 3, optimizada para ejecutarse en microcontroladores y hardware de bajo nivel.</li>
                            </p>                        
                        </DivContent>
                    )
                }
            },
            {
                id: '1.10',
                item: 'Descarga e instalación de Python',
                content: {
                    title: 'Descarga e instalación de Python',
                    body: (
                        <DivContent>
                            <p>
                                La forma de obtener Python varía según el sistema operativo:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong className="text-blue-400">Linux: </strong>Es muy probable que ya tengas Python 3 instalado. Para comprobarlo, abre una terminal y escribe <span className="text-amber-300 font-bold">python3</span>. Si no lo tienes, puedes instalarlo con el gestor de paquetes de tu distribución.</li>
                                <li><strong className="text-blue-400">Otros sistemas operativos: </strong>Se puede descargar una copia desde el sitio web oficial: <a href="https://www.python.org/downloads/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">https://www.python.org/downloads/</a></li>
                            </ul>
                            
                        </DivContent>
                    )
                }
            },
            {
                id: '1.11',
                item: 'Cómo descargar, instalar y configurar Python',
                content: {
                    title: 'Cómo descargar, instalar y configurar Python',
                    body: (
                        <DivContent>
                            <p className="mt-4">
                                El sitio web detectará tu sistema operativo y te ofrecerá la última versión de Python 3.
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li><strong className="text-blue-400">Windows: </strong>Ejecuta el archivo <span className="text-amber-300 font-bold">.exe</span> descargado. Durante la instalación, es muy importante marcar la casilla que dice <span className="text-amber-300 font-bold">Agregar Python 3.x a PATH</span> para facilitar su uso.</li>
                                <li><strong className="text-blue-400">macOS: </strong>Aunque es posible que tengas una versión de Python 2 preinstalada, debes descargar e instalar el archivo <span className="text-amber-300 font-bold">.pkg</span> correspondiente a Python 3 desde el sitio web.</li>
                            </ul>
                        </DivContent>
                    )
                }
            },
            {
                id: '1.12',
                item: 'Comenzando tu trabajo en Python',
                content: {
                    title: 'Comenzando tu trabajo en Python',
                    body: (
                        <DivContent>
                            <p>
                                Para empezar a programar, se necesitan herramientas como un editor de código, una consola para ejecutarlo y un depurador para revisarlo paso a paso. La instalación estándar de Python incluye una aplicación simple llamada <strong className="text-blue-400">IDLE (Integrated Development and Learning Environment)</strong>, que contiene estas herramientas básicas.
                            </p>
                        </DivContent>
                    )
                }
            },
            {
                id: '1.13_primer-programa',
                item: 'Tu primer programa antes de tu primer programa',
                content: {
                    title: 'Tu primer programa antes de tu primer programa',
                    body: (
                        <DivContent>
                            <p>
                                Sigue estos pasos para crear y ejecutar un programa simple IDLE:
                            </p>
                            <ul className="list-decimal list-inside ml-4">
                                <li>Abre IDLE <span className="font-cascadia">{"->"}</span> Menú <span className="text-amber-300 font-bold">File</span> <span className="font-cascadia">{"->"}</span> <span className="text-amber-300 font-bold">New File</span></li>
                                <li>Guarda el archivo. Los archivos de Python usan la extensión <span className="text-amber-300 font-bold">.py</span></li>
                                <li>Escribe el siguiente código:</li>
                                <Code>
                                    print("Hisssssss...")
                                </Code>
                                <li>Guarda y ejecuta: Menú <span className="text-amber-300 font-bold">Run</span> <span className="font-cascadia">{"->"}</span> <span className="text-amber-300 font-bold">Run Module</span> (o presiona <span className="text-amber-300 font-bold">F5</span>).</li>
                                <li>Verás el resultado <span className="text-blue-600 font-bold">Hisssssss...</span> en la consola interactiva.</li>
                            </ul>
                        </DivContent>
                    )
                }
            },
            {
                id: '1.14',
                item: 'Cómo estropear y arreglar tu código',
                content: {
                    title: 'Cómo estropear y arreglar tu código',
                    body: (
                        <DivContent>
                            <p>
                                Puedes experimentar creando errores para ver cómo reacciona el intérprete:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>
                                    <strong className="text-blue-400">Error de sintaxis:</strong> Si borras un paréntesis de cierre, el código se vuelve erróneo. Al intentar ejecutarlo, IDLE mostrará una ventana de error indicando un **"EOF inesperado"** (fin de archivo), porque la sintaxis está incompleta.
                                </li>
                                <li>
                                    <strong className="text-blue-400">Error de nombre:</strong> Si escribes mal una palabra clave, como `prin` en lugar de `print`, Python no podrá reconocer la instrucción. La naturaleza de este error es diferente y se detecta en otra etapa de la interpretación.
                                </li>
                            </ul>
                            <p className="mt-4">
                                La ventana de la consola te mostrará información útil sobre el error:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>El **traceback**, que muestra la ruta que siguió el código.</li>
                                <li>La **ubicación del error**, incluyendo el nombre del archivo y el número de línea.</li>
                                <li>El **contenido de la línea** donde ocurrió el error.</li>
                                <li>El **nombre del error** y una breve explicación.</li>
                            </ul>
                        </DivContent>
                    )
                }
            },
            
        ]
    },
    {
        id: '2',
        icon: ['far', 'user-circle'],
        title: 'Python Básico',
        items: [
            {
                id: '2.1',
                item: 'Nuestro primer programa y la función print()',
                content: {
                    title: 'Nuestro primer programa y la función print()',
                    body: (
                        <DivContent>
                            
                            <h3>*Configuración de VS Code*</h3>
                            <p>
                                Es hora de comenzar a escribir código real y totalmente funcional en Python. Obviamente, este primer código será muy sencillo.
                            </p>
                            <p>
                                Para comenzar, primero abriremos nuestro IDE, en este caso Visual Studio Code y haremos lo siguiente:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Abrir VS Code y presionar <span className="text-amber-300 font-bold">Ctrl + Shift + P</span>.</li>
                                <li>Escribimos <span className="text-amber-300 font-bold">Python: Select Interpreter</span> y seleccionamos nuestra versión de Python instalada.</li>
                                <li>Creamos un nuevo archivo con <span className="text-amber-300 font-bold">Ctrl + N</span></li>
                                <li>Y guardamos el archivo recién creado con extensión <span className="text-amber-300 font-bold">.py</span> (ej. <span className="text-amber-300 font-bold">hello-world.py</span> )</li>
                            </ul>
                            <p>
                                Todo esto nos sirvió para configurar y tener listo nuestro archivo Python, listo para empezar a crear código en él.
                            </p>
                            
                            <h3>*Función print()* </h3>
                            <p>
                                La función <strong className="text-blue-400">print()</strong> será nuestra primera herramienta que aprenderemos en Python.
                            </p>
                            <p>
                                <strong className="text-blue-400">print()</strong> es el nombre de una función integrada de Python. Las funciones, en este contexto, es una parte separa del código de computadora capaz de:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong className="text-blue-400">Causar algún efecto:</strong> como enviar text a la terminal, crear un archivo, dibujar una imagen, etc.</li>
                                <li><strong className="text-blue-400">Evaluar un valor:</strong> Calcular la raíz cuadrada de un valor, la longitud de un texto, etc., que posteriormente se nos devolverá como el resultado de la función.</li>
                            </ul>
                            <p>
                                Las funciones pueden venir de distintos contextos:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong className="text-blue-400">De python mismo.</strong> Se les llama funciones integradas.</li>
                                <li><strong className="text-blue-400">De módulos.</strong> Pueden provenir de uno o varios de los módulos de Python. Algunos ya vienen integrados y otros requieren instalación.</li>
                                <li><strong className="text-blue-400">De tu código.</strong> Podemos escribir nuestras propias funciones, tantas como deseemos.</li>
                            </ul>
                            <p>
                                Si vas a ocupar el nombre de una función ya existente, no podrás modificar su nombre, convirtiéndose en una palabra reservada.
                            </p>
                            <p>Ej.
                            </p>
                            <Code>print("Hello, World!")</Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '2.2',
                item: 'Literales de Python (Tipos de datos básicos)',
                content: {
                    title: 'Literales de Python (Tipos de datos básicos)',
                    body: (
                        <DivContent>
                            <p>
                                En Python, los <strong className="text-blue-400">tipos de datos básicos</strong>, o literales, son las categorías en las que se clasifican los valores que utilizamos en nuestros programas. Es fundamental saber diferenciarlos pues nos ayuda a trabajar con variables y realizar distintas operaciones en Python.
                            </p>

                            <h4>1. Enteros (<strong className="text-blue-400">int</strong> - 'integer')</h4>
                            <p>
                                Los números enteros son aquellos que no tienen parte decimal. En Python, los representamos escribiendo únicamente el número, sin comillas ni puntos decimales de por medio.
                            </p>
                            <p>Ej.</p>
                            <Code>
                                {`edad = 23 
cantidad = 123`}
                            </Code>

                            <h4>2. Flotantes (<strong className="text-blue-400">float</strong>)</h4>
                            <p>
                                Los números flotantes, conocidos como números de punto flotante, son aquellos que tienen una parte decimal. Se representan utilizando un **punto** para separar la parte entera de la decimal.
                            </p>
                            <p>Ej.</p>
                            <Code>
                                {`precio = 49.99
altura = 1.78`}
                            </Code>

                            <h4>3. Cadenas de texto (<strong className="text-blue-400">strings</strong>)</h4>
                            <p>
                                Las cadenas de texto, o simplemente cadenas, son secuencias de caracteres (números, letras, símbolos...) entre <strong className="text-blue-400">comillas simples ('...')</strong> o <strong className="text-blue-400">dobles ("...")</strong>. Se utilizan para representar texto en Python.
                            </p>
                            <p>
                                Para incluir caracteres especiales como comillas dentro del string, usamos la <strong className="text-blue-400">diagonal invertida (\)</strong> de la siguiente manera: `\'` o `\"`. También puedes usar la notación de <strong className="text-blue-400">triple comilla ('''...''' o """...""")</strong> para crear cadenas de varias líneas.
                            </p>
                            <p>Ej.</p>
                            <Code>
                                {`nombre = 'Krico'
mensaje = 'Krico, saca las cheves!!'
cita = "Él dijo: \"¡Esto es genial!\""
poema = """
Un verso.
Otro verso más.
"""`}
                            </Code>

                            <h4>4. Booleanos (<strong className="text-blue-400">True / False</strong>)</h4>
                            <p>
                                Los valores booleanos representan los valores de verdad: <strong className="text-blue-400">True</strong> (verdadero) y <strong className="text-blue-400">False</strong> (falso). Se utilizan comúnmente en expresiones condicionales y operaciones lógicas. Su nombre proviene de George Boole, autor de las Leyes del Pensamiento.
                            </p>
                            <blockquote className="border-l-4 border-amber-300 pl-4 my-2">
                                <p>
                                    <strong className="text-blue-400">Importante:</strong> Los valores booleanos en Python siempre comienzan con mayúscula.
                                </p>
                            </blockquote>
                            <p>Ej.</p>
                            <Code>
                                {`status = True
tiene_descuento = False`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '2.3',
                item: 'Operadores Básicos',
                content: {
                    title: 'Operadores Básicos',
                    body: (
                        <DivContent>
                            <p>
                                Los **operadores** son símbolos especiales que nos permiten realizar operaciones en variables y valores. Cuando los datos y operadores se unen, forman juntos <strong className="text-blue-400">expresiones</strong>.
                            </p>

                            <hr />
                            
                            <h3>1. Operadores Aritméticos</h3>
                            <p>
                                Se usan para realizar operaciones matemáticas básicas:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Suma** (`+`): suma dos valores.</li>
                                <li>**Resta** (`-`): resta el segundo valor al primero.</li>
                                <li>**Multiplicación** (`*`): multiplica dos valores.</li>
                                <li>**División** (`/`): divide y devuelve un valor de tipo **float**.</li>
                                <li>**División entera** (`//`): divide y devuelve un valor tipo **int** (redondeado al número entero inferior más cercano).</li>
                                <li>**Módulo o Resto** (`%`): devuelve el resto de la división entre los valores.</li>
                                <li>**Exponenciación** (`**`): eleva el primer número a la potencia del segundo.</li>
                            </ul>
                            <p>Ejemplo:</p>
                            <Code>
                                {`a = 7
b = 3

suma = a + b              # 10
resta = a - b             # 4
multiplicacion = a * b    # 21
division = a / b          # 2.333333...
division_entera = a // b  # 2
modulo = a % b            # 1
exponenciacion = a ** b   # 343`}
                            </Code>

                            <hr />

                            <h3>2. Operadores de Comparación</h3>
                            <p>
                                Sirven para comparar dos valores y nos devuelven un valor **booleano** (<strong className="text-blue-400">True</strong> o <strong className="text-blue-400">False</strong>):
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Igual a** {'=='}: devuelve True si ambos valores son iguales.</li>
                                <li>**Diferente a** {'!='}: devuelve True si ambos valores son distintos.</li>
                                <li>**Mayor que** {'>'} / **Menor que** {'<'}</li>
                                <li>**Mayor o igual que** {'>='}/ **Menor o igual que** {'<='}</li>
                            </ul>
                            <p>Ejemplo:</p>
                            <Code>
                                {`a = 10
b = 7

print(a == b) # False
print(a != b) # True
print(a > b)  # True`}
                            </Code>

                            <hr />

                            <h3>3. Operadores Lógicos</h3>
                            <p>
                                Se utilizan para combinar expresiones condicionales y evaluar múltiples condiciones:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>**AND** (`and`): devuelve True si **ambas** condiciones son verdaderas.</li>
                                <li>**OR** (`or`): devuelve True si **al menos una** de las condiciones es verdadera.</li>
                                <li>**NOT** (`not`): invierte el valor de una condición.</li>
                            </ul>
                            <p>Ejemplo:</p>
                            <Code>
                                {`a = 10
b = 7

# True and True -> True
print((a < 20) and (b >= 7))  

# True or False -> True
print((a == 10) or (b < 6))

# not True -> False
print(not (a == 10))`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '2.4',
                item: 'Variables',
                content: {
                    title: 'Variables',
                    body: (
                        <DivContent>
                            <h3>*¿Qué es una Variable?*</h3>
                            <p>
                                Una variable es un espacio en la memoria de la computadora donde podemos almacenar información (<strong className="text-blue-400">números, texto o valores lógicos</strong>). Puedes pensar en ella como una caja con un nombre, donde guardas algo para usarlo después.
                            </p>
                            <p>
                                Para crear una variable, basta con escribir su nombre (esto se conoce como **declaración**). Si quieres guardarle un valor, utilizamos el operador de **asignación** (`=`) (esto es **inicializar**). El nombre va a la izquierda del signo, y el valor a la derecha.
                            </p>
                            <p>Ej.</p>
                            <Code>
                                {`nombre = "Krico"
edad = 17
es_estudiante = True`}
                            </Code>
                            <p>
                                También podemos asignar el mismo valor a múltiples variables en una sola línea (**asignación múltiple**):
                            </p>
                            <p>Ej.</p>
                            <Code>
                                {`a = b = c = 10`}
                            </Code>
                            <p>En este caso, `a`, `b` y `c`, tendrán el valor `10`.</p>

                            <hr />

                            <h3>*Normas al Nombrar Variables*</h3>
                            <p>
                                Al nombrar variables en Python, es importante seguir algunas reglas para mantener un código legible y evitar errores:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Solo pueden contener **letras** (`a...z`, `A...Z`), **números** (`0...9`) y **guiones bajos** (`_`).</li>
                                <li>**No pueden comenzar con un número** ni contener espacios.</li>
                                <li>Python es **sensible a mayúsculas y minúsculas**, por lo que `nombre` y `Nombre` son variables distintas.</li>
                                <li>No se pueden utilizar **palabras clave reservadas** de Python para nombrar variables (por ejemplo: `if`, `else`, `import`, etc.).</li>
                                <li>Se recomienda utilizar **nombres descriptivos** para las variables.</li>
                            </ul>

                            <hr />

                            <h3>*Notaciones de Estilo (PEP 8)* </h3>
                            <p>
                                La comunidad Python, a través de la guía de estilo **PEP 8**, recomienda seguir un estilo uniforme, siendo el estándar:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>
                                    **snake\_case** (Estándar de Python): Todas las palabras van en minúsculas y se separan con un guion bajo (`_`). Se recomienda para variables y funciones. Ejemplo: <Code>{`mi_nombre = '...'`}</Code>
                                </li>
                                <li>
                                    **PascalCase** (UpperCamelCase): Similar a camelCase, pero todas las palabras comienzan con mayúsculas. En Python, se usa principalmente para nombrar **clases**. Ejemplo: <Code>{`class MiClase: pass`}</Code>
                                </li>
                                <li>
                                    **CONSTANTES**: Para variables cuyos valores se mantienen fijos durante todo el código, se usa únicamente **MAYÚSCULAS**. Ejemplo: <Code>{`PI = 3.141592`}</Code>
                                </li>
                            </ul>
                        </DivContent>
                    )
                }
            },
            {
                id: '2.5',
                item: 'Comentarios',
                content: {
                    title: 'Comentarios',
                    body: (
                        <DivContent>
                            <h3>*La Importancia del Comentario*</h3>
                            <p>
                                Los **comentarios** son líneas de texto dentro de tu código que el intérprete de Python **ignora**. Su propósito principal es **documentar** el código, explicar su lógica, o marcar temporalmente líneas para depuración.
                            </p>
                            <p>
                                Los comentarios son cruciales para la **legibilidad del código**, especialmente cuando trabajas en equipo o revisas un código antiguo. Nos permiten escribir los pasos de cómo se realizaron los cálculos de una forma sencilla y clara.
                            </p>

                            <hr />

                            <h3>*Sintaxis del Comentario*</h3>
                            <p>
                                En Python, un comentario comienza con el símbolo de **almohadilla** (`#`). Todo lo que sigue a este símbolo en la misma línea es considerado un comentario.
                            </p>
                            <p>Ej.</p>
                            <Code>
                                {`# Esto es un comentario de línea completa
nombre = "Krico"  # El comentario puede ir al final de una línea de código

a = 10
b = 5
suma = a + b  # Calculamos la suma de a y b
# print(suma) # Línea comentada temporalmente para pruebas`}
                            </Code>

                            <blockquote className="border-l-4 border-amber-300 pl-4 my-2">
                                <p>
                                    <strong className="text-blue-400">Recuerda:</strong> Los comentarios pueden utilizarse para colocar información adicional, pero nunca deben contener información incorrecta o errónea.
                                </p>
                            </blockquote>
                        </DivContent>
                    )
                }
            },
            {
                id: '2.6',
                item: 'Interacción con el Usuario',
                content: {
                    title: 'Interacción con el Usuario',
                    body: (
                        <DivContent>
                            <h3>*La función input()*</h3>
                            <p>
                                La función integrada <strong className="text-blue-400">input()</strong> permite al programa interactuar con el usuario. Cuando se llama a esta función, el programa se detiene y espera a que el usuario escriba algo y presione **Enter**.
                            </p>
                            <p>
                                <strong className="text-blue-400">El resultado siempre es una cadena</strong>
                            </p>
                            <p>
                                Es fundamental entender que el resultado de la función `input()` es una **cadena** (`str`). Contiene todos los caracteres que el usuario introduce desde el teclado.
                            </p>
                            <blockquote className="border-l-4 border-amber-300 pl-4 my-2">
                                <p>
                                    Debido a que siempre devuelve una cadena, **no se debe utilizar directamente** como argumento para operaciones matemáticas. Intentar realizar una operación aritmética (como una exponenciación) con una cadena resultará en un **error de tipo** (`TypeError`).
                                </p>
                            </blockquote>
                            
                            <hr />

                            <h3>*Conversión de Tipos (Type Casting)*</h3>
                            <p>
                                Para poder usar los datos ingresados por el usuario en cálculos matemáticos, debemos convertirlos a un **tipo numérico** (entero o flotante). Python ofrece dos funciones para esto:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong className="text-blue-400">int()</strong>: Toma un argumento (ej. una cadena) e intenta convertirlo a un valor **entero**.</li>
                                <li><strong className="text-blue-400">float()</strong>: Toma un argumento e intenta convertirlo a un valor **flotante** (con decimales).</li>
                            </ul>
                            <p>
                                Podemos **anidar** las llamadas a estas funciones para convertir la entrada de inmediato:
                            </p>
                            <p>Ej.</p>
                            <Code>
                                {`años_string = input("¿Cuántos años tienes? ")

# Convertir la entrada a entero (int) para poder operar
años_int = int(años_string)

dias_vividos = años_int * 365.25

print("Has vivido aproximadamente", int(dias_vividos), "días.")

# O de forma directa y eficiente:
numero = float(input("Ingresa un número flotante: "))
print(numero)`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            
        ]
    },
    
      {
        id: '3',
        icon: ['far', 'cogs'],
        title: 'Control de Flujo',
        items: [
            {
                id: '3.1',
                item: 'Toma de decisiones en Python',
                content: {
                    title: 'Toma de decisiones en Python',
                    body: (
                        <DivContent>
                            <h3>Introducción a las sentencias condicionales 🚪</h3>
                            <p>
                                Las sentencias condicionales permiten que tu programa tome **decisiones** basándose en si una condición es **verdadera** o **falsa**.
                            </p>

                            <hr />

                            <h3>if, if-else, if-elif-else</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>
                                    <strong className="text-blue-400">if:</strong> Ejecuta un bloque de código si la condición es **verdadera**.
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`edad = 12
if edad >= 10:
    print("Eres mayor de 10 años")`}
                                    </Code>
                                </li>
                                <li>
                                    <strong className="text-blue-400">if-else:</strong> Ofrece un camino alternativo. Si la condición del `if` es falsa, se ejecuta el bloque `else`.
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`edad = 8
if edad >= 10:
    print("Puedes entrar al juego")
else:
    print("Eres muy joven aún")`}
                                    </Code>
                                </li>
                                <li>
                                    <strong className="text-blue-400">if-elif-else:</strong> Permite revisar **múltiples condiciones**. Si la condición del `if` es falsa, se revisan las condiciones de `elif` en orden. Si ninguna es verdadera, se ejecuta el `else`.
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`nota = 85
if nota >= 90:
    print("¡Excelente!")
elif nota >= 70:
    print("Bien hecho")
else:
    print("Necesitas estudiar más")`}
                                    </Code>
                                </li>
                            </ul>

                            <hr />

                            <h3>Condiciones anidadas 📦</h3>
                            <p>
                                Consiste en colocar una sentencia condicional **dentro de otra**. Esto permite tomar decisiones más específicas.
                            </p>
                            <p>Ejemplo:</p>
                            <Code>
                                {`tiene_dinero = True
cantidad = 50
if tiene_dinero:
    if cantidad >= 30:
        print("Puedes comprar el helado")
    else:
        print("No tienes suficiente dinero")
else:
    print("No tienes dinero")`}
                            </Code>

                            <hr />

                            <h3>Operadores de comparación ⚖️</h3>
                            <p>
                                Símbolos utilizados para comparar valores, cuyo resultado siempre es un booleano (`True` o `False`):
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>{'=='}: **Igual** a</li>
                                <li>{'!='}: **Diferente** de</li>
                                <li>{'>'}: **Mayor** que</li>
                                <li>{'<'}: **Menor** que</li>
                                <li>{'>='}: **Mayor o igual** que</li>
                                <li>{'<='}: **Menor o igual** que</li>
                            </ul>
                            <p>Ejemplo:</p>
                            <Code>
                                {`x = 5
y = 10
print(x < y)   # True (verdadero)
print(x == y)  # False (falso)`}
                            </Code>
                            
                            <hr />

                            <h3>Ejemplos prácticos de control de flujo</h3>
                            <p>Verificar si un número es par o impar:</p>
                            <Code>
                                {`numero = 7
if numero % 2 == 0:
    print("Es par")
else:
    print("Es impar")`}
                            </Code>
                            <p>Sistema de calificaciones:</p>
                            <Code>
                                {`puntos = 75
if puntos >= 90:
    calificacion = "A"
elif puntos >= 80:
    calificacion = "B"
elif puntos >= 70:
    calificacion = "C"
else:
    calificacion = "F"
print(f"Tu calificación es: {calificacion}")`}
                            </Code>

                            <hr />

                            <h3>Preguntas y respuestas</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>**¿Puedo tener múltiples condiciones en un solo if?** Sí, usando operadores lógicos como **`and`** y **`or`**. Ejemplo: `if edad {'>='} 10 and tiene_permiso:`.</li>
                                <li>**¿Qué pasa si no pongo else?** No hay problema. Si la condición es falsa, el programa simplemente continúa con la siguiente línea de código después del bloque `if`.</li>
                                <li>**¿Cuántos elif puedo usar?** Tantos como necesites, no hay límite.</li>
                            </ul>
                        </DivContent>
                    )
                }
            },
            {
                id: '3.2',
                item: 'Bucles en Python',
                content: {
                    title: 'Bucles en Python',
                    body: (
                        <DivContent>
                            <h3>Introducción a los Bucles 🔁</h3>
                            <p>
                                Los bucles son estructuras que permiten **repetir** una o más instrucciones varias veces.
                            </p>

                            <hr />

                            <h3>while y for</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>
                                    <strong className="text-blue-400">while:</strong> Repite el bloque de código **mientras una condición sea verdadera**. Es crucial cambiar la condición dentro del bucle para evitar bucles infinitos.
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`contador = 1
while contador <= 5:
    print(f"Vuelta número {contador}")
    contador += 1 # Condición que cambia para terminar el bucle`}
                                    </Code>
                                </li>
                                <li>
                                    <strong className="text-blue-400">for:</strong> Repite el bloque de código para **cada elemento** de una secuencia (como una lista o un rango de números).
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`for i in range(1, 6): # range(inicio, fin) genera una secuencia
    print(f"Número {i}")`}
                                    </Code>
                                </li>
                            </ul>

                            <hr />

                            <h3>break y continue 🛑⏭️</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>
                                    <strong className="text-blue-400">break:</strong> **Detiene el bucle inmediatamente**, saltando a la siguiente línea de código después del bucle.
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`for i in range(10):
    if i == 5:
        break
    print(i) # Imprime 0, 1, 2, 3, 4`}
                                    </Code>
                                </li>
                                <li>
                                    <strong className="text-blue-400">continue:</strong> **Saltea la iteración actual** y pasa directamente al inicio de la siguiente iteración del bucle.
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`for i in range(5):
    if i == 2:
        continue
    print(i) # Imprime 0, 1, 3, 4 (salta el 2)`}
                                    </Code>
                                </li>
                            </ul>

                            <hr />

                            <h3>else en bucles ✨</h3>
                            <p>
                                En Python, la cláusula **`else`** después de un bucle (`for` o `while`) se ejecuta **solo si el bucle termina de forma normal** (es decir, la condición del `while` se vuelve falsa, o el `for` itera sobre todos sus elementos). **No se ejecuta si el bucle se detiene con `break`**.
                            </p>
                            <p>Ejemplo:</p>
                            <Code>
                                {`for i in range(5):
    print(i)
else:
    print("¡Bucle completado!")`}
                            </Code>

                            <hr />

                            <h3>Ejercicios y laboratorios</h3>
                            <h4>Bucle while con ejemplos prácticos (Adivinar un número)</h4>
                            <Code>
                                {`numero_secreto = 7
intento = 0 

while intento != numero_secreto:
    intento = int(input("Adivina el número: "))
    if intento < numero_secreto:
        print("Muy bajo")
    elif intento > numero_secreto:
        print("Muy alto")
print("¡Correcto!")`}
                            </Code>

                            <h4>Pirámide de bloques</h4>
                            <Code>
                                {`# Crear una pirámide de asteriscos
altura = 5 

for i in range(1, altura + 1):
    print("*" * i) 
# Resultado:
# *
# **
# ***
# ****
# *****`}
                            </Code>

                            <h4>La hipótesis de Collatz (Problema matemático)</h4>
                            <Code>
                                {`numero = int(input("Ingresa un número: "))
pasos = 0
while numero != 1:
    if numero % 2 == 0:
        numero = numero // 2
    else:
        numero = 3 * numero + 1
    pasos += 1
    print(numero)
print(f"Se llegó a 1 en {pasos} pasos")`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '3.3',
                item: 'Operaciones lógicas y de bits',
                content: {
                    title: 'Operaciones lógicas y de bits',
                    body: (
                        <DivContent>
                            <h3>3.3.1 Lógica de computadoras 🧠</h3>
                            <p>
                                Las computadoras trabajan con valores **`True`** (verdadero) y **`False`** (falso). Los operadores lógicos permiten combinar estas condiciones para tomar decisiones complejas.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>
                                    <strong className="text-blue-400">and (Conjunción):</strong> Devuelve `True` si **ambas** condiciones son verdaderas.
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`tiene_llave = True
tiene_permiso = True
if tiene_llave and tiene_permiso:
    print("Puedes abrir la caja")`}
                                    </Code>
                                </li>
                                <li>
                                    <strong className="text-blue-400">or (Disyunción):</strong> Devuelve `True` si **al menos una** condición es verdadera.
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`tiene_efectivo = False
tiene_tarjeta = True
if tiene_efectivo or tiene_tarjeta:
    print("Puedes pagar")`}
                                    </Code>
                                </li>
                                <li>
                                    <strong className="text-blue-400">not (Negación):</strong> **Invierte** el valor booleano. `not True` es `False`, y `not False` es `True`.
                                    <p>Ejemplo:</p>
                                    <Code>
                                        {`esta_lloviendo = False
if not esta_lloviendo:
    print("Puedes salir a jugar")`}
                                    </Code>
                                </li>
                            </ul>

                            <hr />

                            <h3>3.3.2 Expresiones lógicas</h3>
                            <p>
                                Se pueden crear expresiones complejas combinando operadores, usando **paréntesis** para controlar el orden de evaluación.
                            </p>
                            <p>Ejemplo:</p>
                            <Code>
                                {`edad = 15
tiene_permiso = True
if edad >= 13 and (tiene_permiso or edad >= 18):
    print("Puedes acceder")`}
                            </Code>

                            <hr />

                            <h3>3.3.3 Operadores bit a bit (Bitwise) 💾</h3>
                            <p>
                                Estos operadores trabajan directamente con los bits (`0` y `1`) de los números enteros, manipulando cada dígito binario individualmente.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong className="text-blue-400">& (AND bit a bit):</strong> El bit resultante es 1 si **ambos** bits son 1.
                                    <Code>{`5 & 3  # 101 & 011 = 001 = 1`}</Code>
                                </li>
                                <li><strong className="text-blue-400">| (OR bit a bit):</strong> El bit resultante es 1 si **al menos uno** de los bits es 1.
                                    <Code>{`5 | 3  # 101 | 011 = 111 = 7`}</Code>
                                </li>
                                <li><strong className="text-blue-400">^ (XOR - OR exclusivo):</strong> El bit resultante es 1 si los bits son **diferentes**.
                                    <Code>{`5 ^ 3  # 101 ^ 011 = 110 = 6`}</Code>
                                </li>
                                <li><strong className="text-blue-400">~ (NOT bit a bit):</strong> Invierte todos los bits. (Nota: La representación real en Python usa complemento a dos, por eso `~5` es `-6`).
                                    <Code>{`~5  # -6 (en complemento a 2)`}</Code>
                                </li>
                                <li><strong className="text-blue-400">{'>>'} y {'<<'} (Desplazamiento):</strong> Mueven los bits a la derecha o izquierda.
                                    <Code>{`8 >> 1  # 1000 >> 1 = 0100 = 4 (Divide entre 2)
8 << 1  # 1000 << 1 = 10000 = 16 (Multiplica por 2)`}</Code>
                                </li>
                            </ul>

                            <hr />

                            <h3>3.3.4 Jerarquía de prioridades</h3>
                            <p>
                                Python evalúa las operaciones lógicas y de bits en el siguiente orden:
                            </p>
                            <ol className="list-decimal list-inside ml-4">
                                <li><strong className="text-blue-400">`not`</strong></li>
                                <li><strong className="text-blue-400">`and`</strong></li>
                                <li><strong className="text-blue-400">`or`</strong></li>
                                <li>Operadores bit a bit: **`~, {'<<'}, {'>>'}, &, ^, |`**</li>
                            </ol>
                            <p>Utiliza **paréntesis `()`** para anular la prioridad y forzar un orden de evaluación. Ejemplo: `(a or b) and c`.</p>

                            <hr />

                            <h3>3.3.5 Operadores booleanos y máscaras de bits 🎭</h3>
                            <p>
                                Una **máscara de bits** es un valor predefinido que se usa con operadores bit a bit para activar, desactivar o verificar bits específicos en un número.
                            </p>
                            <Code>
                                {`# Permisos: leer=1 (001), escribir=2 (010), ejecutar=4 (100)
permisos = 0b101  # leer y ejecutar (5 en decimal)

# Verificar si tiene permiso de lectura
tiene_lectura = permisos & 0b001  # True (resultado es 1, que no es 0)

# Agregar permiso de escritura
permisos = permisos | 0b010  # 0b101 | 0b010 = 0b111 = 7`}
                            </Code>

                            <hr />

                            <h3>3.3.6 Desplazamiento binario (Multiplicación/División rápida)</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong className="text-blue-400">Desplazamiento a la Izquierda {'<<'}:</strong> Multiplica el número por $2^{'n'}$ (donde $n$ es el número de posiciones desplazadas).
                                    <Code>{`3 << 2  # 11 << 2 = 1100 = 12 (3 * 2²) `}</Code>
                                </li>
                                <li><strong className="text-blue-400">Desplazamiento a la Derecha {'>>'}:</strong> Divide el número por $2^{'n'}$ (descartando el residuo).
                                    <Code>{`12 >> 2  # 1100 >> 2 = 11 = 3 (12 // 2²) `}</Code>
                                </li>
                            </ul>
                        </DivContent>
                    )
                }
            },
            {
                id: '3.4',
                item: 'Listas',
                content: {
                    title: 'Listas 📋',
                    body: (
                        <DivContent>
                            <h3>¿Por qué necesitamos listas?</h3>
                            <p>
                                Las **Listas** son estructuras de datos que permiten almacenar **múltiples elementos** en una sola variable. Son el tipo de secuencia más versátil de Python, ya que son **mutables** (se pueden cambiar) y pueden contener elementos de diferentes tipos.
                            </p>

                            <hr />

                            <h3>Creación de listas</h3>
                            <p>Las listas se crean usando corchetes `[]`.</p>
                            <Code>
                                {`# Lista vacía
mi_lista = []

# Lista con números
numeros = [1, 2, 3, 4, 5]

# Lista con diferentes tipos de datos (Mutable y Heterogénea)
mixta = [1, "hola", 3.14, True]

# Usando list()
otra_lista = list(range(5))  # [0, 1, 2, 3, 4]`}
                            </Code>

                            <hr />

                            <h3>Indexación y rebanado (slicing) ✂️</h3>
                            <p>
                                Cada elemento tiene una posición o **índice** que comienza en **0**. Se puede acceder a los elementos usando estos índices.
                            </p>
                            <Code>
                                {`frutas = ["manzana", "banana", "naranja", "uva"]

# Acceder a elementos
print(frutas[0])  # "manzana"
print(frutas[-1]) # "uva" (El índice negativo cuenta desde el final)

# Rebanado (Slicing): [inicio:fin:paso]
print(frutas[1:3]) # ["banana", "naranja"] (El fin es exclusivo)
print(frutas[:2])  # ["manzana", "banana"] (Desde el inicio)
print(frutas[2:])  # ["naranja", "uva"] (Hasta el final)`}
                            </Code>

                            <hr />

                            <h3>Actualización y eliminación de elementos</h3>
                            <p>Debido a que las listas son mutables, sus elementos pueden ser modificados o eliminados.</p>
                            <Code>
                                {`numeros = [10, 20, 30, 40]

# Actualizar (Asignación por índice)
numeros[1] = 25  # [10, 25, 30, 40]

# Eliminar (Usando la palabra clave del)
del numeros[0]   # [25, 30, 40]`}
                            </Code>

                            <hr />

                            <h3>Funciones útiles con listas</h3>
                            <p>Funciones integradas de Python que trabajan con listas:</p>
                            <Code>
                                {`numeros = [3, 1, 4, 1, 5, 9, 2]

print(len(numeros))        # 7 (Longitud de la lista)
print(max(numeros))        # 9 (Valor máximo)
print(min(numeros))        # 1 (Valor mínimo)
print(sum(numeros))        # 25 (Suma total de elementos)
print(numeros.count(1))    # 2 (Veces que aparece el valor 1)`}
                            </Code>

                            <hr />

                            <h3>Métodos principales de listas (Modificadores)</h3>
                            <p>Métodos son funciones que pertenecen al objeto lista y se invocan con el punto (`.`).</p>
                            <Code>
                                {`lista = [1, 2, 3]

# Agregar al final
lista.append(4)     # [1, 2, 3, 4]

# Insertar en posición específica
lista.insert(1, 10) # [1, 10, 2, 3, 4]

# Eliminar por valor (solo la primera ocurrencia)
lista.remove(10)    # [1, 2, 3, 4]

# Eliminar y devolver el último elemento
ultimo = lista.pop() # ultimo=4, lista=[1, 2, 3]

# Ordenar la lista in-place (modifica la lista original)
lista.sort()        # [1, 2, 3]

# Invertir el orden in-place
lista.reverse()     # [3, 2, 1]

# Limpiar todos los elementos
lista.clear()       # []`}
                            </Code>

                            <hr />

                            <h3>Listas anidadas 🗃️</h3>
                            <p>
                                Son listas que contienen otras listas como elementos, muy útiles para representar matrices o tablas.
                            </p>
                            <Code>
                                {`matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Acceder a elementos: [fila][columna]
print(matriz[0][1]) # 2 (fila 0, columna 1)
print(matriz[2][2]) # 9 (fila 2, columna 2)`}
                            </Code>

                            <hr />

                            <h3>Ejemplos prácticos: Inversión de listas</h3>
                            <Code>
                                {`original = [1, 2, 3, 4, 5] 

# Método 1: Usando slicing [::-1]
invertida = original[::-1]
print(invertida) # [5, 4, 3, 2, 1]

# Método 2: Usando reverse() in-place
original.reverse()
print(original)  # [5, 4, 3, 2, 1]`}
                            </Code>

                            <h3>LAB: listas con los Beatles</h3>
                            <Code>
                                {`beatles = []
print("Paso 1:", beatles)

# Paso 2: Agregar miembros uno por uno
beatles.append("John Lennon")
beatles.append("Paul McCartney")
beatles.append("George Harrison")
print("Paso 2:", beatles)

# Paso 3: Completar con bucle for
nuevos = ["Stu Sutcliffe", "Pete Best"]
for miembro in nuevos:
    beatles.append(miembro)
print("Paso 3:", beatles)

# Paso 4: Remover miembros del[-2:] elimina desde la penúltima posición
del beatles[-2:] 
print("Paso 4:", beatles)

# Paso 5: Insertar a Ringo
beatles.insert(0, "Ringo Starr")
print("Paso 5:", beatles)

print(f"Los Fab {len(beatles)}")`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '3.5',
                item: 'Procesamiento de Listas',
                content: {
                    title: '3.5 – Procesamiento de Listas',
                    body: (
                        <DivContent>
                            
                            <h3>Iteración sobre listas 🚶‍♀️</h3>
                            <p>
                                Recorrer una lista es como revisar cada cajón de un mueble:
                            </p>
                            <Code>
                                {`colores = ["rojo", "verde", "azul"] 

# Recorrer elementos 
for color in colores: 
    print(f"Me gusta el {color}") 

# Recorrer con índices 
for i in range(len(colores)): 
    print(f"{i}: {colores[i]}") 

# Enumerar (mejor opción) 
for indice, color in enumerate(colores): 
    print(f"{indice}: {color}")`}
                            </Code>

                            <hr />

                            <h3>Uso de `in` y `not in` 🔎</h3>
                            <p>
                                Verificar si algo existe en una lista:
                            </p>
                            <Code>
                                {`frutas = ["manzana", "banana", "naranja"] 
if "manzana" in frutas: 
    print("Tenemos manzanas") 
if "sandía" not in frutas: 
    print("No tenemos sandía") 

# Buscar números 
numeros = [1, 2, 3, 4, 5] 
print(3 in numeros)  # True 
print(10 in numeros)  # False`}
                            </Code>

                            <hr />

                            <h3>Comparación entre listas ⚖️</h3>
                            <p>
                                Python compara listas elemento por elemento:
                            </p>
                            <Code>
                                {`lista1 = [1, 2, 3] 
lista2 = [1, 2, 3] 
lista3 = [1, 2, 4] 
print(lista1 == lista2)  # True 
print(lista1 == lista3)  # False 
print(lista1 < lista3)  # True (3 < 4)`}
                            </Code>

                            <hr />

                            <h3>Listas y cadenas de texto 🔄</h3>
                            <p>
                                Las cadenas y listas pueden convertirse entre sí:
                            </p>
                            <Code>
                                {`# De cadena a lista 
texto = "Hola Mundo" 
palabras = texto.split()  # ["Hola", "Mundo"] 
letras = list(texto)  # ['H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o'] 

# De lista a cadena 
palabras = ["Python", "es", "genial"] 
frase = " ".join(palabras) # "Python es genial" 

# Split con separador personalizado 
fecha = "31/12/2024" 
partes = fecha.split("/")  # ["31", "12", "2024"]`}
                            </Code>

                            <hr />

                            <h3>Ejercicios prácticos 💪</h3>
                            <Code>
                                {`# 1. Encontrar el número más grande 
numeros = [34, 12, 78, 23, 90, 45] 
mayor = numeros[0] 
for num in numeros: 
    if num > mayor: 
        mayor = num 
print(f"El mayor es: {mayor}") 

# 2. Contar vocales en una palabra 
palabra = "Python" 
vocales = ['a', 'e', 'i', 'o', 'u'] 
contador = 0 
for letra in palabra.lower(): 
    if letra in vocales: 
        contador += 1 
print(f"Vocales: {contador}") 

# 3. Crear lista de números pares 
numeros = list(range(1, 11)) 
pares = [] 
for num in numeros: 
    if num % 2 == 0: 
        pares.append(num) 
print(pares)  # [2, 4, 6, 8, 10]`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '3.6',
                item: 'Listas avanzadas',
                content: {
                    title: '3.6 – Listas avanzadas',
                    body: (
                        <DivContent>
                            
                            <h3>Copias y referencias de listas 🛑</h3>
                            <p>
                                Esto es muy importante: cuando "copias" una lista, debes tener cuidado. Por defecto, la asignación (`=`) crea una **referencia**, no una copia.
                            </p>
                            <Code>
                                {`# CUIDADO: Esto NO crea una copia 
lista1 = [1, 2, 3] 
lista2 = lista1  # lista2 apunta a la misma lista 
lista2[0] = 100 
print(lista1)  # [100, 2, 3] ¡También cambió! 

# CORRECTO: Crear una copia real 
lista1 = [1, 2, 3] 
lista2 = lista1[:]  # Método 1: Usando slicing completo
# lista2 = lista1.copy() # Método 2: Usando el método copy()
lista2[0] = 100 
print(lista1)  # [1, 2, 3] (no cambió) 
print(lista2)  # [100, 2, 3]`}
                            </Code>
                            <blockquote className="border-l-4 border-amber-300 pl-4 my-2">
                                Imagina que `lista1` es una casa. Cuando haces `lista2 = lista1`, ambas variables apuntan a la misma casa. Si pintas la casa con `lista2`, `lista1` también ve el cambio. Para tener dos casas diferentes, necesitas hacer una **copia real**.
                            </blockquote>

                            <hr />

                            <h3>Listas vs. matrices 🖼️</h3>
                            <p>
                                En Python, no hay un tipo "matriz" incorporado, pero podemos crear matrices usando **listas anidadas**:
                            </p>
                            <Code>
                                {`# Lista simple (1D) 
lista = [1, 2, 3, 4, 5] 

# Matriz 2D (como una tabla) 
matriz = [ 
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9] 
]`}
                            </Code>
                            <p>Diferencias clave:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Listas:** lineales, como una fila de cajas.</li>
                                <li>**Matrices:** bidimensionales (o n-dimensionales), como una tabla con filas y columnas.</li>
                            </ul>

                            <hr />

                            <h3>Operaciones sobre listas anidadas</h3>
                            <Code>
                                {`tabla = [ 
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9] 
] 

# Acceder a elementos: tabla[fila][columna]
print(tabla[1][2])  # 6 (fila 1, columna 2) 

# Modificar elementos 
tabla[0][0] = 100 
print(tabla)  # [[100, 2, 3], [4, 5, 6], [7, 8, 9]] 

# Recorrer toda la matriz 
for fila in tabla: 
    for elemento in fila: 
        print(elemento, end=" ") 
    print() # Nueva línea después de cada fila`}
                            </Code>

                            <hr />

                            <h3>Ejemplos prácticos con matrices ➕</h3>
                            <h4>Crear una tabla de multiplicar</h4>
                            <Code>
                                {`# Tabla del 1 al 5 
tabla = [] 
for i in range(1, 6): 
    fila = [] 
    for j in range(1, 6): 
        fila.append(i * j) 
    tabla.append(fila) 

# Mostrar la tabla 
for fila in tabla: 
    print(fila)`}
                            </Code>

                            <h4>Suma de elementos en una matriz</h4>
                            <Code>
                                {`matriz = [ 
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9] 
] 
suma_total = 0 
for fila in matriz: 
    for elemento in fila: 
        suma_total += elemento 
print(f"Suma total: {suma_total}")  # 45`}
                            </Code>

                            <h4>Transponer una matriz (intercambiar filas por columnas)</h4>
                            <Code>
                                {`original = [ 
    [1, 2, 3], 
    [4, 5, 6] 
] 
transpuesta = [] 
for j in range(len(original[0])):  # Itera sobre el número de columnas (3)
    nueva_fila = [] 
    for i in range(len(original)):   # Itera sobre el número de filas (2)
        nueva_fila.append(original[i][j]) 
    transpuesta.append(nueva_fila) 
print(transpuesta)  # [[1, 4], [2, 5], [3, 6]]`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '3.7',
                item: 'List Comprehensions y Arreglos',
                content: {
                    title: '3.7  List Comprehensions y Arreglos',
                    body: (
                        <DivContent>
                            
                            <h3>3.7.1 Comprensión de listas: sintaxis y ejemplos 📝</h3>
                            <p>
                                Las **List Comprehensions** son una forma rápida y elegante de crear listas. Es como una receta comprimida en una sola línea, ofreciendo una sintaxis más legible y eficiente que los bucles `for` tradicionales para la creación de listas.
                            </p>
                            <Code>
                                {`# Forma tradicional 
cuadrados_tradicional = [] 
for i in range(1, 6): 
    cuadrados_tradicional.append(i ** 2) 
print(cuadrados_tradicional) # [1, 4, 9, 16, 25] 

# Con list comprehension (mucho más corto) 
cuadrados = [i ** 2 for i in range(1, 6)] 
print(cuadrados) # [1, 4, 9, 16, 25] 

# Sintaxis básica: [expresión for elemento in iterable]`}
                            </Code>
                            
                            <h4>Ejemplos adicionales</h4>
                            <Code>
                                {`# Números pares del 1 al 10 (con condición)
pares = [x for x in range(1, 11) if x % 2 == 0] 
print(pares) # [2, 4, 6, 8, 10] 

# Palabras en mayúsculas (con expresión de transformación)
palabras = ["hola", "mundo", "python"] 
mayusculas = [palabra.upper() for palabra in palabras] 
print(mayusculas) # ['HOLA', 'MUNDO', 'PYTHON'] 

# Con condición if-else
numeros = [1, 2, 3, 4, 5] 
etiquetas = ["par" if x % 2 == 0 else "impar" for x in numeros] 
print(etiquetas) # ['impar', 'par', 'impar', 'par', 'impar']`}
                            </Code>

                            <hr />

                            <h3>3.7.2 Listas anidadas y matrices (listas bidimensionales y más) 🌐</h3>
                            <p>
                                Podemos usar list comprehensions para crear **matrices** (listas anidadas) de forma más compacta:
                            </p>
                            <Code>
                                {`# Matriz 3x3 llena de ceros (List comprehension anidada)
matriz = [[0 for j in range(3)] for i in range(3)] 
print(matriz) # [[0, 0, 0], [0, 0, 0], [0, 0, 0]] 

# Tabla de multiplicar del 1 al 5 
tabla = [[i * j for j in range(1, 6)] for i in range(1, 6)] 
for fila in tabla: 
    print(fila) 

# Matriz identidad 4x4 (1s en diagonal) 
identidad = [[1 if i == j else 0 for j in range(4)] for i in range(4)] 
print(identidad) 
# [[1, 0, 0, 0], 
#  [0, 1, 0, 0], 
#  [0, 0, 1, 0], 
#  [0, 0, 0, 1]]`}
                            </Code>

                            <hr />

                            <h3>3.7.3 Arreglos multidimensionales (3D, 4D, hasta nD) 🧊</h3>
                            <p>
                                Los arreglos (listas anidadas) pueden tener más de 2 dimensiones, representando estructuras de datos complejas:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>**1D**: Una fila de cajas (Lista simple)</li>
                                <li>**2D**: Una tabla (Lista de listas - Matriz)</li>
                                <li>**3D**: Un cubo de cajas (capas, filas y columnas)</li>
                                <li>**4D y más**: Se usan para representar datos en el tiempo u otros contextos.</li>
                            </ul>

                            <h4>Ejemplo de Arreglo 3D</h4>
                            <Code>
                                {`# Arreglo 3D: 2 "capas", cada una con 3 filas y 4 columnas 
arreglo_3d = [ 
    [ 
        [1, 2, 3, 4], 
        [5, 6, 7, 8], 
        [9, 10, 11, 12] 
    ], 
    [ 
        [13, 14, 15, 16], 
        [17, 18, 19, 20], 
        [21, 22, 23, 24] 
    ] 
] 

# Acceder a un elemento: [capa][fila][columna] 
print(arreglo_3d[0][1][2]) # 7 
print(arreglo_3d[1][2][3]) # 24 

# Crear un cubo 3x3x3 con list comprehension 
cubo = [[[i+j+k for k in range(3)] for j in range(3)] for i in range(3)]`}
                            </Code>
                            
                            <h4>Arreglos de Alta Dimensión</h4>
                            <p>
                                Los **Arreglos 4D** podrían representar datos en el tiempo, por ejemplo:
                                * Dimensión 1: Tiempo (diferentes días)
                                * Dimensión 2: Pisos de un edificio
                                * Dimensión 3: Filas en cada piso
                                * Dimensión 4: Columnas en cada fila
                            </p>
                            <Code>
                                {`# Arreglo 4D pequeño: 2x2x2x2 
arreglo_4d = [[[[1, 2], [3, 4]], [[5, 6], [7, 8]]], 
    [[[9, 10], [11, 12]], [[13, 14], [15, 16]]]] 

print(arreglo_4d[1][0][1][0]) # 11`}
                            </Code>
                            <blockquote className="border-l-4 border-amber-300 pl-4 my-2">
                                Para arreglos de muchas dimensiones, normalmente se usan **bibliotecas especializadas como NumPy**, que hacen que trabajar con ellos sea mucho más fácil y eficiente.
                            </blockquote>
                        </DivContent>
                    )
                }
            },
        ]
    },

{
        id: '4',
        icon: ['far', 'function'],
        title: 'Funciones',
        items: [
            {
                id: '4.1',
                item: 'Funciones: Introducción',
                content: {
                    title: '4.1 – Funciones: Introducción',
                    body: (
                        <DivContent>
                            <h3>¿Por qué necesitamos funciones?</h3>
                            <p>Las funciones son esenciales para el desarrollo de software por dos razones principales: **reutilización** y **organización**.</p>
                            
                            <h4>1. Reutilización de Código (Evitar la Repetición)</h4>
                            <p>
                                Si un fragmento de código se repite muchas veces (literalmente o con pequeñas modificaciones), es una señal clara de que debe convertirse en una función.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Riesgo de Error:** Al copiar y pegar código, si existe un error, se debe corregir en todos los lugares donde se pegó. Una función permite corregir el error en **un solo lugar** (dentro de la función).</li>
                                <li>**Condición Clave:** Si un fragmento de código comienza a aparecer en más de una ocasión, considera la posibilidad de **aislarlo en la forma de una función** e invocarla desde donde se necesite.</li>
                            </ul>

                            <h4>2. Organización y Descomposición (Manejo de Complejidad)</h4>
                            <p>
                                Los algoritmos complejos pueden hacer que el código crezca incontrolablemente. La **descomposición** es el proceso de dividir el problema en piezas aisladas.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Simplificación:** Un buen desarrollador divide el problema en pequeños problemas y codifica cada uno de ellos como una función independiente.</li>
                                <li>**Pruebas:** Cada pieza se codifica y se prueba por separado, lo que simplifica considerablemente el trabajo.</li>
                                <li>**Trabajo en Equipo:** Permite que un equipo de desarrolladores trabaje en un programa complejo, donde cada uno escribe un conjunto bien definido de funciones que, al combinarse en un módulo, forman el producto final.</li>
                                <li>**Condición Clave:** Si un fragmento de código se hace tan extenso que leerlo o entenderlo se hace complicado, considera **dividirlo** en pequeñas funciones.</li>
                            </ul>

                            <hr />

                            <h3>¿De dónde provienen las funciones?</h3>
                            <p>Existen al menos cuatro tipos de funciones básicas en Python:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Funciones integradas:** Son parte esencial de Python, como `print()`, `len()`, o `int()`. Puedes ver una lista completa en la documentación oficial.</li>
                                <li>**Funciones en módulos pre-instalados:** Funciones disponibles después de importar un módulo (ej. `math.sqrt()` después de `import math`).</li>
                                <li>**Funciones definidas por el usuario:** Las que escribimos los programadores para nuestro código.</li>
                            </ul>

                            <hr />

                            <h3>Tu primera función (Sintaxis)</h3>
                            <p>La definición más simple de una función sigue esta sintaxis:</p>
                            <Code>
                                {`def function_name():
    # cuerpo de la función
    # instrucciones anidadas`}
                            </Code>
                            <ul className="list-disc list-inside ml-4">
                                <li>Siempre comienza con la **palabra reservada \`def\`** (de **def**inir).</li>
                                <li>Después de \`def\` va el **nombre de la función** (las mismas reglas de nombres que para las variables).</li>
                                <li>Le sigue un par de **paréntesis \`()\`** (para argumentos, si los hay).</li>
                                <li>La línea debe terminar con **dos puntos \`:\`**.</li>
                                <li>El **cuerpo de la función** contiene las instrucciones, y comienza inmediatamente después de \`def\` con una **instrucción anidada** (indentada). La función termina donde el anidamiento termina.</li>
                            </ul>
                            
                            <h4>Ejemplo de definición y uso:</h4>
                            <Code>
                                {`def message(): # Definición
    print("¡Hola desde la función!")

message() # Invocación 1
message() # Invocación 2`}
                            </Code>

                            <hr />

                            <h3>Funcionamiento y Consejos Clave</h3>
                            <p>El proceso de ejecución de una función es el siguiente:</p>
                            <ol className="list-decimal list-inside ml-4">
                                <li>Cuando se **invoca** una función, Python recuerda el lugar donde ocurre y **salta** hacia dentro de la función invocada.</li>
                                <li>El cuerpo de la función es entonces **ejecutado**.</li>
                                <li>Al llegar al final de la función, Python **regresa** al lugar inmediato después de donde ocurrió la invocación.</li>
                            </ol>
                            
                            <h4>Consideraciones Importantes:</h4>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Orden de Definición:** **No se debe invocar una función antes de que se haya definido**. Python lee el código de arriba hacia abajo. La función debe estar definida "antes de ser invocada".</li>
                                <li>**Nombres Únicos:** Una función y una variable **no pueden compartir el mismo nombre**. Asignar un valor a un nombre de función existente (ej. \`message = 10\`) hará que Python olvide la función, y esta ya no estará disponible.</li>
                            </ul>

                            <hr />
                            
                            <h3>Funciones con Argumentos</h3>
                            <p>
                                La sintaxis general de una función permite parámetros opcionales. Puedes definir funciones sin argumentos o con ellos:
                            </p>
                            <Code>
                                {`# Función sin argumentos (ya vista)
def your_function():
    # cuerpo

# Función con un argumento (parámetro)
def saludo(nombre):
    print(f"Hola, {nombre}")

saludo("Ana") # Invocación: El valor "Ana" es el argumento.`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '4.2',
                item: 'Parámetros en Funciones',
                content: {
                    title: '4.2 – Parámetros en Funciones',
                    body: (
                        <DivContent>
                            <h3>Parámetros vs. Argumentos</h3>
                            <p>La comunicación entre el código que llama a una función y la función misma se realiza mediante **parámetros** y **argumentos**.</p>
                            
                            <ul className="list-disc list-inside ml-4">
                                <li>**Parámetros:** Son **variables** definidas dentro de la función (entre los paréntesis de la palabra clave `def`). Solo existen dentro de la función.
                                    <Code>
                                        {`def function(parameter): # 'parameter' es el parámetro
    print(parameter) `}
                                    </Code>
                                </li>
                                <li>**Argumentos:** Son los **valores** que se pasan a la función cuando se invoca. Estos valores se asignan a los parámetros correspondientes.
                                    <Code>
                                        {`function("Hola") # "Hola" es el argumento `}
                                    </Code>
                                </li>
                            </ul>
                            <blockquote className="border-l-4 border-amber-300 pl-4 my-2">
                                **Recuerda:** Los **parámetros** viven dentro de la función (su entorno natural), y los **argumentos** existen fuera y les pasan los valores.
                            </blockquote>

                            <hr />

                            <h3>Paso de Parámetros Posicionales (Por Posición)</h3>
                            <p>
                                Es la técnica estándar donde la asignación de argumentos a parámetros se basa estrictamente en su **orden o posición**.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>El primer argumento va al primer parámetro, el segundo al segundo, y así sucesivamente.</li>
                                <li>Se debe **proveer el mismo número de argumentos** como haya parámetros definidos.</li>
                            </ul>
                            <Code>
                                {`def resta(a, b): # a y b son parámetros posicionales
    print(a - b)

resta(10, 5) # 10 se asigna a 'a', 5 se asigna a 'b'. Resultado: 5
resta(5, 10) # 5 se asigna a 'a', 10 se asigna a 'b'. Resultado: -5`}
                            </Code>

                            <hr />

                            <h3>Paso de Argumentos por Palabras Clave (Variables)</h3>
                            <p>
                                En esta técnica, el **significado del argumento** está definido por su **nombre de parámetro**, no por su posición.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Los valores se pasan usando la sintaxis: `nombre_parametro = valor`.</li>
                                <li>La **posición no es relevante**; el argumento conoce su destino por el nombre.</li>
                                <li>No se puede usar el nombre de un parámetro que no existe.</li>
                            </ul>
                            <Code>
                                {`def mezcla(color1, color2):
    print(f"Mezcla de {color1} y {color2}")

# Argumentos por palabra clave (la posición no importa)
mezcla(color2="Amarillo", color1="Azul") # Resultado: Mezcla de Azul y Amarillo

# También se pueden asignar valores predefinidos (argumentos por palabra clave)
mezcla(color1="Rojo", color2="Verde") # Resultado: Mezcla de Rojo y Verde`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '4.3',
                item: 'Retornando el Resultado de una Función',
                content: {
                    title: '4.3 – Retornando el Resultado de una Función',
                    body: (
                        <DivContent>
                            <h3>La Instrucción `return`</h3>
                            <p>
                                Las funciones pueden **devolver un valor** como resultado. Para lograr esto, se utiliza la **palabra clave reservada** `return`.
                            </p>
                            
                            <h4>1. `return` sin una expresión (Terminación Inmediata)</h4>
                            <p>
                                Si `return` se usa sin un valor, provoca la **terminación inmediata de la ejecución de la función**, y el flujo de control regresa al punto de invocación.
                            </p>
                            <Code>
                                {`def cuenta_regresiva(desear_feliz_año):
    for i in range(3, 0, -1):
        print("Tres..." if i == 3 else "Dos..." if i == 2 else "Uno...")
    
    if not desear_feliz_año:
        return # Terminación inmediata
        
    print("¡Feliz año nuevo!")`}
                            </Code>

                            <h4>2. `return` con una expresión (Devolver un Valor)</h4>
                            <p>
                                Esta variante evalúa la expresión y **devuelve su valor** como el resultado de la función, además de causar la terminación inmediata.
                            </p>
                            <Code>
                                {`def suma(a, b):
    resultado = a + b
    return resultado # Evalúa y devuelve el valor de 'resultado'`}
                            </Code>

                            <hr />

                            <h3>El valor `None`</h3>
                            <p>
                                **`None`** es una **palabra clave reservada** que representa la **ausencia de un valor** razonable.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Uso Seguro:** Asignar un estado a una variable o diagnosticar si una variable tiene un valor (`if variable is None`).</li>
                                <li>**Retorno Implícito:** Si una función **no devuelve explícitamente un valor** con `return`, se asume que devuelve implícitamente **`None`**.</li>
                            </ul>
                            <Code>
                                {`def funcion_vacia():
    pass # No devuelve nada

resultado = funcion_vacia() 
print(resultado) # Output: None`}
                            </Code>

                            <hr />

                            <h3>Listas como Argumentos y Resultados</h3>
                            <p>Cualquier entidad reconocible por Python puede ser un argumento o un resultado de función.</p>

                            <h4>Lista como Argumento</h4>
                            <Code>
                                {`def suma_elementos(lista):
    suma = 0
    for elemento in lista:
        suma += elemento
    return suma`}
                            </Code>

                            <h4>Lista como Resultado</h4>
                            <Code>
                                {`def invertir_rango(n):
    lista_invertida = []
    for i in range(n - 1, -1, -1):
        lista_invertida.append(i)
    return lista_invertida

nueva_lista = invertir_rango(5)
print(nueva_lista) # Output: [4, 3, 2, 1, 0]`}
                            </Code>

                            <hr />

                            <h3>Ejercicio: Números Primos</h3>
                            <p>Un número natural es **primo** si es mayor que 1 y no tiene divisores más que 1 y sí mismo.</p>
                            <Code>
                                {`def is_prime(num):
    if num < 2:
        return False
    
    for i in range(2, num):
        if num % i == 0:
            return False 
            
    return True`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '4.4',
                item: 'Alcances (Scopes) en Python',
                content: {
                    title: '4.4 – Alcances (Scopes) en Python',
                    body: (
                        <DivContent>
                            <h3>El Alcance de un Nombre (Scope)</h3>
                            <p>
                                El **alcance** de un nombre (variable) es la parte del código donde ese nombre es **válido** y reconocido.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>El alcance de un **parámetro** es la función misma.</li>
                                <li>Una variable definida **fuera** de una función (global) se puede **leer** dentro de la función.</li>
                                <li>**Asignar** un valor a una variable global dentro de una función crea una **nueva variable local** con el mismo nombre.</li>
                            </ul>

                            <hr />

                            <h3>La Palabra Clave `global`</h3>
                            <p>
                                Para **modificar** una variable global dentro de una función, se utiliza la palabra clave reservada **`global`**.
                            </p>
                            <Code>
                                {`variable_global = 10 

def mi_funcion_global():
    global variable_global # Declara que usaremos la variable global
    variable_global = 5 # Modifica la variable global
    print(f"Dentro: {variable_global}") 

mi_funcion_global()
print(f"Fuera: {variable_global}") # Output: 5`}
                            </Code>

                            <hr />

                            <h3>Interacción con Parámetros</h3>
                            <p>La interacción depende de la **mutabilidad** del argumento:</p>

                            <h4>1. Argumentos Escalares (Inmutables: int, str, tuple)</h4>
                            <ul className="list-disc list-inside ml-4">
                                <li>Se recibe el **valor** del argumento.</li>
                                <li>Cambiar el valor del parámetro dentro de la función **no afecta al argumento original**.</li>
                            </ul>
                            
                            <h4>2. Argumentos de Colección (Mutables: list, dict)</h4>
                            <ul className="list-disc list-inside ml-4">
                                <li>Se recibe una **referencia** a la lista original.</li>
                                <li>Si se **modifica el contenido** de la lista (ej. `.append()`), la **lista original** se ve afectada.</li>
                                <li>Si se **reasigna el parámetro** (ej. `my_list = [0, 1]`), solo se afecta el parámetro local, no el argumento original.</li>
                            </ul>
                            <Code>
                                {`def cambiar_contenido(my_list):
    my_list.append(3) # Modifica la lista original

lista_original = [2]
cambiar_contenido(lista_original)
print(lista_original) # Output: [2, 3]`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '4.5',
                item: 'Ejercicios de Creación de Funciones',
                content: {
                    title: '4.5 – Ejercicios de Creación de Funciones',
                    body: (
                        <DivContent>
                            <h3>Factoriales</h3>
                            <p>El factorial de $n$ ($n!$) es el **producto** de todos los números naturales $\leq n$.</p>
                            <Code>
                                {`def factorial_function(n):
    if n < 0:
        return None 
    if n == 0 or n == 1:
        return 1
    
    producto = 1
    for i in range(2, n + 1):
        producto *= i
        
    return producto`}
                            </Code>

                            <hr />

                            <h3>Números Fibonacci</h3>
                            <p>Serie: $1, 1, 2, 3, 5, 8, 13, \dots$ Donde $Fib_{'i'} = Fib_{'i-1'} + Fib_{'i-2'}$ (para $i {'>'} 2$).</p>
                            <Code>
                                {`def fib(n):
    if n < 1:
        return None
    if n < 3: 
        return 1

    elem_1 = 1
    elem_2 = 1
    
    for i in range(3, n + 1):
        siguiente_elem = elem_1 + elem_2 
        elem_1 = elem_2 
        elem_2 = siguiente_elem 
        
    return elem_2`}
                            </Code>
                        </DivContent>
                    )
                }
            },
            {
                id: '4.6',
                item: 'Tuplas y Diccionarios',
                content: {
                    title: '4.6  Tuplas y Diccionarios',
                    body: (
                        <DivContent>
                            <h3>Conceptos Clave: Secuencia y Mutabilidad</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Secuencia:** Tipo de dato que puede ser escaneado por el **bucle `for`** (Listas, Tuplas).</li>
                                <li>**Mutabilidad:** Capacidad de cambiar su contenido. **Mutables** (Listas, Diccionarios) vs. **Inmutables** (Tuplas, Cadenas).</li>
                            </ul>
                            
                            <hr />

                            <h2>Tuplas (Inmutables)</h2>
                            <p>
                                Colecciones ordenadas e **inmutables**. Se definen con **paréntesis `()`** o solo comas.
                            </p>
                            <Code>
                                {`mi_tupla = (1, 3.14, "hola") 
single = (5,) # Tupla de un solo elemento requiere coma final`}
                            </Code>
                            <ul className="list-disc list-inside ml-4">
                                <li>**Operaciones:** Se pueden usar `len()`, `+`, `*`, `in`.</li>
                                <li>**Inmutabilidad:** No se puede modificar su contenido.</li>
                                <li>**Desempaquetado:** Útil para asignar valores: `a, b = b, a`.</li>
                            </ul>
                            
                            <hr />
                            
                            <h2>Diccionarios (Mutables)</h2>
                            <p>
                                Almacenan pares de **clave:valor**. Son **mutables** y se definen con **llaves `{}`**.
                            </p>
                            <Code>
                                {`diccionario = {
    "gato": "chat", 
    "perro": "chien"
}
print(diccionario["gato"]) # Acceso por clave: chat`}
                            </Code>
                            <h4>Reglas</h4>
                            <ul className="list-disc list-inside ml-4">
                                <li>Claves deben ser **únicas** y de tipo **inmutable** (no listas).</li>
                                <li>**Modificar/Agregar:** Se hace por asignación: `diccionario["clave"] = valor`.</li>
                                <li>**Eliminar:** Se usa `del diccionario["clave"]` o `diccionario.popitem()`.</li>
                                <li>**Iteración:** Se usa `dic.keys()`, `dic.values()`, o `dic.items()` (pares de tuplas).</li>
                            </ul>
                            
                            <h4>Métodos Clave</h4>
                            <ul className="list-disc list-inside ml-4">
                                <li>`keys()`: Retorna lista de claves.</li>
                                <li>`items()`: Retorna lista de tuplas (clave, valor).</li>
                                <li>`update()`: Inserta otro diccionario o pares clave-valor.</li>
                                <li>`copy()`: Crea una copia.</li>
                            </ul>
                        </DivContent>
                    )
                }
            },
            {
                id: '4.7',
                item: 'Excepciones',
                content: {
                    title: '4.7 – Excepciones (Manejo de Errores)',
                    body: (
                        <DivContent>
                            <h3>La Rama `try-except`</h3>
                            <p>
                                Permite manejar errores (**excepciones**) sin que el programa termine.
                            </p>
                            <Code>
                                {`try:
    # Código que podría generar una excepción
    num = int(input("Número: "))
    print(10 / num)
except ValueError:
    # Manejo específico para una entrada no válida
    print("Entrada no válida.")
except ZeroDivisionError:
    # Manejo específico para la división por cero
    print("División por cero.")
except:
    # Excepción por defecto (debe ser la última)
    print("Error inesperado.")`}
                            </Code>
                            
                            <h4>Mecanismo</h4>
                            <ul className="list-disc list-inside ml-4">
                                <li>**`try`:** La ejecución se detiene si ocurre un error y salta al `except` apropiado.</li>
                                <li>**`except`:** Solo se activa si una excepción ocurre en el `try`.</li>
                            </ul>

                            <hr />

                            <h3>Excepciones Comunes</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>**`ZeroDivisionError`:** División por cero.</li>
                                <li>**`ValueError`:** Valor de tipo adecuado, pero inaceptable (ej. `int("abc")`).</li>
                                <li>**`TypeError`:** Operación aplicada a un tipo de dato incorrecto (ej. índice flotante en lista).</li>
                                <li>**`AttributeError`:** Intento de usar un método o atributo que no existe.</li>
                                <li>**`SyntaxError`:** Violación de la gramática de Python.</li>
                            </ul>
                        </DivContent>
                    )
                }
            },
        ]
    },
];