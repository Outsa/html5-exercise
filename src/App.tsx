import './index.css'
import { faTrash, faPen, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {

  library.add(faTrash, faPen, faArrowUp, faArrowDown)

  return (
    <>
      <Header/>
      <Content/>
    </> 
  )
} 

export default App