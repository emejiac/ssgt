'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Sidebar({ isMenuOpen, setIsMenuOpen }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Inicio', path: '/dashboard' },
    { name: 'Usuarios', path: '/usuarios' },
    { name: 'Reportes', path: '/reportes' },
    { name: 'Configuración', path: '/configuracion' },
  ];

  return (
    <div
      className={`d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed ${
        !isMenuOpen ? 'sidebar-collapsed' : ''
      }`}
      style={{
        width: !isMenuOpen ? '80px' : '240px',
        transition: 'width 0.3s',
      }}
    >
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h5 className="m-0 fw-bold">{isMenuOpen && 'Mi Panel'}</h5>
        <button
          className="btn btn-sm btn-outline-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="Contraer/Expandir"
        >
          {!isMenuOpen ? '»' : '«'}
        </button>
      </div>

      {/* Enlaces */}
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item mb-2">
            <Link
              href={item.path}
              className={`nav-link text-white ${
                pathname === item.path ? 'active bg-primary' : ''
              }`}
            >
              {!isMenuOpen ? item.name.charAt(0) : item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-auto text-center small opacity-75">
        {!isMenuOpen && <span>© 2025 MiApp</span>}
      </div>
    </div>
  );
}
