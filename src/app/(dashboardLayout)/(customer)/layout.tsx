import Sidebar from "@/components/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar for admin navigation */}
          <Sidebar />
          <main className="flex-grow p-6 bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  );
}
