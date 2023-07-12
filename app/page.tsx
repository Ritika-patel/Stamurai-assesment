import Image from 'next/image'
import AddTask from '@/components/AddTask'
import Todos from '@/components/Todos'

export default function Home() {
  return (
 
      <div className="bg-bla">
          {/* <h1 className={`text-4xl font-semibold`}>
            Task Management
          </h1>
          <p className={`mb-3 mt-2 text-2xl text-sm opacity-50`}>
            Include functionality to add, edit, view and delete tasks
          </p> */}
          <AddTask />
          {/* <Todos /> */}
          {/* className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30" */}
      </div>
  )
}
