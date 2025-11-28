interface SpanProps {
    children: React.ReactNode,
    text?: string,
    extra?: string
}

export default function Span({children, text = 'text-blue-400'}: SpanProps) {
  return (
    <span className={`${text} font-bold`}>
        {children}
    </span>
  )
}