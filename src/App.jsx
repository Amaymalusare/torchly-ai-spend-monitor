// App.jsx  —  Root component: wires sidebar, topbar, and views together
import { useState } from "react";
import T from "./tokens";
import Sidebar from "./components/Sidebar";
import Topbar  from "./components/Topbar";
import OverviewView   from "./views/OverviewView";
import ProvidersView  from "./views/ProvidersView";
import FeaturesView   from "./views/FeaturesView";
import TeamsView      from "./views/TeamsView";
import AlertsView     from "./views/AlertsView";
import RouterView     from "./views/RouterView";

const VIEWS = {
  overview:  <OverviewView  />,
  providers: <ProvidersView />,
  features:  <FeaturesView  />,
  teams:     <TeamsView     />,
  alerts:    <AlertsView    />,
  router:    <RouterView    />,
};

// Load fonts once at the module level
const fontLink = document.createElement("link");
fontLink.rel  = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap";
document.head.appendChild(fontLink);

export default function App() {
  const [active, setActive] = useState("overview");

  return (
    <>
      <style>{`
        @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.3 } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${T.bg}; }
        button { cursor: pointer; }
        button:focus { outline: none; }
        tr { transition: background 0.1s; }
        ::-webkit-scrollbar       { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${T.border}; border-radius: 2px; }
      `}</style>

      <div style={{ display: "flex", height: "100vh", background: T.bg, overflow: "hidden" }}>
        <Sidebar active={active} setActive={setActive} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          <Topbar active={active} />
          <main style={{ flex: 1, overflowY: "auto", padding: "22px 26px", background: T.bg }}>
            {VIEWS[active]}
          </main>
        </div>
      </div>
    </>
  );
}
