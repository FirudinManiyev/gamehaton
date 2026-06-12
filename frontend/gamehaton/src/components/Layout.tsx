import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-white text-[#050816]' : 'text-white/75 hover:bg-white/10 hover:text-white'
  }`;

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#050816] shadow-lg shadow-black/30">
              <Gamepad2 className="h-5 w-5" />
            </span>
            <span>.DOT GAMES</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>
            <NavLink to="/register" className={navLinkClass}>
              Register
            </NavLink>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Link to="/login" className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80">
              Login
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
