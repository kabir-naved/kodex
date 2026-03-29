import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import SessionCard from "../components/SessionCard.jsx";
import SessionList from "../components/SessionList.jsx";
import SideBar from "../components/SideBar.jsx";
import SessionForm from "../components/SessionForm.jsx";
import { Zap, Sparkles, CheckSquare, PlusCircle } from "lucide-react";

function Dashboard() {
  // TOGGLE STATE
  const [toggle, setToggle] = useState(false);
  // FORM DATA STATE
  const [form, setForm] = useState([]);
  console.log(form);

  // SESSION CARD ITEMS
  const cardItems = [
    {
      id: 1,
      label: "Focus Time This Week",
      value: "00:00",
      icon: <Zap />,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-200",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      label: "AVERAGE FOCUS SCORE",
      value: "00:00",
      icon: <Sparkles />,
      color: "bg-yellow-600",
      hoverColor: "hover:bg-yellow-200",
      bgColor: "bg-yellow-100",
    },
    {
      id: 3,
      label: "Weekly Goal Progress",
      value: "00:00",
      icon: <CheckSquare />,
      color: "bg-red-600",
      hoverColor: "hover:bg-red-200",
      bgColor: "bg-red-100",
    },
  ];

  
  // HANDLE DELETE
const handleDelete = (id) => {
  setForm((prev) => prev.filter((item) => item.id !== id));
};

  return (
    <>
      <section className="h-screen flex max-w-[2120px] m-auto relative">
        {/* SIDEBAR */}
        <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4 pt-5 border-right">
          {/* LOGO */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <img src="logo.png" alt="LOGO" height={36} width={36} />
            <h2 className="font-headline font-black text-2xl tracking-tight text-primary hidden lg:block">
              Tracker
            </h2>
          </div>
          {/* SIDEBAR */}
          <SideBar />
        </aside>

        {/* CONTENT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-y-scroll ">
          {/* NAVBAR */}
          <Navbar />

          {/* RIGHT CARD */}
          <div className="p-6 lg:p-10 bg-gray-100 min-h-screen ">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Welcome Back, Scholar
              </h1>
              <p className="text-gray-500 mt-2">
                You have 3 deep work sessions scheduled for today.
              </p>
            </div>

            {/* DURATION COMPONENT */}
            <SessionCard cardItems={cardItems} />
            {/* FORM LIST COMPONENT */}
            <SessionList form={form} handleDelete={handleDelete} />
          </div>

          {/* BUTTON TO  TOGGLE FORM COMPONENT */}
          <button
            className=" absolute bottom-12 right-12 md:bottom-18 md:right-20 h-16 w-16 transition-all duration-300 ease-in-out
             bg-blue-600 hover:bg-blue-800 rounded-full flex items-center justify-center"
            onClick={() => {
              setToggle((prev) => !prev);
              console.log(toggle);
            }}
          >
            <PlusCircle
              size={30}
              className="transition-transform hover:scale-104 cursor-pointer text-white"
            />
          </button>
        </div>
      </section>
      {/* FORM COMPONENT */}
      {toggle && <SessionForm setToggle={setToggle} setForm={setForm} />}
    </>
  );
}

export default Dashboard;
