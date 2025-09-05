"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Simulação de login (substituir por autenticação real)
    if (email === "demo@demo.com" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ name: "Demo User", email }));
      router.push("/conta");
    } else {
      setError("Credenciais inválidas");
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9fafb" }}>
      <form onSubmit={handleLogin} style={{ background: "white", padding: 32, borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", minWidth: 320 }}>
        <h2 style={{ marginBottom: 24, textAlign: "center" }}>Iniciar Sessão</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
          required
        />
        {error && <div style={{ color: "#dc2626", marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ width: "100%", padding: 12, borderRadius: 6, background: "#744012", color: "white", fontWeight: 600, border: "none" }}>
          Entrar
        </button>
        <button
          type="button"
          style={{ width: "100%", padding: 12, borderRadius: 6, background: "#bd681cff", color: "white", fontWeight: 600, border: "none", marginTop: 12 }}
          onClick={() => window.location.href = '/registo'}
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
}
