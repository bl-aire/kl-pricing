import {RouterProvider} from "react-router-dom";

import {appRouter} from "@/constants/router";

import { useHotjar } from './hooks/useHotjar';

function App() {
  useHotjar();

  return (
    <>
      {/* Your App content */}
    </>
  );
}

export default App;


export default function MainApp() { 
  return <RouterProvider router={appRouter} />
}
