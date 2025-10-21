'use client';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/login';
  };

  return (
    <ProtectedRoute>
      <div className="container-fluid">
        <h1 className="mb-4">Dashboard Principal</h1>
        <p>Bienvenido al panel de administración 👋</p>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </ProtectedRoute>
  );
}
