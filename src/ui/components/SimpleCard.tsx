import type { ReactNode } from "react";

interface Card {
    children: ReactNode;
}

export default function SimpleCard({children}: Card) {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg">
        {children}
    </div>
  )
}