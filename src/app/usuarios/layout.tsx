'use client';
import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="flex w-100 position-absolute" style={{ top: '8%' }}>
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main
        className="p-4"
        style={{
          minHeight: '100vh',
          background: '#d9d9d9',
        }}
      >
        <div style={{
          marginLeft: !isMenuOpen ? '80px' : '240px',
          transition: 'margin-left 0.3s',
          background: '#fff',
          height: '100vh',
          borderRadius: '5px'
        }}>
          {children}
        </div>
      </main>
    </div>
  );
}
