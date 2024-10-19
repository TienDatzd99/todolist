import { DatePicker } from "antd";
import * as React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import AddNewTask from "../pages/AddNewTask";
import EditTask from "../pages/EditTask";
import Home from "../pages/Home";

function useRoutesCustom() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <div>
          <HomeTemplate /> 
        </div>
      ),
      children: [
        {
          path: "",
          element: <Home />, 
        },
        {
          path: "add_new",
          element: <AddNewTask />,
        },
        { path: "Edit_TasK", element: <EditTask /> },
      ],
    },
  ]);

  return element;
}
export default useRoutesCustom;
