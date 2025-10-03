import AdminLayout from "../Template/AdminLayout";

export default function AdminPage() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold">Selamat Datang di Halaman Admin</h2>
      <p className="mt-2">Ini adalah dashboard admin.</p>
    </AdminLayout>
  );
}
