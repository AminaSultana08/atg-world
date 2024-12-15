import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="d-flex justify-content-center align-items-start ">
      <Outlet />
    </div>
  );
};

export default Main;
