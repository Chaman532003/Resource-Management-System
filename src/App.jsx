import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const showToast = () => {
    toast.success('All modules installed successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-6xl">
        
        {/* Left Panel: Title & Roles */}
        <div className="flex-1 p-8 bg-blue-50">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            Resource Management
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Manage roles and responsibilities across departments efficiently.
          </p>

          <ul className="space-y-3 text-gray-800 text-lg">
            <li className="bg-white px-5 py-3 rounded-md shadow">👨‍💼 Employee</li>
            <li className="bg-white px-5 py-3 rounded-md shadow">🧑‍🏫 HR / L&D</li>
            <li className="bg-white px-5 py-3 rounded-md shadow">📈 Project Manager</li>
            <li className="bg-white px-5 py-3 rounded-md shadow">🔁 Resource Manager</li>
            <li className="bg-white px-5 py-3 rounded-md shadow">🔐 Admin</li>
          </ul>

          <button
            onClick={showToast}
            className="mt-8 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Show Toast
          </button>
        </div>

        {/* Right Panel: Installed Modules */}
        <div className="w-full lg:w-80 p-8 bg-gray-800 text-white">
          <h2 className="text-2xl font-semibold mb-4">🔧 Installed Modules</h2>
          <ul className="space-y-3 text-base">
            <li className="bg-gray-700 px-4 py-2 rounded">⚡ Vite</li>
            <li className="bg-gray-700 px-4 py-2 rounded">🎨 Tailwind CSS</li>
            <li className="bg-gray-700 px-4 py-2 rounded">🧩 Shadcn UI</li>
            <li className="bg-gray-700 px-4 py-2 rounded">🔗 Axios</li>
            <li className="bg-gray-700 px-4 py-2 rounded">🔄 Redux</li>
            <li className="bg-gray-700 px-4 py-2 rounded">🔔 React Toastify</li>
            <li className="bg-gray-700 px-4 py-2 rounded">🧹 ESLint</li>
          </ul>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
}

export default App;
