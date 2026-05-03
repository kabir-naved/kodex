import Dashboard from "./pages/Dashboard.jsx";
import { SessionContext } from "./context/SessionContext.jsx";



const App = () => {
  return (
   <>
   {/* DASHBOARD */}
    <SessionContext>
      <Dashboard />
    </SessionContext>
   </>
  );
};

export default App;
