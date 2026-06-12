import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import Lightfall from '../Lightfall';
import Footer from './Footer';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-white text-[#050816]' : 'text-white hover:bg-white/20 hover:text-white'
  }`;

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <Lightfall
          className="absolute inset-0"
          colors={['#A6C8FF', '#7C5CFF', '#FF9FFC']}
          backgroundColor="#050816"
          speed={0.52}
          streakCount={2}
          streakWidth={0.75}
          streakLength={1}
          glow={1.08}
          density={0.78}
          twinkle={1}
          zoom={2.35}
          backgroundGlow={0.3}
          opacity={1}
          mouseInteraction
          mouseStrength={0.45}
          mouseRadius={0.85}
          mouseDampening={0.12}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,159,252,0.12),transparent_25%),linear-gradient(180deg,rgba(5,8,22,0.06),rgba(5,8,22,0.88))]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#050816] shadow-lg shadow-black/30">
              <Gamepad2 className="h-5 w-5" />
            </span>
            <span>.DOT GAMES</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <NavLink to="/" className={navLinkClass} end>
              Ana səhifə
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              Haqqında
            </NavLink>
            <NavLink to="/login" className={navLinkClass}>
              Giriş
            </NavLink>
            <NavLink to="/register" className={navLinkClass}>
              Qeydiyyat
            </NavLink>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Link to="/login" className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Giriş
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
