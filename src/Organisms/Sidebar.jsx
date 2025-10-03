export default function Sidebar(){
    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
            <h2 className="text-lg font-bold mb-6">Admin Menu</h2>
            <ul>
                <li className="mb-2"><a href="/admin" className="hover:underline">Dashboard</a></li>
                <li><a href="#" className="hover:underline">Settings</a></li>
            </ul>
        </aside>
    );
}