import { BrainCircuit, Gamepad2, Gauge, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';

const points = [
  {
    icon: BrainCircuit,
    title: 'Niyə bu məhsul var',
    text: 'İstifadəçilərin çox oyunu olur, amma hansını oynayacağını seçmək vaxt aparır. Bu platforma həmin çətinliyi azaldır.'
  },
  {
    icon: Gauge,
    title: 'Tətbiq nə edir',
    text: 'Kitabxana analizi, tövsiyə məntiqi və fokuslanmış dashboard-u bir yerdə təqdim edir.'
  },
  {
    icon: Users,
    title: 'Kimlər üçün faydalıdır',
    text: 'Çox oyun alan, tamamlanan oyunları unudan və ya gündəlik daha ağıllı seçim istəyən oyunçular üçün.'
  },
  {
    icon: Rocket,
    title: 'Gələcək plan',
    text: 'Steam/Epic/Game Pass inteqrasiyaları, AI dəstəkli sıralama və tərəqqi əsaslı analizlər gələcək mərhələlərdir.'
  }
];

function AboutPage() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                <Gamepad2 className="h-4 w-4 text-[#A6C8FF]" />
                .DOT GAMES haqqında
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Dashboard ruhu olan oyun kəşfi məhsulu.
              </h1>
              <p className="mt-5 max-w-xl leading-7 text-white/70">
                Layihə istifadəçinin oyun kitabxanasını analiz edib ən uyğun seçimi tapmasına kömək edir. Məqsəd həm vizual cəlbedicilik, həm də real fayda yaratmaqdır.
              </p>
              <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#A6C8FF]/20 via-[#7C5CFF]/20 to-[#FF9FFC]/20 p-5">
                <p className="text-sm text-white/65">Əsas fikir</p>
                <p className="mt-2 text-lg font-semibold leading-7">
                  “Bu gün nə oynayım?” sualına istifadəçinin zövqünə əsaslanan ağıllı cavab vermək.
                </p>
              </div>
            </motion.div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={index * 0.06}>
                  <motion.article whileHover={{ y: -8, scale: 1.02 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-shadow hover:shadow-2xl hover:shadow-[#7C5CFF]/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#050816]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold">{point.title}</h2>
                    <p className="mt-3 leading-7 text-white/65">{point.text}</p>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/register" className="group rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050816] transition-all hover:-translate-y-1 hover:shadow-xl">
              Hesab yarat
            </Link>
            <Link to="/login" className="group rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition-all hover:-translate-y-1 hover:bg-white/10">
              Giriş et
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutPage;
