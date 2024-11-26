import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="px-3 py-4 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center mb-5">
          <SidebarTrigger className="flex md:hidden" label={<span>PB.Bintang Mulia</span>} />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}