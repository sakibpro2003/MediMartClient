"use client";
import AdminSidebar from "@/components/modules/admin/AdminSidebar";
import Navbar from "@/components/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Navbar></Navbar>
      <div className="flex min-h-screen">
        {/* Sidebar for admin navigation */}
        <AdminSidebar />
        <main className="flex-grow p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
