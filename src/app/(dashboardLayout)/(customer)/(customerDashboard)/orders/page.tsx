// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Menu, User, ShoppingCart, Settings, LogOut } from "lucide-react";
// import Link from "next/link";

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={cn(
//           "w-64 bg-white shadow-lg transition-all duration-300 p-4 space-y-6",
//           isSidebarOpen ? "block" : "hidden md:block"
//         )}
//       >
//         <h2 className="text-xl font-semibold text-center">Dashboard</h2>
//         <nav className="mt-6 space-y-4">
//           <Link href="/dashboard/profile">
//             <Button variant="ghost" className="w-full justify-start">
//               <User className="mr-2" /> Profile
//             </Button>
//           </Link>
//           <Link href="/dashboard/orders">
//             <Button variant="ghost" className="w-full justify-start">
//               <ShoppingCart className="mr-2" /> Orders
//             </Button>
//           </Link>
//           <Link href="/dashboard/settings">
//             <Button variant="ghost" className="w-full justify-start">
//               <Settings className="mr-2" /> Settings
//             </Button>
//           </Link>
//           <Button variant="destructive" className="w-full justify-start">
//             <LogOut className="mr-2" /> Logout
//           </Button>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow p-4 flex items-center justify-between">
//           <Button variant="outline" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//             <Menu />
//           </Button>
//           <h2 className="text-xl font-semibold">Dashboard</h2>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-6">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
