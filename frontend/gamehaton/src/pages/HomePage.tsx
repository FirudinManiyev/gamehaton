import { ChevronRight, Gamepad2, Sparkles, Star, BarChart3, LibraryBig, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';

const stats = [
  ['240+', 'Təhlil olunmuş oyun'],
  ['18', 'Tapılmış gizli incilər'],
  ['92%', 'Uyğunluq faizi']
];

const features = [
  {
    icon: LibraryBig,
    title: 'Birləşmiş kitabxana görünüşü',
    text: 'Steam, Epic və Game Pass oyunlarını bir paneldə rahat izləyin.'
  },
  {
    icon: BarChart3,
    title: 'Ağıllı analiz',
    text: 'Oynanma statistikasını, fasilələri və yarımçıq qalan oyunları görün.'
  },
  {
    icon: ShieldCheck,
    title: 'Məqsəd yönümlü seçim',
    text: 'Bu gün üçün uyğun oyunu tapın və qərar vermə vaxtını azaldın.'
  }
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div className="relative mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl gap-12 rounded-[2.5rem] border border-white/10 bg-white/5 px-5 py-10 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-14">
          <div className="max-w-2xl space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <Gamepad2 className="h-4 w-4 text-[#A6C8FF]" />
                .DOT GAMES - ağıllı oyun kəşfi
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="space-y-5">
                <h1 className="max-w-xl text-5xl font-black leading-none tracking-tight text-balance sm:text-6xl lg:text-7xl">
                  Oyun kitabxanasını idarə et, daha ağıllı tövsiyələr al və bu gün nə oynayacağını tez tap.
                </h1>
                <p className="max-w-xl text-base leading-7 text-white/72 sm:text-lg">
                  Sayta ilk daxil olanda istifadəçi məhsulun nə etdiyini dərhal görür. Kitabxana analizi, tövsiyələr və “bu gün nə oynayım?” təcrübəsi bir yerdə toplanır.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050816] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10">
                  Başla <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10">
                  <Sparkles className="h-4 w-4 text-[#FF9FFC] transition-transform group-hover:rotate-12" />
                  Ətraflı bax
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map(([value, label], index) => (
                <Reveal key={label} delay={0.08 * index}>
                  <motion.div whileHover={{ y: -6, scale: 1.02 }} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-shadow hover:shadow-2xl hover:shadow-[#7C5CFF]/10">
                    <div className="text-3xl font-bold text-white">{value}</div>
                    <div className="mt-1 text-sm text-white/60">{label}</div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12}>
            <motion.div whileHover={{ rotate: -1, y: -8 }} className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[#7C5CFF]/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-white/55">Bu axşamın seçimi</p>
                  <h2 className="mt-1 text-2xl font-bold">Cyberdeck Horizon</h2>
                </div>
                <Star className="h-5 w-5 text-[#FF9FFC]" />
              </div>

              <div className="mt-6 space-y-4">
                {[
                  ['Janr uyğunluğu', 'Action RPG'],
                  ['Vaxt uyğunluğu', '45-90 dəq'],
                  ['Kitabxana vəziyyəti', 'Oynanmayıb']
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="text-sm text-white/60">{label}</span>
                    <span className="text-sm font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl bg-gradient-to-br from-[#A6C8FF]/20 via-[#7C5CFF]/20 to-[#FF9FFC]/20 p-5">
                <p className="text-sm text-white/70">Ağıllı tövsiyə sistemi</p>
                <p className="mt-2 text-lg font-semibold leading-7">
                  Kitabxananı araşdır, unutduğun oyunları yenidən tap və qərar verməyi daha asan et.
                </p>
              </div>
            </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article key={feature.title} whileHover={{ y: -8, scale: 1.02 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-transform hover:shadow-2xl hover:shadow-[#7C5CFF]/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#050816]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{feature.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default HomePage;
