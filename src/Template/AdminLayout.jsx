import Sidebar from "../Organisms/Sidebar";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1 bg-gray-100">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
