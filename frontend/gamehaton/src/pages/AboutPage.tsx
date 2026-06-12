import { BrainCircuit, Gamepad2, Gauge, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const points = [
  {
    icon: BrainCircuit,
    title: 'Why this product exists',
    text: 'Users own many games, but deciding what to play takes time. This platform reduces that friction.'
  },
  {
    icon: Gauge,
    title: 'What the app does',
    text: 'It combines library analytics, recommendation logic, and a focused dashboard into one place.'
  },
  {
    icon: Users,
    title: 'Who it helps',
    text: 'Players who buy many games, forget completed titles, or want a smarter daily pick.'
  },
  {
    icon: Rocket,
    title: 'Roadmap',
    text: 'Steam/Epic/Game Pass integrations, AI-assisted ranking, and progress-based insights are future steps.'
  }
];

function AboutPage() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
              <Gamepad2 className="h-4 w-4 text-[#A6C8FF]" />
              About .DOT GAMES
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
              A game discovery product with dashboard energy.
            </h1>
            <p className="mt-5 max-w-xl leading-7 text-white/70">
              Layihə, istifadəçinin oyun kitabxanasını analiz edib ən uyğun seçimi tapmasına kömək edir. Məqsəd yalnız vizual gözəllik deyil, həm də real istifadə dəyəridir.
            </p>
            <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#A6C8FF]/20 via-[#7C5CFF]/20 to-[#FF9FFC]/20 p-5">
              <p className="text-sm text-white/65">Core idea</p>
              <p className="mt-2 text-lg font-semibold leading-7">
                “What should I play today?” sualına istifadəçinin zövqünə əsaslanan ağıllı cavab vermək.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <article key={point.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#050816]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold">{point.title}</h2>
                  <p className="mt-3 leading-7 text-white/65">{point.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/register" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050816]">
            Create account
          </Link>
          <Link to="/login" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90">
            Login now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
