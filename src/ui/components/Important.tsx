interface ImportantProps {
    children: React.ReactNode
}

export default function Important({children}: ImportantProps) {
  return (
    <blockquote className="border-l-4 border-amber-300 pl-4 my-2">
        <p>
            {children}
        </p>
    </blockquote>
  )
}