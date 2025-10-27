import type { ReactNode } from "react"

interface DivContent {
    children: ReactNode
}

export default function DivContent({children}: DivContent) {
    return (
      <div className="flex flex-col gap-4 text-lg text-gris-mamalon">
          {children}
      </div>
    )
}