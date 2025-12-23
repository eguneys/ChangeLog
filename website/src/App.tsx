import { type ChangeLog, changelog } from 'changelog'

function App() {

  let cl: ChangeLog = changelog()

  return (
    <>
      <div class="min-h-screen selection:bg-[#5f6fff] selection:text-white bg-[#fcfcfc]">
        <h1 class="text-4xl font-bold tracking-tighter leading-none mb-3">
          Hello from ChangeLog <span class="text-[#ff5f5f]">`{cl}`</span>
        </h1>
      </div>
    </>
  )
}

export default App
