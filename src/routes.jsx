import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import LisUsers from "./pages/ListUsers";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/lista-de-usuarios",
		element: <LisUsers />,
	},
]);

export default router;
