import {RouterProvider} from "react-router-dom";

import {appRouter} from "@/constants/router";

export default function MainApp() { 
  return <RouterProvider router={appRouter} />
}
