"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nif, setNif] = useState("");
  const [morada, setMorada] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    const errors: { [key: string]: string } = {};
    if (!name) errors.name = "Preencha este campo";
    if (!email) errors.email = "Preencha este campo";
    if (!nif) errors.nif = "Preencha este campo";
    else if (!/^\d{9}$/.test(nif)) errors.nif = "O NIF deve ter 9 dígitos";
    if (!morada) errors.morada = "Preencha este campo";
    if (!password) errors.password = "Preencha este campo";
    if (!confirm) errors.confirm = "Preencha este campo";
    if (password && confirm && password !== confirm) errors.confirm = "As passwords não coincidem";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;
    // Simulação de registo (substituir por backend real)
    localStorage.setItem("user", JSON.stringify({ name, email, nif, morada }));
    router.push("/conta");
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9fafb" }}>
      <form
        onSubmit={handleRegister}
        style={{
          background: "white",
          padding: 32,
          borderRadius: 12,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          minWidth: 320,
          minHeight: 520,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h2 style={{ marginBottom: 24, textAlign: "center" }}>Criar Conta</h2>
        {fieldErrors.name && <div style={{ color: '#dc2626', fontSize: 13, marginBottom: 2 }}>{fieldErrors.name}</div>}
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
        />
        {fieldErrors.email && <div style={{ color: '#dc2626', fontSize: 13, marginBottom: 2 }}>{fieldErrors.email}</div>}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
        />
        {fieldErrors.nif && <div style={{ color: '#dc2626', fontSize: 13, marginBottom: 2 }}>{fieldErrors.nif}</div>}
        <input
          type="text"
          placeholder="NIF"
          value={nif}
          onChange={e => setNif(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
        />
        {fieldErrors.morada && <div style={{ color: '#dc2626', fontSize: 13, marginBottom: 2 }}>{fieldErrors.morada}</div>}
        <input
          type="text"
          placeholder="Morada"
          value={morada}
          onChange={e => setMorada(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
        />
        {fieldErrors.password && <div style={{ color: '#dc2626', fontSize: 13, marginBottom: 2 }}>{fieldErrors.password}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
        />
        {fieldErrors.confirm && <div style={{ color: '#dc2626', fontSize: 13, marginBottom: 2 }}>{fieldErrors.confirm}</div>}
        <input
          type="password"
          placeholder="Confirmar Password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
        />
        <button type="submit" style={{ width: "100%", padding: 12, borderRadius: 6, background: "#bd681cff", color: "white", fontWeight: 600, border: "none" }}>
          Criar Conta
        </button>
      </form>
    </div>
  );
}
