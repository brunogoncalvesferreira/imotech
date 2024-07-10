import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-zinc-800 rounded-md flex items-center justify-between mt-11 px-4 py-6">
      <img src="/logo.svg" alt="Logo da empresa Imotech" />

      <Link className="text-zinc-100 font-medium" to="/contato">
        Contato
      </Link>
    </header>
  )
}
