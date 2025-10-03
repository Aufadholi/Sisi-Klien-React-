export default function Header() {
    return(
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <button className="text-red-500">Logout</button>
        </header>
    );
}