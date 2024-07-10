import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function Layout() {
  return (
    <div className="max-w-3xl w-full m-auto px-4 space-y-11">
      <Header/>
      <Outlet/>
    </div>
  )
}