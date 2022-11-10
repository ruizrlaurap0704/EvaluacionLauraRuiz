import { useState } from 'react'
import './App.css'
import datos from './componentes/data.json'
import Estatus from './componentes/Estatus'
import Posteos from './componentes/Posteos'

// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

const App = () => {

  const [like,setLike] = useState(0)

  const likes = () => {
    setLike(like + 1)
  }

  return (
    <div className="App">
      {datos.map((item) => <Estatus key = {item.id} informacion = {item}/> )}
      <Posteos likess={likes} info = {datos}/>
    </div>
  )
}

export default App
