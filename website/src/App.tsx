import { type ChangeLog, changelog } from 'changelog'
import { createSignal } from 'solid-js'

function App() {

  createSignal()
  let cl: ChangeLog = changelog()

  return (
    <>
      Hello From ChangeLog {cl}
    </>
  )
}

export default App
