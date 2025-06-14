import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <input
        className="rounded-md p-2 text-black"
        placeholder="Enter prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  )
}
