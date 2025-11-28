interface ListProps {
    children: React.ReactNode,
    ml?: string
}

export default function List({children, ml = 'ml-8'}: ListProps) {
  return (
    <>
    <ul className={`list-disc ${ml}`}>
        {children}
    </ul>
    </>
  )
}