import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';

const apiBaseUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';

function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const mode = useMemo(() => (location.pathname === '/register' ? 'register' : 'login'), [location.pathname]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Göndərilir...' });

    const payload =
      mode === 'register'
        ? { name: form.name, email: form.email, password: form.password }
        : { email: form.email, password: form.password };

    try {
      const response = await fetch(`${apiBaseUrl}/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { message?: string; token?: string; user?: { name?: string; email?: string } };

      if (!response.ok) {
        throw new Error(data.message ?? 'Sorğu uğursuz oldu');
      }

      if (data.token) {
        localStorage.setItem('gamehaton_token', data.token);
      }
      if (data.user) {
        localStorage.setItem('gamehaton_user', JSON.stringify(data.user));
      }

      setStatus({ type: 'success', message: data.message ?? 'Uğurla tamamlandı' });
      navigate('/');
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Gözlənilməz xəta'
      });
    }
  };

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">{mode === 'register' ? 'QEYDİYYAT' : 'GİRİŞ'}</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              {mode === 'register' ? 'Hesab yaradın' : 'Xoş gəldiniz'}
            </h1>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Giriş və qeydiyyat sistemi backend API ilə bağlıdır. Bu forma məlumatı serverə göndərir və uğurlu olduqda sizi əsas səhifəyə qaytarır.
            </p>
            <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#A6C8FF]/20 via-[#7C5CFF]/20 to-[#FF9FFC]/20 p-5">
              <p className="text-sm text-white/65">Bağlı axın</p>
              <p className="mt-2 text-lg font-semibold leading-7">
                Hesab sizə token saxlamağa, profil məlumatını qorumağa və gələcəkdə kitabxananı yadda saxlamağa kömək edəcək.
              </p>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-[#0b1022]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8">
            <form className="space-y-5" onSubmit={submit}>
              {mode === 'register' && (
                <label className="block">
                  <span className="mb-2 block text-sm text-white/70">Ad</span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-white/30"
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Adınız"
                    required
                  />
                </label>
              )}

              <label className="block">
                <span className="mb-2 block text-sm text-white/70">E-poçt</span>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-white/30"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="siz@example.com"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-white/70">Şifrə</span>
                <input
                  type="password"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-white/30"
                  value={form.password}
                  onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </label>

              {status.message && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status.type === 'error'
                      ? 'border-red-400/30 bg-red-500/10 text-red-100'
                      : status.type === 'success'
                        ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-100'
                        : 'border-white/10 bg-white/5 text-white/70'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#A6C8FF] to-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50"
              >
                {mode === 'register' ? 'Hesab yarat' : 'Giriş et'}
              </button>

              <p className="text-center text-sm text-white/60">
                {mode === 'register' ? 'Artıq hesabınız var?' : 'Hesabınız yoxdur?'}{' '}
                <Link className="font-semibold text-white underline-offset-4 hover:underline" to={mode === 'register' ? '/login' : '/register'}>
                  {mode === 'register' ? 'Giriş et' : 'Qeydiyyat'}
                </Link>
              </p>
            </form>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default AuthPage;
