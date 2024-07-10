/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../lib/axios'
import { useEffect, useState } from 'react'

export function Details() {
  const params = useParams()

  const [data, setData] = useState({})

  async function getImmobileDetails() {
    await api
      .get(`/immobile/${params.id}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getImmobileDetails()
  }, [])

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

      <div className="space-y-7">
        <h2 className="text-zinc-100 text-3xl font-semibold">{data.title}</h2>
        <p className="text-zinc-300 leading-relaxed">{data.description}</p>
      </div>
    </div>
  )
}
