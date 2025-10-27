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
                item: 'Lenguaje máquina vs. Lenguaje de alto nivel',
            },
            {
                id: '1.5',
                item: 'Compilación vs. Interpretación',
            },
            {
                id: '1.6',
                item: 'Introducción a Python',
            },
            {
                id: '1.7',
                item: '¿Qué hace que Python sea tan especial?',
            },
            {
                id: '1.8',
                item: 'Existe más de un Python',
            },
            {
                id: '1.9',
                item: 'Implementaciones de Python',
            },
            {
                id: '1.10',
                item: 'Descarga e intalación de Python',
            },
            {
                id: '1.11',
                item: 'Configuración de Python',
            },
            {
                id: '1.12',
                item: 'Comenzando tu trabajo en Python',
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
                item: 'title 1',
            },
            {
                id: '2.2',
                item: 'title 2',
            },
        ]
    },
];