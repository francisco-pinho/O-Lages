"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ContaPage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      router.replace("/login");
    }
  }, [router]);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showDropdown]);

  function handleLogout() {
    localStorage.removeItem("user");
    router.replace("/login");
  }

  if (!user) return null;

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f9fafb" }}>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setShowDropdown((v) => !v)}
          style={{ padding: 16, borderRadius: 8, background: "#744012", color: "white", fontWeight: 600, border: "none", minWidth: 180 }}
        >
          {user.name}
        </button>
        {showDropdown && (
          <div ref={dropdownRef} style={{ position: "absolute", top: 56, left: 0, background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.10)", borderRadius: 8, minWidth: 200, zIndex: 10 }}>
            <div style={{ padding: 16, borderBottom: "1px solid #eee", fontWeight: 500 }}>{user.name}</div>
            <button style={{ width: "100%", padding: 12, background: "none", border: "none", textAlign: "left", color: "#744012", fontWeight: 500 }} onClick={() => alert('Definições em breve!')}>
              Definições
            </button>
            <button style={{ width: "100%", padding: 12, background: "none", border: "none", textAlign: "left", color: "#dc2626", fontWeight: 500 }} onClick={handleLogout}>
              Sair
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
