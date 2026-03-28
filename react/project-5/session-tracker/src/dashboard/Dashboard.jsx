import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import SessionCard from "../components/SessionCard.jsx";
import SessionList from "../components/SessionList.jsx";
import SideBar from "../components/SideBar.jsx";
import { PlusCircle } from "lucide-react";
import SessionForm from "../components/SessionForm.jsx";

function Dashboard() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="h-screen flex">
        {/* SIDEBAR */}
        <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4 pt-5 border-right">
          {/* LOGO */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <img src="logo.png" alt="LOGO" height={36} width={36} />
            <h2 className="font-headline font-black text-2xl tracking-tight text-primary hidden lg:block">
              Tracker
            </h2>
          </div>

          <SideBar />
        </aside>

        {/* CONTENT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-y-scroll">
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

            {/* DURATIONS */}
            <SessionCard />
            <SessionList />
          </div>
        </div>

        <button
          className="fixed bottom-12 right-12 md:bottom-18 md:right-20 h-20 w-20 transition-all duration-300 ease-in-out bg-blue-600 hover:bg-blue-800 rounded-full flex items-center justify-center"
          onClick={() => {
            setToggle((prev) => !prev);
            console.log(toggle);
          }}
        >
          <PlusCircle
            size={36}
            className="transition-transform hover:scale-104 cursor-pointer text-white"
          />
        </button>

        {toggle && <SessionForm setToggle={setToggle}/>}
      </section>
    </>
  );
}

export default Dashboard;
