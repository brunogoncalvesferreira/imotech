import { X } from 'lucide-react'

export function CreateImmobileModal({
  closeModal,
  setTitle,
  setDescription,
  createImmobile,
}) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[768px] bg-zinc-800 rounded-md px-5 py-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-zinc-100 text-2xl font-semibold">
            Criar novo imóvel
          </h2>
          <button onClick={closeModal}>
            <X className="size-5 text-zinc-100" />
          </button>
        </div>
        <p className="text-zinc-300 text-sm font-medium">
          Preencha abaixo para criação do imóvel para venda ou aluguel.
        </p>

        <form className="space-y-3 flex flex-col">
          <input
            type="text"
            className="bg-zinc-900 px-8 py-4 rounded-md placeholder:text-zinc-300 outline-none focus-within:outline-lime-400"
            placeholder="Titulo do imóvel"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="bg-zinc-900 px-8 py-4 h-24 rounded-md placeholder:text-zinc-300 outline-none focus-within:outline-lime-400 resize-none"
            placeholder="Descrição do imóvel"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button
            onClick={createImmobile}
            className="flex items-center justify-center gap-2 bg-lime-400 rounded-md py-3 px-5 text-zinc-900 font-bold hover:bg-lime-500"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
