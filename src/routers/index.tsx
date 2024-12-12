import { createBrowserRouter } from "react-router-dom";
import * as RouteComponent from "../routers/route-components";
import { ROUTESCONSTANT } from "../routes/routesConstant";

export const AppRouters = createBrowserRouter([
  {
    path: ROUTESCONSTANT.SIDEBAR_PAGE, // Main component for Goal Page
    element: <RouteComponent.Sidebar />,
  },
  {
    path: ROUTESCONSTANT.HOME_PAGE, // Main component for Goal Page
    element: <RouteComponent.Home />,
  },
  {
    path: ROUTESCONSTANT.ABOUT_PAGE, // Main component for Goal Page
    element: <RouteComponent.About />,
  },
  {
    path: ROUTESCONSTANT.RESUME_PAGE, // Main component for Goal Page
    element: <RouteComponent.Resume/>,
  },
  {
    path: ROUTESCONSTANT.CONTACT_PAGE, // Main component for Goal Page
    element: <RouteComponent.ContactForm/>,
  },
  {
    path: ROUTESCONSTANT.DASHBOARD_PAGE, // Main component for Goal Page
    element: <RouteComponent.Dashboard/>,
  },
]);
