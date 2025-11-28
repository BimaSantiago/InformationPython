import type { ReactNode } from "react"
import SimpleCard from "./SimpleCard"

interface DivContent {
    children: ReactNode,
    id?: string
}

export default function DivContent({children, id}: DivContent) {
    return (
      <div id={id} className="text-lg text-gris-mamalon">
        <SimpleCard>
          {children}
        </SimpleCard>
      </div>
    )
}