interface Code {
    children: React.ReactNode
}

export default function Code({children}: Code) {
  return (
    <pre className="my-2 bg-gray-800 p-4 rounded-lg text-sm text-green-300">
        <code>
            {children}
        </code>
    </pre>
  )
}