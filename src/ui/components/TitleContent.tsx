interface TitleProps {
    children: React.ReactNode
}

export default function TitleContent({children}: TitleProps) {
  return (
    <h3 className="text-2xl text-indigo-700 font-semibold">
        {children}
    </h3>
  )
}