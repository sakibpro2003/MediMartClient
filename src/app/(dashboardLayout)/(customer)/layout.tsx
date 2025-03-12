import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function CustomerLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    );
  }
  