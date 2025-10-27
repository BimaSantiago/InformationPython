import { useParams } from "react-router-dom"
import { DROPDOWNS } from "../data/menuData";
import SimpleCard from "./SimpleCard";

export default function SeccionContenido() {
    const { seccionId } = useParams<{seccionId: string}>();

    const encontrarContenido = () => {
        for (const dropdown of DROPDOWNS) {
            const itemEncontrado = dropdown.items.find(item => item.id === seccionId);
            if (itemEncontrado) return itemEncontrado.content;
        }
        return null;
    };

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
        <section className="flex flex-col gap-8">
        <SimpleCard>
            <h2 className="text-3xl text-indigo-700 font-bold tracking-wide">
                {contenido.title}
            </h2>
        </SimpleCard>
        <SimpleCard>
            {contenido.body}
        </SimpleCard>
        </section>
    )
}