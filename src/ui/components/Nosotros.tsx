import DivContent from "./DivContent";
import List from "./List";
import Span from "./Span";
import TitleContent from "./TitleContent";

export default function Nosotros() {
  return (
    <section className="grid gap-8">
        <DivContent>
            <TitleContent>
                Sobre Nosotros
            </TitleContent>
        </DivContent>
        <DivContent>
            <TitleContent>
                Esta página fue desarrollada por el grupo 502
            </TitleContent>
            <Span>
                Equipo Conformado por:
            </Span>
            <List>
                <li>Kevin Uriel Cruz Ríos</li>
                <li>Yael García Gabriel</li>
                <li>Abimael Hernández Santiago</li>
                <li>Yoltzin Iván Ruiz Burciaga</li>
                <li>Luis Antonio Santiago Martínez</li>
            </List>
        </DivContent>
    </section>
  )
}