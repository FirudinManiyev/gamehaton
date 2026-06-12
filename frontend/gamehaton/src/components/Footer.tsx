import { Mail, Gamepad2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050816]/90 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#050816]">
              <Gamepad2 className="h-5 w-5" />
            </span>
            .DOT GAMES
          </div>
          <p className="max-w-lg text-sm leading-6 text-white/60">
            Oyun kitabxananızı daha ağıllı idarə edin, qərar vermə vaxtını azaldın və hər gün üçün uyğun oyunu daha rahat tapın.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
          <Link className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:bg-white/10 hover:text-white" to="/about">
            Haqqında
          </Link>
          <Link className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:bg-white/10 hover:text-white" to="/login">
            Giriş
          </Link>
          <Link className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:bg-white/10 hover:text-white" to="/register">
            Qeydiyyat
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 .DOT GAMES. Bütün hüquqlar qorunur.</p>
        <div className="flex items-center gap-4">
          <a className="inline-flex items-center gap-2 hover:text-white" href="mailto:hello@dotgames.local">
            <Mail className="h-4 w-4" />
            hello@dotgames.local
          </a>
          <a className="inline-flex items-center gap-2 hover:text-white" href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
