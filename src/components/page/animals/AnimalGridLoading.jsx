import Contexto from "components/contexts/Contexto"
import { useContext } from "react"

function AnimalGridLoading() {

  const {data} = useContext(Contexto)

  return (
    <img className="h-64 w-64" src={`${data.config.dirs.images}spinner.gif`} alt="Loading..." />
  )
}

export default AnimalGridLoading
