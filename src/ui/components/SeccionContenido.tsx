import { useLocation, useParams } from "react-router-dom"
import { DROPDOWNS, IdSection } from "../data/menuData";
import SimpleCard from "./SimpleCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SeccionContenido() {
    const { seccionId } = useParams<{seccionId: string}>();

    const location = useLocation();
    const subtema = location.pathname.substring(8);
    let currentContentId = location.hash.substring(1);

    const encontrarContenido = () => {
        for (const dropdown of DROPDOWNS) {
            const itemEncontrado = dropdown.items.find(item => item.id === seccionId);
            if (itemEncontrado) return itemEncontrado.content;
            console.log(itemEncontrado);
        }
        return null;
    };

    const getNavigationIds = () => {
        const subtemaGroup = IdSection.find(item => item.subtema === seccionId);

        if (!subtemaGroup) {
            return { prevId: null, nextId: null };
        }

        if (!currentContentId) {
            currentContentId = subtemaGroup.ids[0]; 
        }
        
        const index = subtemaGroup.ids.indexOf(currentContentId);

        if (index !== -1) {
            const prevId = index > 0 ? subtemaGroup.ids[index - 1] : null;
            const nextId = index < subtemaGroup.ids.length - 1 ? subtemaGroup.ids[index + 1] : null;
            return { prevId, nextId };
        }
        
        return { prevId: null, nextId: null };
    };

    const { prevId, nextId } = getNavigationIds();
    const contenido = encontrarContenido();

    if (!contenido) {
        return (
            <SimpleCard>
                <span className="text-3xl text-red-600 font-bold tracking-wide">
                    Sección no encontrada
                </span>
            </SimpleCard>
        )
    }

    return (
        <>
            <section className="flex flex-col gap-8">
            <SimpleCard>
                <h2 className="text-3xl text-indigo-700 font-bold tracking-wide">
                    {contenido.title}
                </h2>
            </SimpleCard>
            {contenido.body}
            </section>
            <div className="absolute my-6 bottom-0 right-0 w-min grid gap-2">
              <a 
                className={`mx-4 p-2 text-3xl
                bg-amarillo rounded-full shadow-lg text-gris cursor-pointer 
                hover:text-gris-medio transition-all duration-300
                ${!prevId && 'opacity-50 pointer-events-none'}`} // Desactivar si no hay ID anterior
                href={prevId ? `/python/${subtema}#${prevId}` : '#'}
                title="Subtema Anterior">
                  <FontAwesomeIcon icon={['fas', 'arrow-up']} />
              </a>
              <a 
                className={`mx-4 p-2 text-3xl
                bg-amarillo rounded-full shadow-lg text-gris cursor-pointer 
                hover:text-gris-medio transition-all duration-300
                ${!nextId && 'opacity-50 pointer-events-none'}`} // Desactivar si no hay ID siguiente
                href={nextId ? `/python/${subtema}#${nextId}` : '#'}
                title="Subtema Siguiente">
                  <FontAwesomeIcon icon={['fas', 'arrow-down']} />
              </a>
            </div>
        </>
    )
}