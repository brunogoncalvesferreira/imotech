import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'
import { CardImmobile } from '../components/card-immobile'
import { CreateImmobileModal } from '../components/create-immobile-modal'

export function Home() {
  const navigate = useNavigate()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [immobile, setImmobile] = useState([])

  function handleOpenModal() {
    setIsOpenModal(true)
  }

  function closeModal() {
    setIsOpenModal(false)
  }

  async function createImmobile(event) {
    event.preventDefault()

    const data = {
      id: crypto.randomUUID(),
      title,
      description,
      createdAt: new Date(),
    }

    await api
      .post('/immobile', data)
      .then(() => {
        fetchImmobile()
        setIsOpenModal(false)
      })
      .catch((error) => console.log(error))
  }

  function fetchImmobile() {
    api
      .get('/immobile')
      .then((response) => setImmobile(response.data))
      .catch((error) => console.log(error))
  }

  function handleDeleteImmobile(id) {
    api
      .delete(`/immobile/${id}`)
      .then(() => fetchImmobile())
      .catch((error) => console.log(error))
  }

  function handleNavigateToDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    fetchImmobile()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-zinc-100 font-semibold">
          Lista de imóveis
        </h1>

        <button
          onClick={handleOpenModal}
          className="flex items-center gap-2 bg-lime-400 rounded-md py-3 px-5 text-zinc-900 font-bold hover:bg-lime-500"
        >
          <Plus className="size-5 text-zinc-900" />
          Novo imóvel
        </button>
      </div>

      <div className="w-full h-px bg-zinc-800 my-11" />

      <div className="grid grid-cols-2 gap-2">
        {immobile.map((item) => (
          <CardImmobile
            key={item.id}
            item={item}
            handleDeleteImmobile={handleDeleteImmobile}
            handleNavigateToDetails={handleNavigateToDetails}
          />
        ))}

        {isOpenModal && (
          <CreateImmobileModal
            closeModal={closeModal}
            setTitle={setTitle}
            setDescription={setDescription}
            createImmobile={createImmobile}
          />
        )}
      </div>
    </div>
  )
}
