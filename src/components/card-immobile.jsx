import { ArrowRight, Trash2 } from 'lucide-react'

export function CardImmobile({
  item,
  handleNavigateToDetails,
  handleDeleteImmobile,
}) {
  return (
    <div
      key={item.id}
      className="bg-zinc-800 rounded-md px-5 py-6 border border-lime-400 space-y-3"
    >
      <h2 className="text-zinc-100 text-2xl line-clamp-1 font-semibold">
        {item.title}
      </h2>
      <p className="line-clamp-3">{item.description}</p>

      <div className="flex items-center justify-between">
        <button
          onClick={() => handleNavigateToDetails(item.id)}
          className="text-lime-400 text-sm font-semibold flex items-center gap-2"
        >
          Mais detalhes
          <ArrowRight className="size-5 text-lime-400" />
        </button>

        <button onClick={() => handleDeleteImmobile(item.id)}>
          <Trash2 className="size-5 text-zinc-100 hover:text-red-500" />
        </button>
      </div>
    </div>
  )
}
