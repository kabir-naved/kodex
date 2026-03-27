import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import CreateForm from "./components/CreateForm.jsx";
import ListForm from "./components/ListForm.jsx";

function App() {
  console.log("App-> Rendering");

  // toggle state
  const [showForm, setShowForm] = useState(false);
  // user input data state for store
  let [data, setData] = useState([]);
  // UpdateUser
  let [updateUser, setUpdateUser] = useState(null);

  //  handleDelete
  const handleDelete = (indexToDelete) => {
    setData((prev) => prev.filter((_, index) => index !== indexToDelete));
    console.log(index);
  };

  return (
    <div>
      <div className=" w-full h-screen bg-(--background-color)" id="container">
        {/* Navbar */}
        <Navbar setShowForm={setShowForm} id="navbar" showForm={showForm} />

        {showForm ? (
          // Createform
          <CreateForm
            showForm={showForm}
            setShowForm={setShowForm}
            setData={setData}
            updateUser={updateUser}
          />
        ) : data.length === 0 ? (
          //  Empty state UI
          <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
            <div className="text-5xl">📭</div>
            <h2 className="text-xl font-semibold mt-4">No Posts Yet</h2>
            <p className="text-sm mt-2 text-center max-w-sm">
              Start sharing your ideas. Click the "Create Post" button above.
            </p>
          </div>
        ) : (
          // Show list
          data.map((item, index) => (
            // Listform
            <ListForm
              key={index}
              data={item}
              index={index}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              showForm={showForm}
              setUpdateUser={setUpdateUser}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
