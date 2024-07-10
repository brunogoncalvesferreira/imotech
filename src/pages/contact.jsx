import { ArrowRight, AtSign, Phone, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-zinc-100 font-semibold">
          Detalhe do imóvel
        </h1>

        <Link
          to={-1}
          className="flex items-center gap-2 text-lime-400 hover:text-lime-500"
        >
          Voltar
          <ArrowRight className="size-5" />
        </Link>
      </div>

      <div className="w-full h-px bg-zinc-800 my-11" />

      <form className="flex flex-col space-y-5">
        <p className="text-zinc-300">Preencha o formulário abaixo</p>

        <div className="flex items-center gap-2 bg-zinc-900 px-6 py-5 rounded-md">
          <User className="text-zinc-100 size-5" />
          <input
            className="bg-transparent flex-1 outline-none"
            type="text"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="flex items-center gap-2 bg-zinc-900 px-6 py-5 rounded-md">
          <AtSign className="text-zinc-100 size-5" />
          <input
            className="bg-transparent flex-1 outline-none"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="flex items-center gap-2 bg-zinc-900 px-6 py-5 rounded-md">
          <Phone className="text-zinc-100 size-5" />
          <input
            className="bg-transparent flex-1 outline-none"
            type="text"
            placeholder="Digite seu telefone"
          />
        </div>

        <button className="flex items-center justify-center gap-2 bg-lime-400 rounded-md py-3 px-5 text-zinc-900 font-bold hover:bg-lime-500">
          Enviar
        </button>
      </form>
    </div>
  )
}
