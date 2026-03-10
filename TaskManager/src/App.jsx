import StaticDemo from "./components/StaticDemo"
import FormDemo from "./components/FormDemo"
import UserForm from "./components/UserForm"
import TaskManger from "./components/TaskManger"
import SideEffect from "./components/SideEffect"

function App(){

  return(

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10">

      {/* Page Title */}

      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        React Practice Dashboard
      </h1>


      {/* Component Container */}

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">

        <TaskManger />

      </div>

    </div>

  )
}

export default App