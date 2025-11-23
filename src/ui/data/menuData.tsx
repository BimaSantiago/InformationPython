import Code from "../components/Code";
import DivContent from "../components/DivContent";
import Important from "../components/Important";
import List from "../components/List";
import Span from "../components/Span";
import TitleContent from "../components/TitleContent";
import type { DropdownProps } from "../types/types";

export const DROPDOWNS: DropdownProps[] = [
    {
        id: '1',
        icon: ['far', 'house'],
        title: 'Introducción',
        items: [
            {
                id: '1.1_introduccion',
                item: 'Introducción a la Programación',
                content: {
                    title: '¿Qué es un programa y cómo funciona?',
                    body: (
                        <>
                        <DivContent id="1.1.1">
                            <p>
                                Un programa es lo que hace que una computadora sea útil. Por sí solas, 
                                las computadoras solo pueden ejecutar operaciones extremadamente simples, como sumar o dividir, 
                                pero lo hacen a velocidades muy altas y pueden repetirlas muchísimas veces. Para realizar una 
                                tarea compleja, como calcular una velocidad promedio, se necesita un programa que le dé a la 
                                computadora una serie de instrucciones simples:
                            </p>
                            <List ml="ml-4">
                                <li>Aceptar un número para la distancia.</li>
                                <li>Aceptar un número para el tiempo de viaje.</li>
                                <li>Dividir el primer valor entre el segundo y guardar el resultado.</li>
                                <li>Mostrar el resultado en un formato legible.</li>
                            </List>
                            <p>Estas acciones sencillas forman un programa. La clave para que esto funcione es el lenguaje.</p>    
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '1.2_lenguajes-pramacion',
                item: 'Lenguajes de Programación',
                content: {
                    title: 'Lenguajes de Programación',
                    body: (
                        <>
                        <DivContent id="1.2.1">
                            <TitleContent>
                                Lenguajes naturales vs. Lenguajes de programación
                            </TitleContent>
                            <p>
                                Las computadoras tienen su propio lenguaje, llamado <Span>
                                lenguaje máquina</Span>, que es muy rudimentario. Una computadora funciona como un perro bien adiestrado que 
                                solo responde a un conjunto de comandos conocidos. Este conjunto de comandos se 
                                llama <Span>lista de instrucciones (IL)</Span>. 
                                Los lenguajes máquina son desarrollados por humanos. En contraste, los idiomas que
                                hablan las personas, como el español, se llaman <Span>lenguajes naturales</Span> y
                                evolucionan por sí mismos con el tiempo.
                            </p>
                        </DivContent>
                        <DivContent id="1.2.2">
                            <TitleContent>
                                Elementos que componen un lenguaje
                            </TitleContent>
                            <p>
                                Cualquier lenguaje, ya sea de máquina o natural, consta de los siguientes elementos:
                            </p>
                            <List>
                                <li><Span>Alfabeto: </Span>Un conjunto de símbolos que se usan para formar palabras (ej. el alfabeto latino).</li>
                                <li><Span>Léxico: </Span>Un diccionario con el conjunto de palabras que el lenguaje ofrece (ej. la palabra "computadora" está en el léxico del español).</li>
                                <li><Span>Sintaxis: </Span>Un conjunto de reglas que determinan si una cadena de palabras forma una oración válida.</li>
                                <li><Span>Semántica: </Span>Un conjunto de reglas que definen si una frase tiene sentido (ej. "Me comí una dona" tiene sentido semántico, pero "Una dona me comió", no).</li>
                            </List>
                        </DivContent>
                        <DivContent id="1.2.3">
                            <TitleContent>
                                Lenguaje máquina vs. Lenguaje de alto nivel
                            </TitleContent>
                            <p>
                                El lenguaje máquina es la lengua materna de una computadora, pero está muy lejos del lenguaje humano. 
                                Para crear un puente entre ambos, se necesitan los lenguajes de programación de alto nivel. Estos usan 
                                símbolos y palabras que los humanos pueden leer y permiten expresar comandos complejos. Un programa escrito 
                                en un lenguaje de alto nivel se llama código fuente, y se guarda en un archivo fuente.
                            </p>
                        </DivContent>
                        </>
                    )
                } 
            },
            {
                id: '1.3_traduccion_codigo',
                item: 'Compilación e Interpretación',
                content: {
                    title: 'Compilación e Interpretación',
                    body: (
                        <>
                        <DivContent>
                            <p>
                                Para que una computadora ejecute un programa, este debe ser traducido a lenguaje máquina, un proceso que la 
                                propia computadora puede realizar. Hay dos formas principales de hacerlo:
                            </p>
                        </DivContent>
                        <DivContent id="1.3.1">
                            <TitleContent>
                                Compilación
                            </TitleContent>
                            <p>
                                Es un programa traductor que analiza todo el código fuente de una vez y crea un archivo ejecutable 
                                en lenguaje máquina.
                            </p>
                            <Span>Ventajas:</Span>
                            <List>
                                <li>La ejecución del código es más rápida.</li>
                                <li>El usuario final no necesita el compilador.</li>
                                <li>El código máquina es difícil de leer, lo que protege la propiedad intelectual.</li>
                            </List>
                            <Span>Dsventajas:</Span>
                            <List>
                                <li>El proceso de compilación puede ser lento.</li>
                                <li>Se necesita un compilador para cada plataforma de hardware.</li>
                            </List>                            
                        </DivContent>
                        <DivContent id="1.3.2">
                            <TitleContent>
                                Interpretación
                            </TitleContent>
                            <p>
                                Es un programa que lee y ejecuta el código fuente línea por línea.
                            </p>
                            <Span>¿Qué hace un intérprete?</Span>
                            <p>
                                El código fuente de un programa se guarda en archivos de texto plano. Un intérprete lee este archivo de 
                                arriba hacia abajo y de izquierda a derecha. Primero, verifica que cada línea sea correcta. 
                                Si encuentra un error, detiene su trabajo y muestra un mensaje de error, indicando dónde está el problema. 
                                Si la línea es correcta, el intérprete la ejecuta. <br />
                                Debido a esto, es posible que una parte del código se ejecute con éxito antes de que se encuentre un error 
                                más adelante.
                            </p>
                        </DivContent>
                        <DivContent>
                            <p>Ninguno de los dos modelos es superior; ambos tienen sus pros y sus contras.</p>
                            <p>Python es un lenguaje interpretado, por lo que hereda estas características. Afortunadamente, el intérprete de Python es gratuito</p>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '1.4_python',
                item: 'Introducción y Fundamentos de Python',
                content: {
                    title: 'Python: Introducción y Fundamentos',
                    body: (
                        <>
                        <DivContent id="1.4.1">
                            <TitleContent>
                                Python, una herramientas, no un reptil
                            </TitleContent>
                            <p>
                                Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. 
                                Su nombre no proviene de la serpiente, sino de la serie de comedia de la BBC llamada 
                                Monty Python's Flying Circus. El creador del lenguaje lo nombró en honor al programa.
                            </p>
                            <List>
                                <li>Un lenguaje fácil e intuitivo, pero tan potente como sus competidores.</li>
                                <li>Ser de código abierto, para que cualquiera pudiera contribuir a su desarrollo.</li>
                                <li>Tener un código tan comprensible como el inglés simple.</li>
                                <li>Ser adecuado para tareas cotidianas, permitiendo tiempos de desarrollo cortos.</li>
                            </List>
                        </DivContent>
                        <DivContent id="1.4.2">
                            <TitleContent>
                                Origen y creador
                            </TitleContent>
                            <p>
                                A diferencia de otros grandes lenguajes de programación desarrollados por corporaciones, 
                                Python fue creado por una sola persona: Guido van Rossum, nacido en los Países Bajos. 
                                Aunque miles de personas han contribuido a su desarrollo, la idea original fue suya.
                            </p>
                        </DivContent>
                        <DivContent id="1.4.3">
                            <TitleContent>
                                Objetivos de diseño (1999)
                            </TitleContent>
                            <List>
                                <li>Lenguaje fácil e intuitivo, pero no tan potente como sus competidores.</li>
                                <li>Ser de código abierto para que cualquiera pudiera contribuir a su desarrollo.</li>
                                <li>Tener un código comprensible como el inglés simple.</li>
                                <li>Ser adecuado para tareas cotidianas, permitiendo tiempos de desarrollo cortos.</li>
                            </List>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '1.5_caracteristicas_python',
                item: 'Características de Python',
                content: {
                    title: '¿Qué hace que Python sea tan especial?',
                    body: (
                        <>
                        <DivContent id="1.5.1">
                            <TitleContent>
                                ¿Qué hace que Python sea tan especial?
                            </TitleContent>
                            <p>
                                Python es extremadamente popular por varias razones:
                            </p>
                            <Span>Ventajas</Span>
                            <List>
                                <li>Es fácil de aprender, lo que permite empezar a programar más rápido.</li>
                                <li>Es fácil de enseñar, permitiendo a los profesores centrarse en conceptos de programación en lugar 
                                    de en la complejidad del lenguaje.</li>
                                <li>Es fácil de utilizar para escribir nuevo software, a menudo de forma más rápida.</li>
                                <li>Es fácil de entender, lo que simplifica la lectura de código escrito por otros.</li>
                                <li>Es fácil de obtener, ya que es gratuito, de código abierto y funciona en múltiples plataformas.</li>
                            </List> 
                        </DivContent>
                        <DivContent id="1.5.2">
                            <TitleContent>
                                Limitaciones
                            </TitleContent>
                            <Span>Desventajas</Span>
                            <List>
                                <li>No es la mejor opción para programación de bajo nivel. Para crear controladores de hardware o 
                                    motores gráficos de alto rendimiento, no se usaría Python.</li>
                                <li>No es ideal para aplicaciones móviles. Aunque podría cambiar en el futuro, este campo aún no 
                                    ha sido conquistado por Python.</li>
                                <li>La ejecución puede ser más lenta que en lenguajes compilados</li>
                            </List>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '1.6_versiones',
                item: 'Versiones e Implementaciones',
                content: {
                    title: 'Versiones e Implementaciones',
                    body: (
                        <>
                        <DivContent id="1.6.1">
                            <TitleContent>
                                Versiones principales
                            </TitleContent>
                            <p>Existen dos versiones principales:</p>
                            <List> 
                                <li><Span>Python 2: </Span>Es una versión antigua cuyo desarrollo de nuevas características se ha detenido, aunque sigue recibiendo actualizaciones de seguridad y corrección de errores. Todavía se usa porque hay demasiadas aplicaciones existentes escritas en él.</li>
                                <li><Span>Python 3: </Span> Es la versión actual y la que está en evolución activa.</li>
                            </List>
                            <Important>
                                Ambas versiones no son compatibles entre sí. Un script de Python 2 no se ejecutará en un 
                                entorno de Python 3 y viceversa. Para cualquier proyecto nuevo, se debe usar Python 3, que 
                                es la versión utilizada en este curso.
                            </Important>
                        </DivContent>
                        <DivContent id="1.6.2">
                            <TitleContent>
                                Implementaciones de Python
                            </TitleContent>
                            <p>
                                Una "implementación" es un entorno que permite ejecutar programas escritos en Python.
                            </p>

                            <Span>CPython</Span>
                            <List>
                                <li>Es la implementación tradicional y de referencia, mantenida por la Python Software Foundation (PSF).</li>
                                <li>Está escrita en el lenguaje de programación "C", lo que permite que se pueda usar en casi cualquier plataforma.</li>
                                <li>Es la versión más influyente.</li>
                            </List>

                            <Span>Cython</Span>
                            <List>
                                <li>Es una herramienta que traduce código Python a código "C".</li>
                                <li>Su objetivo es solucionar la falta de eficiencia de Python en cálculos matemáticos complejos, 
                                    haciendo que el código se ejecute mucho más rápido.</li>
                            </List>

                            <Span>Jython</Span>
                            <List>
                                <li>Es una implementación de Python escrita en el lenguaje Java.</li>
                                <li>Es especialmente útil para integrar Python en sistemas desarrollados en Java.</li>
                            </List>

                            <Span>PyPy</Span>
                            <List>
                                <li>Es un entorno de Python escrito en RPython (una versión restringida de Python).</li>
                                <li>Es principalmente una herramienta para los desarrolladores de Python para probar nuevas características.</li>
                            </List>

                            <Span>MicroPython</Span>
                            <List>
                                <li>Es una implementación de código abierto de Python 3, optimizada para ejecutarse en microcontroladores 
                                    y hardware de bajo nivel.</li>
                            </List>

                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '1.7_instalacion',
                item: 'Instalación y Configuración  ',
                content: {
                    title: 'Instalación y Configuración',
                    body: (
                        <>
                        <DivContent id="1.7.1">
                            <TitleContent>
                                Descarga e instalacion
                            </TitleContent>
                            <p>
                                La forma de obtener Python varía según el sistema operativo:
                            </p>
                            <Span>Linux</Span>
                            <List>
                                <li>Es muy probable que ya tengas Python 3 instalado.</li>
                                <li>Para comprobarlo, abre una terminal y escribe <Span text="text-amber-400">python3</Span>.</li>
                                <li>Si no lo tienes, puedes instalarlo con el gestor de paquetes de tu distribución.</li>
                            </List>
                            <Span>Windows y macOS</Span>
                            <List>
                                <li>Se puede descargar una copia desde el sitio web oficial de <a href="https://www.python.org/downloads/" 
                                className="text-blue-500 underline">Python</a>.</li>
                            </List>                            
                        </DivContent>
                        <DivContent id="1.7.2">
                            <TitleContent>
                                Configuración inicial
                            </TitleContent>
                            <Span>Windows</Span>
                            <List>
                                <li>Ejecuta el archivo <Span text="text-amber-400">.exe</Span> descargado.</li>
                                <li>Durante la instalación, marca la casilla <Span text="text-amber-400">Agregar Python 3.x a PATH</Span>.</li>
                            </List>
                            <Span>macOS</Span>
                            <List>
                                <li>Descarga e instala el archivo <Span text="text-amber-400">.kg</Span> correspondiente a Python 3.</li>
                                <li>Aunque puede haber una versión de Python 2 preinstalada, es mejor usar Python 3</li>
                            </List>                            
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '1.8_primeros_pasos',
                item: 'Primeros Pasos en Python',
                content: {
                    title: 'Primeros Pasos en Python',
                    body: (
                        <>
                        <DivContent id="1.8.1">
                            <TitleContent>
                                Herramientas básicas
                            </TitleContent>
                            <p>
                                Para empezar a programar, se necesitan herramientas como un editor de código, una consola para 
                                ejecutarlo y un depurador. La instalación estándar de Python incluye <Span>IDLE (Integrated Development 
                                and Learning Environment)</Span>, que contiene estas herramientas básicas.
                            </p>
                        </DivContent>
                        <DivContent id="1.8.2">
                            <TitleContent>
                                Tu primer programa
                            </TitleContent>
                            <Span>Pasos para crear tu primer programa</Span>
                            <List>
                                <li>Abre IDLE <span className="font-cascadia">{"->"}</span> Menú <Span text="text-amber-400 font-bold">
                                    File</Span> <span className="font-cascadia">{"->"}</span> <Span text="text-amber-400 font-bold">
                                    New File</Span></li>
                                <li>Guarda el archivo. Los archivos de Python usan la extensión <Span text="text-amber-400 font-bold">
                                    .py</Span></li>
                                <li>Escribe el siguiente código:</li>
                                <Code>
                                    print("Hisssssss...")
                                </Code>
                                <li>Guarda y ejecuta: Menú <Span text="text-amber-400 font-bold">Run
                                    </Span> <span className="font-cascadia">{"->"}</span> <Span text="text-amber-400 font-bold">
                                    Run Module</Span> (o presiona <Span text="text-amber-400 font-bold">F5</Span>).</li>
                                <li>Verás el resultado <Span extra="font-bold">
                                    Hisssssss...</Span> en la consola interactiva.</li>
                            </List>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '1.9_errores',
                item: 'Errores Comunes y Depuración',
                content: {
                    title: 'Errores Comunes y Depuración',
                    body: (
                        <>
                        <DivContent id="1.9.1">
                            <TitleContent>
                                Errores frecuentes
                            </TitleContent>
                            <Span>Error de sintaxis:</Span>
                            <List>
                                <li>Si borras un paréntesis de cierre, el código se vuelve erróneo.</li>
                                <li>Al intentar ejecutarlo, IDLE mostrará una ventana de error indicando un <Span text="text-red-400">
                                        EOF inesperado</Span> (fin de archivo), porque la sintaxis está incompleta.</li>
                            </List>
                            <Span>Error de nombre:</Span>
                            <List>
                                <li>Si escribes mal una palabra clave, como <Span text="text-amber-400">prin</Span> en lugar 
                                    de <Span text="text-amber-400">print</Span>, Python no podrá reconocer la instrucción. 
                                    La naturaleza de este error es diferente y se detecta en otra etapa de la interpretación.</li>
                            </List>
                        </DivContent>
                        <DivContent id="1.9.2">
                            <TitleContent>
                                Cómo leer los mensajes de error
                            </TitleContent>
                            <p>La ventana de la consola te mostrará la ruta que siguió el código.</p>
                            <List>
                                <li>El traceback, que muestra la ruta que siguió el código.</li>
                                <li>La ubicación del error, incluyendo el nombre del archivo y el número de línea.</li>
                                <li>El contenido de la línea donde ocurrió el error.</li>
                                <li>El nombre del error y una breve explicación (en inglés).</li>
                            </List>
                        </DivContent>
                        </>
                    )
                }
            }
        ]
    },
    {
        id: '2',
        icon: ['far', 'user-circle'],
        title: 'Python Básico',
        items: [
            {
                id: '2.1_primer_programa',
                item: 'Nuestro primer programa y la función print()',
                content: {
                    title: 'Nuestro primer programa y la función print()',
                    body: (
                        <>
                        <DivContent id="2.1.1">            
                            <TitleContent>
                                Configuración de VS Code
                            </TitleContent>
                            <p>
                                Es hora de comenzar a escribir código real y totalmente funcional en Python. Obviamente, este primer código será muy sencillo.
                            </p>
                            <p>
                                Para comenzar, primero abriremos nuestro IDE, en este caso Visual Studio Code y haremos lo siguiente:
                            </p>
                            <List>
                                <li>Abrir VS Code y presionar <Span text="text-amber-400 font-bold">Ctrl + Shift + P</Span>.</li>
                                <li>Escribimos <Span text="text-amber-400 font-bold">Python: Select Interpreter</Span> y seleccionamos nuestra 
                                    versión de Python instalada.</li>
                                <li>Creamos un nuevo archivo con <Span text="text-amber-400 font-bold">Ctrl + N</Span></li>
                                <li>Y guardamos el archivo recién creado con extensión <Span text="text-amber-400 font-bold">.py
                                    </Span> (ej. <Span text="text-amber-400 font-bold">hello-world.py</Span> )</li>
                            </List>
                            <p>
                                Todo esto nos sirvió para configurar y tener listo nuestro archivo Python, listo para empezar a crear código en él.
                            </p>
                        </DivContent>
                        <DivContent id="2.1.2">
                            <TitleContent>
                                Función print()
                            </TitleContent>
                            <p>
                                La función <Span>print()</Span> será nuestra primera herramienta que aprenderemos en Python.
                            </p>
                            <p>
                                <Span>print()</Span> es el nombre de una función integrada de Python. Las funciones, en este contexto, 
                                es una parte separa del código de computadora capaz de:
                            </p>
                            <List>
                                <li><Span>Causar algún efecto:</Span> Como enviar texto a la terminal, crear un archivo, 
                                    dibujar una imagen, etc.</li>
                                <li><Span>Evaluar un valor:</Span> Calcular la raíz cuadrada de un valor, 
                                    la longitud de un texto, etc., que posteriormente se nos devolverá como el resultado 
                                    de la función.</li>
                            </List>
                            <Code>print("Hello, World!")</Code>
                        </DivContent>
                        <DivContent id="2.1.3">
                            <TitleContent>
                                ¿De dónde provienen las funciones?
                            </TitleContent>
                            <p>
                                Las funciones pueden venir de distintos contextos:
                            </p>
                            <List>
                                <li><Span>De python mismo.</Span> Se les llama funciones integradas.</li>
                                <li><Span>De módulos.</Span> Pueden provenir de uno o varios de los módulos de Python. Algunos ya vienen integrados y otros requieren instalación.</li>
                                <li><Span>De tu código.</Span> Podemos escribir nuestras propias funciones, tantas como deseemos.</li>
                            </List>
                            <p>
                                Si vas a ocupar el nombre de una función ya existente, no podrás modificar su nombre, convirtiéndose en una palabra reservada.
                            </p>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '2.1_litereales',
                item: 'Literales de Python (Tipos de datos básicos)',
                content: {
                    title: 'Literales de Python (Tipos de datos básicos)',
                    body: (
                        <>
                        <DivContent>
                            <p>
                                En Python, los <Span>tipos de datos básicos</Span>, o literales, son las categorías en las que se 
                                clasifican los valores que utilizamos en nuestros programas. Es fundamental saber diferenciarlos pues 
                                nos ayuda a trabajar con variables y realizar distintas operaciones en Python.
                            </p>
                        </DivContent>
                        <DivContent id="2.2.1">
                            <TitleContent>
                                Enteros (int - «integer»)
                            </TitleContent>
                            <p>
                                Los números enteros son aquellos que no tienen parte decimal. En Python, los representamos 
                                escribiendo únicamente el número, sin comillas ni puntos decimales de por medio.
                            </p>
                            <Span>Ejemplo:</Span>
                            <Code>
{`edad = 23 
cantidad = 123`}
                            </Code>
                        </DivContent>
                        <DivContent id="2.2.2">
                            <TitleContent>
                                Flotantes (float)
                            </TitleContent>
                            <p>
                                Los números flotantes, conocidos como números de punto flotante, son aquellos que tienen una 
                                parte decimal. Se representan utilizando un punto para separar la parte entera de la decimal.
                            </p>
                            <Span>Ejemplo:</Span>
                            <Code>
{`precio = 49.99
altura = 1.78`}
                            </Code>
                        </DivContent>
                        <DivContent id="2.2.3">
                            <TitleContent>
                                String (Cadenas de texto) 
                            </TitleContent>
                            <p>
                                Las cadenas de texto, o simplemente cadenas, son secuencias de caracteres 
                                (números, letras, símbolos...) entre <Span>comillas simples ('...')</Span> o <Span>
                                dobles ("...")</Span>. Se utilizan para representar texto en Python.
                            </p>
                            <Span>Ejemplo:</Span>
                            <Code>
{`nombre = 'Juan'
mensaje = 'Este es un mensaje'
cita = "Él dijo: 'Esto es genial'"
poema = """
    Este es un verso.
    Otro verso más.
"""`}
                            </Code>
                            <p>
                                Para incluir caracteres especiales como comillas dentro del string, usamos la <Span>diagonal 
                                invertida (\)</Span> de la siguiente manera: <Span text="text-amber-400">\'</Span> o <Span 
                                text="text-amber-400">\"</Span>. También puedes usar la notación de <Span>triple 
                                comilla ('''...''' o """...""")</Span> para crear cadenas de varias líneas.
                            </p>
                        </DivContent>
                        <DivContent id="2.2.4">
                            <TitleContent>
                                Booleanos (True / False)
                            </TitleContent>
                            <p>
                                Los valores booleanos representan los valores de verdad: <Span>True</Span> (verdadero) y <Span>
                                    False</Span> (falso). Se utilizan comúnmente en expresiones condicionales y operaciones lógicas. 
                                    Su nombre proviene de George Boole, autor de las Leyes del Pensamiento.
                            </p>
                            <Span>Ejemplo:</Span>
                            <Code>
{`status = True
tiene_descuento = False`}
                            </Code>
                            <Important>
                                <Span>Importante:</Span> Los valores booleanos en Python siempre comienzan con mayúscula.
                            </Important>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '2.3_operadoes',
                item: 'Operadores Básicos',
                content: {
                    title: 'Operadores Básicos',
                    body: (
                        <>
                        <DivContent>
                            <p>
                                Los operadores son símbolos especiales que nos permiten realizar operaciones en variables y valores. Cuando los datos y operadores se unen, forman juntos <Span>expresiones</Span>.
                            </p>
                        </DivContent>
                        <DivContent id="2.3.1">
                            <TitleContent>
                                Operadores Aritméticos
                            </TitleContent>
                            <p>
                                Se usan para realizar operaciones matemáticas básicas:
                            </p>
                            <List>
                                <li>Suma (<Span text="text-amber-500 font-bold">+</Span>): suma dos valores.</li>
                                <li>Resta (<Span text="text-amber-500 font-bold"> - </Span>): resta el segundo valor al primero.</li>
                                <li>Multiplicación (<Span text="text-amber-500 font-bold"> * </Span>): multiplica dos valores.</li>
                                <li>División (<Span text="text-amber-500 font-bold"> / </Span>): divide y devuelve un valor de tipo float.</li>
                                <li>División entera (<Span text="text-amber-500 font-bold"> // </Span>): divide y devuelve un valor tipo 
                                    int (redondeado al número entero inferior más cercano).</li>
                                <li>Módulo o Resto (<Span text="text-amber-500 font-bold"> % </Span>): devuelve el resto de la división 
                                    entre los valores.</li>
                                <li>Exponenciación (<Span text="text-amber-500 font-bold"> ** </Span>): eleva el primer número a la 
                                    potencia del segundo.</li>
                            </List>
                            <Span>Ejemplo:</Span>
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
                        </DivContent>
                        <DivContent id="2.3.2">
                            <TitleContent>
                                Operadores de Comparación
                            </TitleContent>
                            <p>
                                Sirven para comparar dos valores y nos devuelven un valor booleano (<Span>True</Span> o <Span>False</Span>):
                            </p>
                            <List>
                                <li>Igual a (<Span text="text-amber-500 font-bold"> {'=='} </Span>): devuelve <Span>True</Span> si 
                                    ambos valores son iguales.</li>
                                <li>Diferente a (<Span text="text-amber-500 font-bold"> {'!='} </Span>): devuelve <Span>True</Span> si 
                                    ambos valores son distintos.</li>
                                <li>Mayor que (<Span text="text-amber-500 font-bold"> {'>'} </Span>) / Menor 
                                    que (<Span text="text-amber-500 font-bold"> {'<'} </Span>)</li>
                                <li>Mayor o igual que (<Span text="text-amber-500 font-bold"> {'>='} </Span>)/ Menor o igual 
                                    que (<Span text="text-amber-500 font-bold"> {'<='} </Span>)</li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`a = 10
b = 7

print(a == b) # False
print(a != b) # True
print(a > b)  # True`}
                            </Code>
                        </DivContent>
                        <DivContent id="2.3.3">
                            <TitleContent>
                                Operadores Lógicos
                            </TitleContent>
                            <p>
                                Se utilizan para combinar expresiones condicionales y evaluar múltiples condiciones:
                            </p>
                            <List>
                                <li>AND (<Span text="text-amber-500 font-bold"> and </Span>): devuelve <Span>True</Span> si ambas 
                                    condiciones son verdaderas.</li>
                                <li>OR (<Span text="text-amber-500 font-bold"> or </Span>): devuelve <Span>True</Span> si al menos 
                                    una de las condiciones es verdadera.</li>
                                <li>NOT (<Span text="text-amber-500 font-bold"> not </Span>): invierte el valor de una condición.</li>
                            </List>
                            <Span>Ejemplo:</Span>
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
                        </>
                    )
                }
            },
            {
                id: '2.4_variables',
                item: 'Variables',
                content: {
                    title: 'Variables',
                    body: (
                        <>
                        <DivContent id="2.4.1">
                            <TitleContent>
                                ¿Qué es una variable?
                            </TitleContent>
                            <p>
                                Una variable es un espacio en la memoria de la computadora donde podemos almacenar 
                                información (<Span>números, texto o valores lógicos</Span>). Puedes pensar en ella como una 
                                caja con un nombre, donde guardas algo para usarlo después.
                            </p>
                            <p>
                                Para crear una variable, basta con escribir su nombre (esto se conoce como declaración). 
                                Si quieres guardarle un valor, utilizamos el operador de asignación (<Span 
                                text="text-amber-500 font-bold"> = </Span>) (esto se llama inicializar). 
                                El nombre va a la izquierda del signo, y el valor a la derecha.
                            </p>
                            <Span>Ejemplo:</Span>
                            <Code>
{`nombre = "Hermenegildo"
edad = 45
es_estudiante = True`}
                            </Code>
                            <p>
                                También podemos asignar el mismo valor a múltiples variables en una sola línea (asignación múltiple):
                            </p>
                            <Span>Ejemplo:</Span>
                            <Code>
{`a = b = c = 10`}
                            </Code>
                            <p>En este caso, a, b y c, tendrán el valor 10.</p>
                            </DivContent>
                            <DivContent id="2.4.2">
                                <TitleContent>
                                    Normas al nombrar variables
                                </TitleContent>
                                <p>
                                    Al nombrar variables en Python, es importante seguir algunas reglas para mantener un código 
                                    legible y evitar errores:
                                </p>
                                <List>
                                    <li>Solo pueden contener letras (a...z, A...Z), números (0...9) y guiones bajos (_).</li>
                                    <li>No pueden comenzar con un número ni contener espacios.</li>
                                    <li>Python es sensible a mayúsculas y minúsculas, por lo que nombre y Nombre son variables distintas.</li>
                                    <li>No se pueden utilizar palabras clave reservadas de Python para nombrar variables 
                                        (por ejemplo: if, else, import, etc.).</li>
                                    <li>Se recomienda utilizar nombres descriptivos para las variables.</li>
                                </List>    
                            </DivContent>
                            <DivContent id="2.4.3">
                                <TitleContent>
                                    Notaciones de estilo (PEP 8)
                                </TitleContent>
                                <p>
                                    La comunidad Python, a través de la guía de estilo PEP 8, recomienda seguir un estilo 
                                    uniforme, siendo el estándar:
                                </p>
                                <List>
                                    <li>
                                        <Span>snake_case (Estándar de Python):</Span> Todas las palabras van en minúsculas y se separan 
                                        con un guion bajo (_). Se recomienda para variables y funciones. 
                                        <Code>{`mi_nombre = '...'`}</Code>
                                    </li>
                                    <li>
                                        <Span>PascalCase (UpperCamelCase):</Span> Similar a camelCase, pero todas las palabras 
                                        comienzan con mayúsculas. En Python, se usa principalmente para nombrar clases. 
                                        <Code>{`class MiClase: pass`}</Code>
                                    </li>
                                    <li>
                                        <Span>CONSTANTES:</Span> Para variables cuyos valores se mantienen fijos durante todo el 
                                        código, se usa únicamente MAYÚSCULAS.
                                        <Code>{`PI = 3.141592`}</Code>
                                    </li>
                                </List>
                            </DivContent>
                        </>
                    )
                }
            },
            {
                id: '2.5_comentarios',
                item: 'Comentarios',
                content: {
                    title: 'Comentarios',
                    body: (
                        <>
                        <DivContent id="2.5.1">
                            <TitleContent>
                                La importancia del comentario
                            </TitleContent>
                            <p>
                                Los comentarios son líneas de texto dentro de tu código que el intérprete de Python ignora. 
                                Su propósito principal es documentar el código, explicar su lógica, o marcar temporalmente líneas 
                                para depuración.
                            </p>
                            <p>
                                Los comentarios son cruciales para la legibilidad del código, especialmente cuando trabajas en 
                                equipo o revisas un código antiguo. Nos permiten escribir los pasos de cómo se realizaron los cálculos 
                                de una forma sencilla y clara.
                            </p>
                        </DivContent>
                        <DivContent id="2.5.2">
                            <TitleContent>
                                Sintaxis del Comentario
                            </TitleContent>
                            <p>
                                En Python, un comentario comienza con el símbolo de almohadilla (<Span text="text-amber-400 font-bold"
                                > # </Span>). Todo lo que sigue a este símbolo en la misma línea es considerado un comentario.
                            </p>
                            <Span>Ejemplo:</Span>
                            <Code>
{`# Esto es un comentario de línea completa
nombre = "Juan"  # El comentario puede ir al final de una línea de código

a = 10
b = 5
suma = a + b  # Calculamos la suma de a y b
# print(suma) # Línea comentada temporalmente para pruebas`}
                            </Code>
                            <Important>
                                <p>
                                    <Span>Recuerda:</Span> Los comentarios pueden utilizarse para colocar información adicional, pero nunca deben contener información incorrecta o errónea.
                                </p>
                            </Important>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '2.6_interactividad',
                item: 'Interacción con el Usuario',
                content: {
                    title: 'Interacción con el Usuario',
                    body: (
                        <>
                        <DivContent id="2.6.2">
                            <TitleContent>
                                La función input()
                            </TitleContent>
                            <p>
                                La función integrada <Span>input()</Span> permite al programa interactuar con el usuario. Cuando se 
                                llama a esta función, el programa se detiene y espera a que el usuario escriba algo y presione Enter.
                            </p>
                            <Span>El resultado siempre es una cadena</Span>
                            <p>
                                Es fundamental entender que el resultado de la función input() es una cadena (str). Contiene todos los 
                                caracteres que el usuario introduce desde el teclado.
                            </p>
                            <Important>
                                Debido a que siempre devuelve una cadena, no se debe utilizar directamente como argumento para 
                                operaciones matemáticas. Intentar realizar una operación aritmética (como una exponenciación) 
                                con una cadena resultará en un error de tipo (TypeError).
                            </Important>
                        </DivContent>
                        <DivContent id="2.6.2">    
                            <TitleContent>
                                Conversión de Tipos (Type Casting)
                            </TitleContent>
                            <p>
                                Para poder usar los datos ingresados por el usuario en cálculos matemáticos, debemos convertirlos a 
                                un tipo numérico (entero o flotante). Python ofrece dos funciones para esto:
                            </p>
                            <List>
                                <li><Span>int()</Span>: Toma un argumento (ej. una cadena) e intenta convertirlo a un valor entero.</li>
                                <li><Span>float()</Span>: Toma un argumento e intenta convertirlo a un valor flotante (con decimales).</li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
                                {`años_string = input("¿Cuántos años tienes? ")

# Convertir la entrada a entero (int) para poder operar
años_int = int(años_string)

dias_vividos = años_int * 365.25

print("Has vivido aproximadamente", int(dias_vividos), "días.")`}
                            </Code>
                            <p>
                                Podemos anidar las llamadas a estas funciones para convertir la entrada de inmediato:
                            </p>
                            <Code>
{`# Una forma más directa:
numero = float(input("Ingresa un número flotante: "))
print(numero)`}
                            </Code>
                        </DivContent>
                        </>
                    )
                }
            },
            
        ]
    },
    
      {
        id: '3',
        icon: ['fas', 'code-compare'],
        title: 'Control de Flujo',
        items: [
            {
                id: '3.1_flujo_python',
                item: 'Toma de Decisiones en Python',
                content: {
                    title: 'Introducción a las sentencias condicionales',
                    body: (
                        <>
                        <DivContent>
                            <p>
                                Las sentencias condicionales permiten que tu programa tome decisiones basándose en si una condición 
                                es verdadera o falsa.
                            </p>
                        </DivContent>
                        <DivContent id="3.1.1">
                            <TitleContent>
                                if, if-else, if-elif-else
                            </TitleContent>
                            <List>
                                <li>
                                    <Span>if:</Span> Ejecuta un bloque de código si la condición es verdadera.
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`edad = 12
if edad >= 10:
    print("Eres mayor de 10 años")`}
                            </Code>
                            <List>
                                <li>
                                    <Span>if-else:</Span> Ofrece un camino alternativo. Si la condición del if es falsa, 
                                    se ejecuta el bloque else.
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`edad = 8
if edad >= 10:
    print("Puedes entrar al juego")
else:
    print("Eres muy joven aún")`}
                            </Code>
                            <List>
                                <li>
                                    <Span>if-elif-else:</Span> Permite revisar múltiples condiciones. Si la condición del if es 
                                    falsa, se revisan las condiciones de elif en orden. Si ninguna es verdadera, se ejecuta el else.
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`nota = 85
if nota >= 90:
    print("¡Excelente!")
elif nota >= 70:
    print("Bien hecho")
else:
    print("Necesitas estudiar más")`}
                            </Code>
                        </DivContent>
                        <DivContent id="3.1.2">
                            <TitleContent>
                                Condiciones anidadas
                            </TitleContent>
                            <p>
                                Consiste en colocar una sentencia condicional dentro de otra. Esto permite tomar decisiones más específicas.
                            </p>
                            <Span>Ejemplo:</Span>
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
                        </DivContent>
                        <DivContent id="3.1.3">
                            <TitleContent>
                                Operadores de comparación
                            </TitleContent>
                            <p>
                                Símbolos utilizados para comparar valores, cuyo resultado siempre es un booleano (True o False):
                            </p>
                            <List>
                                <li><Span text="text-amber-500 font-bold">{'=='}:</Span> Igual a</li>
                                <li><Span text="text-amber-500 font-bold">{'!='}:</Span> Diferente de</li>
                                <li><Span text="text-amber-500 font-bold">{'>'}:</Span> Mayor que</li>
                                <li><Span text="text-amber-500 font-bold">{'<'}:</Span> Menor que</li>
                                <li><Span text="text-amber-500 font-bold">{'>='}:</Span> Mayor o igual que</li>
                                <li><Span text="text-amber-500 font-bold">{'<='}:</Span> Menor o igual que</li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`x = 5
y = 10
print(x < y)   # True (verdadero)
print(x == y)  # False (falso)`}
                            </Code>
                        </DivContent>
                        <DivContent id="3.1.4">
                            <TitleContent>
                                Ejemplos prácticos de control de flujo
                            </TitleContent>
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
                        </DivContent>
                        <DivContent id="3.1.5">
                            <TitleContent>
                                Preguntas y respuestas
                            </TitleContent>
                            <List>
                                <li><Span>¿Puedo tener múltiples condiciones en un solo if?</Span> Sí, usando operadores lógicos como and y or. 
                                    <br /> Ejemplo: if edad {'>='} 10 and tiene_permiso:.</li>
                                <li><Span>¿Qué pasa si no pongo else?</Span> No hay problema. Si la condición es falsa, el programa 
                                    simplemente continúa con la siguiente línea de código después del bloque if.</li>
                                <li><Span>¿Cuántos elif puedo usar?</Span> Tantos como necesites, no hay límite.</li>
                            </List>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '3.2_bucles',
                item: 'Bucles en Python',
                content: {
                    title: 'Introducción a los bucles',
                    body: (
                        <>
                        <DivContent>
                            <p>
                                Los bucles son estructuras que permiten repetir una o más instrucciones varias veces.
                            </p>
                        </DivContent>
                        <DivContent id="3.2.1">
                            <TitleContent>
                                while y for
                            </TitleContent>
                            <List>
                                <li>
                                    <Span>while:</Span> Repite el bloque de código mientras una condición sea verdadera. 
                                    Es crucial cambiar la condición dentro del bucle para evitar bucles infinitos.
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`contador = 1
while contador <= 5:
    print(f"Vuelta número {contador}")
    contador += 1 # Condición que cambia para terminar el bucle`}
                            </Code>
                            <List>
                                <li>
                                    <Span>for:</Span> Repite el bloque de código para cada elemento de una secuencia 
                                    (como una lista o un rango de números).
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`for i in range(1, 6): # range(inicio, fin) genera una secuencia
    print(f"Número {i}")`}
                            </Code>
                        </DivContent>
                        <DivContent id="3.2.2">
                            <TitleContent>
                                break y continue
                            </TitleContent>
                            <List>
                                <li>
                                    <Span>break:</Span> Detiene el bucle inmediatamente, saltando a la siguiente línea de código después 
                                    del bucle.
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`for i in range(10):
    if i == 5:
        break
    print(i) # Imprime 0, 1, 2, 3, 4`}
                            </Code>
                            <List>
                                <li>
                                    <Span>continue:</Span> Saltea la iteración actual y pasa directamente al inicio de la siguiente 
                                    iteración del bucle.
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`for i in range(5):
    if i == 2:
        continue
    print(i) # Imprime 0, 1, 3, 4 (salta el 2)`}
                            </Code>
                        </DivContent>
                        <DivContent id="3.2.3">
                            <TitleContent>else en bucles</TitleContent>
                            <p>
                                En Python, la cláusula else después de un bucle (for o while) se ejecuta solo si el bucle termina 
                                de forma normal (es decir, la condición del while se vuelve falsa, o el for itera sobre todos sus elementos). 
                                No se ejecuta si el bucle se detiene con break.
                            </p>
                            <Span>Ejemplo:</Span>
                            <Code>
{`for i in range(5):
    print(i)
else:
    print("¡Bucle completado!")`}
                            </Code>
                        </DivContent>
                        <DivContent id="3.2.4">
                            <TitleContent>
                                Ejercicios y laboratorios
                            </TitleContent>
                            <Span>Bucle while con ejemplos prácticos (Adivinar un número)</Span>
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

                            <Span>Pirámide de bloques</Span>
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

                            <Span>La hipótesis de Collatz (Problema matemático)</Span>
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
                        </>
                    )
                }
            },
            {
                id: '3.3_operaciones_logicas',
                item: 'Operaciones Lógicas y de Bits',
                content: {
                    title: 'Operaciones Lógicas y de Bits',
                    body: (
                        <>
                        <DivContent id="3.3.1">
                            <TitleContent>
                                Lógica de computadoras
                            </TitleContent>
                            <p>
                                Las computadoras trabajan con valores True (verdadero) y False (falso). Los operadores lógicos 
                                permiten combinar estas condiciones para tomar decisiones complejas.
                            </p>
                            <List>
                                <li>
                                    <Span>and (Conjunción):</Span> Devuelve True si ambas condiciones son verdaderas.
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`tiene_llave = True
tiene_permiso = True
if tiene_llave and tiene_permiso:
    print("Puedes abrir la caja")`}
                            </Code>
                            <List>
                                <li>
                                    <Span>or (Disyunción):</Span> Devuelve True si al menos una condición es verdadera.
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`tiene_efectivo = False
tiene_tarjeta = True
if tiene_efectivo or tiene_tarjeta:
    print("Puedes pagar")`}
                            </Code>
                            <List>
                                <li>
                                    <Span>not (Negación):</Span> Invierte el valor booleano. not True es False, y not False es True.
                                </li>
                            </List>
                            <Span>Ejemplo:</Span>
                            <Code>
{`esta_lloviendo = False
if not esta_lloviendo:
    print("Puedes salir a jugar")`}
                            </Code>

                        </DivContent>
                        <DivContent id="3.3.2">
                            <TitleContent>
                                Expresiones lógicas
                            </TitleContent>
                            <p>
                                Se pueden crear expresiones complejas combinando operadores, usando paréntesis para controlar el 
                                orden de evaluación.
                            </p>
                            <Span>Ejemplo:</Span>
                            <Code>
{`edad = 15
tiene_permiso = True
if edad >= 13 and (tiene_permiso or edad >= 18):
    print("Puedes acceder")`}
                            </Code>
                        </DivContent>
                        <DivContent id="3.3.3">
                            <TitleContent>
                                Operadores bit a bit (Bitwise)
                            </TitleContent>
                            <p>
                                Estos operadores trabajan directamente con los bits (0 y 1) de los números enteros, manipulando 
                                cada dígito binario individualmente.
                            </p>
                            <List>
                                <li>
                                    <Span>& (AND bit a bit):</Span> El bit resultante es 1 si ambos bits son 1.
                                </li>
                            </List>
                            <Code>{`5 & 3  # 101 & 011 = 001 = 1`}</Code>
                            <List>
                                <li>
                                    <Span>| (OR bit a bit):</Span> El bit resultante es 1 si al menos uno de los bits es 1.
                                </li>
                            </List>
                            <Code>{`5 | 3  # 101 | 011 = 111 = 7`}</Code>
                            <List>
                                <li>
                                    <Span>^ (XOR - OR exclusivo):</Span> El bit resultante es 1 si los bits son diferentes.
                                </li>
                            </List>
                            <Code>{`5 ^ 3  # 101 ^ 011 = 110 = 6`}</Code>
                            <List>
                                <li>
                                    <Span>~ (NOT bit a bit):</Span> Invierte todos los bits. (Nota: La representación real en Python usa complemento a dos, por eso ~5 es -6).
                                </li>
                            </List>
                            <Code>{`~5  # -6 (en complemento a 2)`}</Code>
                            <List>
                                <li>
                                    <Span>{'>>'}</Span> y <Span>{'<<'} (Desplazamiento):</Span> Mueven los bits a la derecha o izquierda.
                                </li>
                            </List>
                            <Code>{`8 >> 1  # 1000 >> 1 = 0100 = 4 (Divide entre 2)
8 << 1  # 1000 << 1 = 10000 = 16 (Multiplica por 2)`}</Code>
                        </DivContent>
                        <DivContent id="3.3.4">
                            <TitleContent>
                                Jerarquía de prioridades
                            </TitleContent>
                            <p>
                                Python evalúa las operaciones lógicas y de bits en el siguiente orden:
                            </p>
                            <List>
                                <li><Span text="text-amber-500">not</Span></li>
                                <li><Span text="text-amber-500">and</Span></li>
                                <li><Span text="text-amber-500">or</Span></li>
                                <li>Operadores bit a bit: <Span text="text-amber-500">~  {'<<'}  {'>>'}  &  ^  |</Span></li>
                            </List>
                            <p>Utiliza paréntesis () para anular la prioridad y forzar un orden de evaluación.</p> 
                            <Span>Ejemplo:</Span>
                            <Code>{`(a or b) and c`}</Code>
                        </DivContent>
                        <DivContent id="3.3.5">
                            <TitleContent>
                                Operadores booleanos y máscaras de bits
                            </TitleContent>
                            <p>
                                Una máscara de bits es un valor predefinido que se usa con operadores bit a bit para activar, 
                                desactivar o verificar bits específicos en un número.
                            </p>
                            <Code>
    {`# Permisos: leer=1 (001), escribir=2 (010), ejecutar=4 (100)
    permisos = 0b101  # leer y ejecutar (5 en decimal)

    # Verificar si tiene permiso de lectura
    tiene_lectura = permisos & 0b001  # True (resultado es 1, que no es 0)

    # Agregar permiso de escritura
    permisos = permisos | 0b010  # 0b101 | 0b010 = 0b111 = 7`}
                            </Code>
                        </DivContent>
                        <DivContent id="3.3.6">
                            <TitleContent>Desplazamiento binario (Multiplicación/División rápida)</TitleContent>
                            <List>
                                <li>
                                    <Span>Desplazamiento a la Izquierda {'<<'}:</Span> Multiplica el número por $2^{'n'}$ 
                                    (donde $n$ es el número de posiciones desplazadas).
                                </li>
                            </List>
                            <Code>{`3 << 2  # 11 << 2 = 1100 = 12 (3 * 2²) `}</Code>
                            <List>
                                <li>
                                    <Span>Desplazamiento a la Derecha {'>>'}:</Span> Divide el número por $2^{'n'}$ 
                                    (descartando el residuo).
                                </li>
                            </List>
                            <Code>{`12 >> 2  # 1100 >> 2 = 11 = 3 (12 // 2²) `}</Code>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '3.4_listas',
                item: 'Listas',
                content: {
                    title: 'Python: Listas',
                    body: (
                        <>
                        <DivContent id="3.4.1">
                            <TitleContent>¿Por qué necesitamos listas?</TitleContent>
                            <p>
                                Las Listas son estructuras de datos que permiten almacenar múltiples elementos en una sola variable. 
                                Son el tipo de secuencia más versátil de Python, ya que son mutables (se pueden cambiar) y pueden 
                                contener elementos de diferentes tipos.
                            </p>
                        </DivContent>
                        <DivContent id="3.4.2">
                            <TitleContent>Creación de listas</TitleContent>
                            <p>Las listas se crean usando corchetes [].</p>
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
                        </DivContent>
                        <DivContent id="3.4.3">
                            <TitleContent>Indexación y rebanado (slicing)</TitleContent>
                            <p>
                                Cada elemento tiene una posición o índice que comienza en 0. Se puede acceder a los elementos usando 
                                estos índices.
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
                        </DivContent>
                        <DivContent id="3.4.4">
                            <TitleContent>Actualización y eliminación de elementos</TitleContent>
                            <p>Debido a que las listas son mutables, sus elementos pueden ser modificados o eliminados.</p>
                            <Code>
{`numeros = [10, 20, 30, 40]

# Actualizar (Asignación por índice)
numeros[1] = 25  # [10, 25, 30, 40]

# Eliminar (Usando la palabra clave del)
del numeros[0]   # [25, 30, 40]`}
                            </Code>
                        </DivContent>
                        <DivContent id="3.4.5">
                            <TitleContent>Funciones útiles con listas</TitleContent>
                            <p>Funciones integradas de Python que trabajan con listas:</p>
                            <Code>
{`numeros = [3, 1, 4, 1, 5, 9, 2]

print(len(numeros))        # 7 (Longitud de la lista)
print(max(numeros))        # 9 (Valor máximo)
print(min(numeros))        # 1 (Valor mínimo)
print(sum(numeros))        # 25 (Suma total de elementos)
print(numeros.count(1))    # 2 (Veces que aparece el valor 1)`}
                            </Code>
                        </DivContent>
                        <DivContent id="3.4.6">
                            <TitleContent>Métodos principales de listas (Modificadores)</TitleContent>
                            <p>Métodos son funciones que pertenecen al objeto lista y se invocan con el punto (.).</p>
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
                        </DivContent>
                        <DivContent id="3.4.7">
                            <TitleContent>Listas anidadas</TitleContent>
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
                        </DivContent>
                        <DivContent id="3.4.8">
                            <TitleContent>Ejemplos prácticos: Inversión de listas</TitleContent>
                            <Code>
{`original = [1, 2, 3, 4, 5] 

# Método 1: Usando slicing [::-1]
invertida = original[::-1]
print(invertida) # [5, 4, 3, 2, 1]

# Método 2: Usando reverse() in-place
original.reverse()
print(original)  # [5, 4, 3, 2, 1]`}
                                </Code>
                        </DivContent>
                        <DivContent id="3.4.9">
                            <TitleContent>LAB: listas con los Beatles</TitleContent>
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
                        </>
                    )
                }
            },
            {
                id: '3.5_procesar_listas',
                item: 'Procesamiento de Listas',
                content: {
                    title: 'Procesamiento de Listas',
                    body: (
                        <>
                        <DivContent id="3.4.1">
                            <TitleContent>Iteración sobre listas</TitleContent>
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
                        </DivContent>
                        <DivContent id="3.4.2">
                            <TitleContent>Uso de in y not in</TitleContent>
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
                        </DivContent>
                        <DivContent id="3.4.3">
                            <TitleContent>Comparación entre listas</TitleContent>
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
                        </DivContent>
                        <DivContent id="3.4.4">
                            <TitleContent>Listas y cadenas de texto</TitleContent>
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
                        </DivContent>
                        <DivContent id="3.4.5">
                            <TitleContent>Ejercicios prácticos</TitleContent>
                            <Span>1. Encontrar el número más grande </Span>
                            <Code>
{`numeros = [34, 12, 78, 23, 90, 45] 
mayor = numeros[0] 

for num in numeros: 
    if num > mayor: 
        mayor = num 
print(f"El mayor es: {mayor}") `}
                            </Code>
                            <Span>2. Contar vocales en una palabra</Span>
                            <Code>
{`palabra = "Python" 
vocales = ['a', 'e', 'i', 'o', 'u'] 
contador = 0 
for letra in palabra.lower(): 
    if letra in vocales: 
        contador += 1 
print(f"Vocales: {contador}") `} 
                            </Code>
                            <Span>3. Crear lista de números pares</Span>
                            <Code>
{`numeros = list(range(1, 11)) 
pares = [] 
for num in numeros: 
    if num % 2 == 0: 
        pares.append(num) 
print(pares)  # [2, 4, 6, 8, 10]`}
                            </Code>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '3.6_listas_avanzadas',
                item: 'Listas Avanzadas',
                content: {
                    title: 'Listas Avanzadas',
                    body: (
                        <>
                        <DivContent id="3.6.1">
                            <TitleContent>Copias y referencias de listas</TitleContent>
                            <p>
                                Esto es muy importante: cuando "copias" una lista, debes tener cuidado. Por defecto, 
                                la asignación (=) crea una referencia, no una copia.
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
                            <Important>
                                Imagina que lista1 es una casa. Cuando haces <Span text="text-amber-400">lista2 = lista1</Span>, ambas 
                                variables apuntan a la misma casa. Si pintas la casa con <Span text="text-amber-400">lista2</Span>, <Span 
                                text="text-amber-400">lista1</Span> también ve el cambio. Para tener dos casas diferentes, 
                                necesitas hacer una copia real.
                            </Important>
                        </DivContent>
                        <DivContent id="3.6.2">
                            <TitleContent>Listas vs. Matrices</TitleContent>
                            <p>
                                En Python, no hay un tipo "matriz" incorporado, pero podemos crear matrices usando listas anidadas:
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
                            <List>
                                <li><Span>Listas:</Span> lineales, como una fila de cajas.</li>
                                <li><Span>Matrices:</Span> bidimensionales (o n-dimensionales), como una tabla con filas y columnas.</li>
                            </List>
                        </DivContent>
                        <DivContent id="3.6.3">
                            <TitleContent>Operaciones sobre listas anidadas</TitleContent>
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
                        </DivContent>
                        <DivContent id="3.6.4">
                            <TitleContent>Ejemplos prácticos con matrices</TitleContent>
                            <Span>Crear una tabla de multiplicar</Span>
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
                            <Span>Suma de elementos en una matriz</Span>
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
                            <Span>Transponer una matriz (intercambiar filas por columnas)</Span>
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
                        </>
                    )
                }
            },
            {
                id: '3.7_list_comprehensions',
                item: 'List Comprehensions y Arreglos',
                content: {
                    title: 'List Comprehensions y Arreglos',
                    body: (
                        <>
                        <DivContent id="3.7.1">
                            <TitleContent>Comprensión de listas: sintaxis y ejemplos</TitleContent>
                            <p>
                                Las List Comprehensions son una forma rápida y elegante de crear listas. Es como una receta comprimida 
                                en una sola línea, ofreciendo una sintaxis más legible y eficiente que los bucles for tradicionales para 
                                la creación de listas.
                            </p>
                            <Code>
{`# Forma tradicional 
cuadrados_tradicional = [] 
for i in range(1, 6): 
    cuadrados_tradicional.append(i  2) 
print(cuadrados_tradicional) # [1, 4, 9, 16, 25] 

# Con list comprehension (mucho más corto) 
cuadrados = [i  2 for i in range(1, 6)] 
print(cuadrados) # [1, 4, 9, 16, 25] 

# Sintaxis básica: [expresión for elemento in iterable]`}
                            </Code>
                            
                            <Span>Ejemplos adicionales</Span>
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
                        </DivContent>
                        <DivContent id="3.7.2">
                            <TitleContent>Listas anidadas y matrices (listas bidimensionales y más)</TitleContent>
                            <p>
                                Podemos usar list comprehensions para crear matrices (listas anidadas) de forma más compacta:
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
                            
                        </DivContent>
                        <DivContent id="3.7.3">
                            <TitleContent>Arreglos multidimensionales (3D, 4D, hasta nD)</TitleContent>
                            <p>
                                Los arreglos (listas anidadas) pueden tener más de 2 dimensiones, representando estructuras de datos complejas:
                            </p>
                            <List>
                                <li><Span>1D:</Span> Una fila de cajas (Lista simple)</li>
                                <li><Span>2D:</Span> Una tabla (Lista de listas - Matriz)</li>
                                <li><Span>3D:</Span> Un cubo de cajas (capas, filas y columnas)</li>
                                <li><Span>4D y más:</Span> Se usan para representar datos en el tiempo u otros contextos.</li>
                            </List>

                            <Span>Ejemplo de Arreglo 3D</Span>
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
                            
                            <Span>Arreglos de Alta Dimensión</Span>
                            <List>
                                Los Arreglos 4D podrían representar datos en el tiempo, por ejemplo:
                                <li><Span>Dimensión 1:</Span> Tiempo (diferentes días)</li>
                                <li><Span>Dimensión 2:</Span> Pisos de un edificio</li>
                                <li><Span>Dimensión 3:</Span> Filas en cada piso</li>
                                <li><Span>Dimensión 4:</Span> Columnas en cada fila</li>
                            </List>
                            <Code>
{`# Arreglo 4D pequeño: 2x2x2x2 
arreglo_4d = [[[[1, 2], [3, 4]], [[5, 6], [7, 8]]], 
    [[[9, 10], [11, 12]], [[13, 14], [15, 16]]]] 

print(arreglo_4d[1][0][1][0]) # 11`}
                            </Code>
                            <Important>
                                Para arreglos de muchas dimensiones, normalmente se usan bibliotecas especializadas como NumPy, que hacen que trabajar con ellos sea mucho más fácil y eficiente.
                            </Important>
                        </DivContent>
                        </>
                    )
                }
            },
        ]
    },

{
        id: '4',
        icon: ['fas', 'code'],
        title: 'Funciones',
        items: [
            {
                id: '4.1_funciones',
                item: 'Funciones: Introducción',
                content: {
                    title: 'Funciones: Introducción',
                    body: (
                        <>
                        <DivContent id="4.1.1">
                            <TitleContent>¿Por qué necesitamos funciones?</TitleContent>
                            <p>
                                Las funciones son esenciales para el desarrollo de software por dos razones principales: 
                                reutilización y organización.
                            </p>
                            <Span>1. Reutilización de Código (Evitar la Repetición)</Span>
                            <p>
                                Si un fragmento de código se repite muchas veces (literalmente o con pequeñas modificaciones), 
                                es una señal clara de que debe convertirse en una función.
                            </p>
                            <List>
                                <li>
                                    <Span>Riesgo de Error:</Span> Al copiar y pegar código, si existe un error, se debe corregir en todos 
                                    los lugares donde se pegó. Una función permite corregir el error en un solo lugar (dentro de la función).
                                </li>
                                <li>
                                    <Span>Condición Clave:</Span> Si un fragmento de código comienza a aparecer en más de una ocasión, 
                                    considera la posibilidad de aislarlo en la forma de una función e invocarla desde donde se necesite.
                                </li>
                            </List>

                            <Span>2. Organización y Descomposición (Manejo de Complejidad)</Span>
                            <p>
                                Los algoritmos complejos pueden hacer que el código crezca incontrolablemente. La descomposición es 
                                el proceso de dividir el problema en piezas aisladas.
                            </p>
                            <List>
                                <li>
                                    <Span>Simplificación:</Span> Un buen desarrollador divide el problema en pequeños problemas y 
                                    codifica cada uno de ellos como una función independiente.
                                </li>
                                <li>
                                    <Span>Pruebas:</Span> Cada pieza se codifica y se prueba por separado, lo que simplifica 
                                    considerablemente el trabajo.
                                </li>
                                <li>
                                    <Span>Trabajo en Equipo:</Span> Permite que un equipo de desarrolladores trabaje en un programa 
                                    complejo, donde cada uno escribe un conjunto bien definido de funciones que, al combinarse en un 
                                    módulo, forman el producto final.
                                </li>
                                <li>
                                    <Span>Condición Clave:</Span> Si un fragmento de código se hace tan extenso que leerlo o entenderlo 
                                    se hace complicado, considera dividirlo en pequeñas funciones.
                                </li>
                            </List>
                        </DivContent>
                        <DivContent id="4.1.2">
                            <TitleContent>¿De dónde provienen las funciones?</TitleContent>
                            <p>Existen al menos cuatro tipos de funciones básicas en Python:</p>
                            <List>
                                <li>
                                    <Span>Funciones integradas:</Span> Son parte esencial de Python, como <Span text="text-amber-500">
                                    print()</Span>, <Span text="text-amber-500">len()</Span>, o <Span text="text-amber-500">int()</Span>. 
                                    Puedes ver una lista completa en la documentación oficial. (ej. <Span 
                                    text="text-amber-500">math.sqrt()</Span> después de <Span text="text-amber-500">import math</Span>).
                                </li>
                                <li>
                                    <Span>Funciones en módulos pre-instalados:</Span> Funciones disponibles después de importar un módulo 
                                </li>
                                <li><Span>Funciones definidas por el usuario:</Span> Las que escribimos los programadores 
                                    para nuestro código.</li>
                            </List>
                        </DivContent>
                        <DivContent id="4.1.3">
                            <TitleContent>Tu primera función (Sintaxis)</TitleContent>
                            <p>La definición más simple de una función sigue esta sintaxis:</p>
                            <Code>
{`def function_name():
    # cuerpo de la función
    # instrucciones anidadas`}
                            </Code>
                            <List>
                                <li>Siempre comienza con la palabra reservada <Span text="text-amber-500">def</Span> (de definir).</li>
                                <li>Después de def va el nombre de la función (las mismas reglas de nombres que para las variables).</li>
                                <li>Le sigue un par de paréntesis () (para argumentos, si los hay).</li>
                                <li>La línea debe terminar con dos puntos :</li>
                                <li>
                                    El cuerpo de la función contiene las instrucciones, y comienza inmediatamente después de <Span 
                                    text="text-amber-500">def</Span> con una instrucción anidada (indentada). 
                                    La función termina donde el anidamiento termina.
                                </li>
                            </List>
                            
                            <Span>Ejemplo de definición y uso:</Span>
                            <Code>
{`def message(): # Definición
    print("¡Hola desde la función!")

message() # Invocación 1
message() # Invocación 2`}
                            </Code>
                        </DivContent>
                        <DivContent id="4.1.4">
                            <TitleContent>Funcionamiento y Consejos Clave</TitleContent>
                            <p>El proceso de ejecución de una función es el siguiente:</p>
                            <List>
                                <li>Cuando se invoca una función, Python recuerda el lugar donde ocurre y salta hacia dentro de la 
                                    función invocada.</li>
                                <li>El cuerpo de la función es entonces ejecutado.</li>
                                <li>Al llegar al final de la función, Python regresa al lugar inmediato después de donde ocurrió 
                                    la invocación.</li>
                            </List>
                            <Span>Consideraciones Importantes:</Span>
                            <List>
                                <li>
                                    Orden de Definición: No se debe invocar una función antes de que se haya definido. 
                                    Python lee el código de arriba hacia abajo. La función debe estar definida "antes de ser invocada".
                                </li>
                                <li>
                                    Nombres Únicos: Una función y una variable no pueden compartir el mismo nombre. Asignar un valor a un 
                                    nombre de función existente (ej. <Span text="text-amber-500">message = 10</Span>) hará que Python 
                                    olvide la función, y esta ya no estará disponible.
                                </li>
                            </List>
                        </DivContent>
                        <DivContent id="4.1.5">
                            <TitleContent>Funciones con Argumentos</TitleContent>
                            <p>
                                La sintaxis general de una función permite parámetros opcionales. Puedes definir funciones sin argumentos o 
                                con ellos:
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
                        </>
                    )
                }
            },
            {
                id: '4.2_parametros',
                item: 'Parámetros en Funciones',
                content: {
                    title: 'Parámetros en Funciones',
                    body: (
                        <>
                        <DivContent id="4.2.1">
                            <TitleContent>Parámetros vs. Argumentos</TitleContent>
                            <p>
                                La comunicación entre el código que llama a una función y la función misma se realiza mediante 
                                parámetros y argumentos.
                            </p>
                            <List>
                                <li>
                                    Parámetros: Son variables definidas dentro de la función (entre los paréntesis de la 
                                    palabra clave def). Solo existen dentro de la función.
                                </li>
                            </List>
                            <Code>
{`def function(parameter): # 'parameter' es el parámetro
    print(parameter) `}
                            </Code>
                            <List>
                                <li>
                                    Argumentos: Son los valores que se pasan a la función cuando se invoca. Estos valores 
                                    se asignan a los parámetros correspondientes.
                                </li>
                            </List>
                            <Code>{`function("Hola") # "Hola" es el argumento `}</Code>
                            <Important>
                                Recuerda: Los parámetros viven dentro de la función (su entorno natural), y 
                                los argumentos existen fuera y les pasan los valores.
                            </Important>
                        </DivContent>
                        <DivContent id="4.2.2">
                            <TitleContent>Paso de Parámetros Posicionales (Por Posición)</TitleContent>
                            <p>
                                Es la técnica estándar donde la asignación de argumentos a parámetros se basa estrictamente en 
                                su orden o posición.
                            </p>
                            <List>
                                <li>El primer argumento va al primer parámetro, el segundo al segundo, y así sucesivamente.</li>
                                <li>Se debe proveer el mismo número de argumentos como haya parámetros definidos.</li>
                            </List>
                            <Code>
{`def resta(a, b): # a y b son parámetros posicionales
    print(a - b)

resta(10, 5) # 10 se asigna a 'a', 5 se asigna a 'b'. Resultado: 5
resta(5, 10) # 5 se asigna a 'a', 10 se asigna a 'b'. Resultado: -5`}
                            </Code>
                        </DivContent>
                        <DivContent id="4.2.3">
                            <TitleContent>Paso de Argumentos por Palabras Clave (Variables)</TitleContent>
                            <p>
                                En esta técnica, el significado del argumento está definido por su nombre de parámetro, no por su posición.
                            </p>
                            <List>
                                <li>Los valores se pasan usando la sintaxis: nombre_parametro = valor.</li>
                                <li>La posición no es relevante; el argumento conoce su destino por el nombre.</li>
                                <li>No se puede usar el nombre de un parámetro que no existe.</li>
                            </List>
                            <Code>
{`def mezcla(color1, color2):
    print(f"Mezcla de {color1} y {color2}")

# Argumentos por palabra clave (la posición no importa)
mezcla(color2="Amarillo", color1="Azul") # Resultado: Mezcla de Azul y Amarillo

# También se pueden asignar valores predefinidos (argumentos por palabra clave)
mezcla(color1="Rojo", color2="Verde") # Resultado: Mezcla de Rojo y Verde`}
                            </Code>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '4.3_retornar',
                item: 'Retornando el Resultado de una Función',
                content: {
                    title: 'Retornando el Resultado de una Función',
                    body: (
                        <>
                        <DivContent id="4.3.1">
                            <TitleContent>La Instrucción return</TitleContent>
                            <p>
                                Las funciones pueden devolver un valor como resultado. Para lograr esto, se utiliza la palabra clave 
                                reservada return.
                            </p>
                            
                            <Span>1. return sin una expresión (Terminación Inmediata)</Span>
                            <p>
                                Si return se usa sin un valor, provoca la terminación inmediata de la ejecución de la función, y 
                                el flujo de control regresa al punto de invocación.
                            </p>
                            <Code>
{`def cuenta_regresiva(desear_feliz_año):
    for i in range(3, 0, -1):
        print("Tres..." if i == 3 else "Dos..." if i == 2 else "Uno...")
    
    if not desear_feliz_año:
        return # Terminación inmediata
        
    print("¡Feliz año nuevo!")`}
                            </Code>

                            <Span>2. return con una expresión (Devolver un Valor)</Span>
                            <p>
                                Esta variante evalúa la expresión y devuelve su valor como el resultado de la función, además de 
                                causar la terminación inmediata.
                            </p>
                            <Code>
{`def suma(a, b):
    resultado = a + b
    return resultado # Evalúa y devuelve el valor de 'resultado'`}
                            </Code>
                        </DivContent>
                        <DivContent id="4.3.2">
                            <TitleContent>El valor None</TitleContent>
                            <p>
                                None es una palabra clave reservada que representa la ausencia de un valor razonable.
                            </p>
                            <List>
                                <li>
                                    Uso Seguro: Asignar un estado a una variable o diagnosticar si una variable tiene un valor 
                                    (if variable is None).
                                </li>
                                <li>
                                    Retorno Implícito: Si una función no devuelve explícitamente un valor con return, se asume 
                                    que devuelve implícitamente None.
                                </li>
                            </List>
                            <Code>
{`def funcion_vacia():
    pass # No devuelve nada

resultado = funcion_vacia() 
print(resultado) # Output: None`}
                            </Code>
                        </DivContent>
                        <DivContent id="4.3.3">
                            <TitleContent>Listas como Argumentos y Resultados</TitleContent>
                            <p>Cualquier entidad reconocible por Python puede ser un argumento o un resultado de función.</p>
                            <Span>Lista como Argumento</Span>
                            <Code>
{`def suma_elementos(lista):
    suma = 0
    for elemento in lista:
        suma += elemento
    return suma`}
                            </Code>
                            <Span>Lista como Resultado</Span>
                            <Code>
{`def invertir_rango(n):
    lista_invertida = []
    for i in range(n - 1, -1, -1):
        lista_invertida.append(i)
    return lista_invertida

nueva_lista = invertir_rango(5)
print(nueva_lista) # Output: [4, 3, 2, 1, 0]`}
                            </Code>

                        </DivContent>
                        <DivContent id="4.3.4">
                            <TitleContent>Ejercicio: Números Primos</TitleContent>
                            <p>Un número natural es primo si es mayor que 1 y no tiene divisores más que 1 y sí mismo.</p>
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
                        </>
                    )
                }
            },
            {
                id: '4.4_scope',
                item: 'Alcances (Scopes) en Python',
                content: {
                    title: 'Alcances (Scopes) en Python',
                    body: (
                        <>
                        <DivContent id="4.4.1">
                            <TitleContent>El Alcance de un Nombre (Scope)</TitleContent>
                            <p>
                                El alcance de un nombre (variable) es la parte del código donde ese nombre es válido y reconocido.
                            </p>
                            <List>
                                <li>El alcance de un parámetro es la función misma.</li>
                                <li>Una variable definida fuera de una función (global) se puede leer dentro de la función.</li>
                                <li>Asignar un valor a una variable global dentro de una función crea una nueva variable local con 
                                    el mismo nombre.</li>
                            </List>
                        </DivContent>
                        <DivContent id="4.4.2">
                            <TitleContent>La Palabra Clave global</TitleContent>
                            <p>
                                Para modificar una variable global dentro de una función, se utiliza la palabra clave reservada global.
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
                        </DivContent>
                        <DivContent id="4.4.3">
                            <TitleContent>Interacción con Parámetros</TitleContent>
                            <p>La interacción depende de la mutabilidad del argumento:</p>
                            <Span>1. Argumentos Escalares (Inmutables: int, str, tuple)</Span>
                            <List>
                                <li>Se recibe el valor del argumento.</li>
                                <li>Cambiar el valor del parámetro dentro de la función no afecta al argumento original.</li>
                            </List>
                            <Span>2. Argumentos de Colección (Mutables: list, dict)</Span>
                            <List>
                                <li>Se recibe una referencia a la lista original.</li>
                                <li>Si se modifica el contenido de la lista (ej. .append()), la lista original se ve afectada.</li>
                                <li>Si se reasigna el parámetro (ej. my_list = [0, 1]), solo se afecta el parámetro local, no 
                                    el argumento original.</li>
                            </List>
                            <Code>
{`def cambiar_contenido(my_list):
    my_list.append(3) # Modifica la lista original

lista_original = [2]
cambiar_contenido(lista_original)
print(lista_original) # Output: [2, 3]`}
                            </Code>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '4.5_ejercicios_funciones',
                item: 'Ejercicios de Creación de Funciones',
                content: {
                    title: 'Ejercicios de Creación de Funciones',
                    body: (
                        <>
                        <DivContent id="4.5.1">
                            <TitleContent>Factoriales</TitleContent>
                            <p>El factorial de $n$ ($n!$) es el producto de todos los números naturales $\leq n$.</p>
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
                        </DivContent>
                        <DivContent id="4.5.2">
                            <TitleContent>Números Fibonacci</TitleContent>
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
                        </>
                    )
                }
            },
            {
                id: '4.6_tuplas_y_diccionarios',
                item: 'Tuplas y Diccionarios',
                content: {
                    title: 'Tuplas y Diccionarios',
                    body: (
                        <>
                        <DivContent id="4.6.1">
                            <TitleContent>Conceptos Clave: Secuencia y Mutabilidad</TitleContent>
                            <List>
                                <li><Span>Secuencia:</Span> Tipo de dato que puede ser escaneado por el bucle for (Listas, Tuplas).</li>
                                <li><Span>Mutabilidad:</Span> Capacidad de cambiar su contenido. Mutables (Listas, Diccionarios) 
                                    vs. Inmutables (Tuplas, Cadenas).</li>
                            </List>
                        </DivContent>
                        <DivContent id="4.6.2">
                            <TitleContent>Tuplas (Inmutables)</TitleContent>
                            <p>
                                Colecciones ordenadas e inmutables. Se definen con paréntesis () o solo comas.
                            </p>
                            <Code>
{`mi_tupla = (1, 3.14, "hola") 
single = (5,) # Tupla de un solo elemento requiere coma final`}
                            </Code>
                            <List>
                                <li>Operaciones: Se pueden usar len(), +, *, in.</li>
                                <li>Inmutabilidad: No se puede modificar su contenido.</li>
                                <li>Desempaquetado: Útil para asignar valores: a, b = b, a.</li>
                            </List>
                        </DivContent>
                        <DivContent id="4.6.3">
                            <TitleContent>Diccionarios (Mutables)</TitleContent>
                            <p>
                                Almacenan pares de clave:valor. Son mutables y se definen con llaves {}.
                            </p>
                            <Code>
{`diccionario = {
    "gato": "chat", 
    "perro": "chien"
}
print(diccionario["gato"]) # Acceso por clave: chat`}
                            </Code>
                            <Span>Reglas</Span>
                            <List>
                                <li>Claves deben ser únicas y de tipo inmutable (no listas).</li>
                                <li>Modificar/Agregar: Se hace por asignación: diccionario["clave"] = valor.</li>
                                <li>Eliminar: Se usa del diccionario["clave"] o diccionario.popitem().</li>
                                <li>Iteración: Se usa dic.keys(), dic.values(), o dic.items() (pares de tuplas).</li>
                            </List>                          
                            <Span>Métodos Clave</Span>
                            <List>
                                <li><Span text="text-amber-500">keys():</Span> Retorna lista de claves.</li>
                                <li><Span text="text-amber-500">items():</Span> Retorna lista de tuplas (clave, valor).</li>
                                <li><Span text="text-amber-500">update():</Span> Inserta otro diccionario o pares clave-valor.</li>
                                <li><Span text="text-amber-500">copy():</Span> Crea una copia.</li>
                            </List>
                        </DivContent>
                        </>
                    )
                }
            },
            {
                id: '4.7_excepciones',
                item: 'Excepciones',
                content: {
                    title: 'Excepciones (Manejo de Errores)',
                    body: (
                        <>
                        <DivContent id="4.7.1">
                            <TitleContent>La Rama try-except</TitleContent>
                            <p>
                                Permite manejar errores (excepciones) sin que el programa termine.
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
                            <Span>Mecanismo</Span>
                            <List>
                                <li><Span text="text-amber-500">try:</Span> La ejecución se detiene si ocurre un error y salta al 
                                    except apropiado.</li>
                                <li><Span text="text-amber-500">except:</Span> Solo se activa si una excepción ocurre en el try.</li>
                            </List>
                        </DivContent>
                        <DivContent id="4.7.2">
                            <TitleContent>Excepciones Comunes</TitleContent>
                            <List>
                                <li><Span>ZeroDivisionError:</Span> División por cero.</li>
                                <li><Span>ValueError:</Span> Valor de tipo adecuado, pero inaceptable (ej. int("abc")).</li>
                                <li><Span>TypeError:</Span> Operación aplicada a un tipo de dato incorrecto (ej. índice flotante en lista).</li>
                                <li><Span>AttributeError:</Span> Intento de usar un método o atributo que no existe.</li>
                                <li><Span>SyntaxError:</Span> Violación de la gramática de Python.</li>
                            </List>
                        </DivContent>
                        </>
                    )
                }
            },
        ]
    },
];