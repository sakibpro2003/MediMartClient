import { getSuccessfulPayments } from "@/services/Orders";
import Image from "next/image";

const Page = async () => {
  const successfulPayments = await getSuccessfulPayments();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center mb-5">Successful Payments</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-green-600 text-white text-xs">
            <tr>
              <th className="border px-3 py-2">#</th>
              <th className="border px-3 py-2">Customer</th>
              <th className="border px-3 py-2">Total ($)</th>
              <th className="border px-3 py-2">Payment Method</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Created At</th>
              <th className="border px-3 py-2">Updated At</th>
              <th className="border px-3 py-2">Products</th>
            </tr>
          </thead>
          <tbody>
            {successfulPayments?.data?.length > 0 ? (
              successfulPayments.data.map((order, index) => (
                <tr key={order._id} className="text-center hover:bg-gray-100 transition">
                  <td className="border px-3 py-2">{index + 1}</td>
                  <td className="border px-3 py-2">
                    <div className="text-left">
                      <p className="font-semibold">{order.user.name}</p>
                      <p className="text-xs text-gray-500">{order.user.email}</p>
                      <p className="text-xs text-gray-500">{order.user.phone}</p>
                    </div>
                  </td>
                  <td className="border px-3 py-2 font-semibold">${order.totalAmount}</td>
                  <td className="border px-3 py-2">{order.paymentMethod}</td>
                  <td className={`border px-3 py-2 font-bold uppercase text-xs py-1 ${order.status === "completed" ? "text-green-500" : "text-red-500"}`}>
                    {order.status}
                  </td>
                  <td className="border px-3 py-2 text-xs text-gray-600">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                  <td className="border px-3 py-2 text-xs text-gray-600">
                    {new Date(order.updatedAt).toLocaleString()}
                  </td>
                  <td className="border px-3 py-2 text-left">
                    {order.products.map((product, i) => (
                      <div key={i} className="flex items-center space-x-2 border-b py-2">
                        <Image
                          width={40}
                          height={40}
                          src={product.product.image}
                          alt={product.product.name}
                          className="rounded shadow-md"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-gray-700">{product.product.name}</p>
                          <p className="text-xs text-gray-500">Qty: {product.quantity} | ${product.totalPrice}</p>
                        </div>
                      </div>
                    ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No successful payments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
