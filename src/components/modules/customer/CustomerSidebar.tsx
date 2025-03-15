import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomerSidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "My Orders", path: "/my-orders" },
   
  ];

  return (
    <aside className="bg-gray-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Customer Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block px-4 py-2 rounded transition ${
                  pathname === item.path ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default CustomerSidebar;
