import Contexto from "components/contexts/Contexto"
import { useContext } from "react"

function AnimalGridLoading() {

  const {data} = useContext(Contexto)

  return (
    <img className="h-64 w-64" src={`${data.config.dirs.images}spinner_64x64.gif`} alt="Loading..." />
  )
}

export default AnimalGridLoading
