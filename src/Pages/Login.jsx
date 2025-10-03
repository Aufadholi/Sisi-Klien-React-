import { useState } from "react";
import { useNavigate } from "react-router-dom";   // ⬅️ Tambahkan ini
import AuthLayout from "../Template/AuthLayout";
import Card from "../Organisms/Card";
import Form from "../Molecules/Form";
import Button from "../Atoms/Button";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ⬅️ Hook untuk pindah halaman

  const fields = [
    { name: "username", label: "Username", type: "text", placeholder: "Enter username", value: username, onChange: (e) => setUsername(e.target.value) },
    { name: "password", label: "Password", type: "password", placeholder: "Enter password", value: password, onChange: (e) => setPassword(e.target.value) },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // validasi sederhana
    if (username === "admin" && password === "123") {
      navigate("/admin");  // ⬅️ pindah ke halaman admin
    } else {
      alert("Username atau Password salah!");
    }
  };

  return (
    <AuthLayout>
      <Card>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <Form fields={fields} onSubmit={handleSubmit}>
          <Button type="submit">Login</Button>
        </Form>
      </Card>
    </AuthLayout>
  );
}
