import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

const AppLayout = () => {
  return (
    <div className="bg-background h-screen">
    <div className="grid lg:grid-cols-5 h-full">
      <Sidebar className="hidden lg:block" />
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          <Outlet />
          <Toaster />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AppLayout;