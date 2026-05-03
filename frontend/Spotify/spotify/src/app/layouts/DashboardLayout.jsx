import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../features/dashboard/ui/components/Navbar";
import Sidebar from "../../features/dashboard/ui/components/SideBar";
import { Group, Panel } from "react-resizable-panels";
import Player from "../../features/player/ui/Player";
// import Player from "../../features/player/ui/components/Player";

function DashboardLayout() {
      const [collapsed, setCollapsed] = useState(false);
      
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <div className="h-[80%]">
        <Group className="gap-2">
          <Panel
            // defaultSize={8}
            maxSize={"26%"}
            minSize={"18%"}
            className="bg-[#121212] ml-3 rounded-lg"
          >
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          </Panel>
          <Panel className="bg-[#121212] p-5 custom-scrollbar ">
            <Outlet />
          </Panel>
          <Panel
            maxSize={"20%"}
            minSize={"20%"}
            className="bg-[#121212] mr-3 rounded-lg p-3"
          >
            Right SIDE
          </Panel>
        </Group>
      </div>
      <Player />
    </div>
  );
}

export default DashboardLayout;
