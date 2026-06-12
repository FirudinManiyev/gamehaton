import { ChevronRight, Gamepad2, Sparkles, Star } from 'lucide-react';
import Lightfall from './Lightfall';

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0">
        <Lightfall
          className="absolute inset-0"
          colors={['#A6C8FF', '#7C5CFF', '#FF9FFC']}
          backgroundColor="#050816"
          speed={0.65}
          streakCount={2}
          streakWidth={0.75}
          streakLength={1}
          glow={1.05}
          density={0.75}
          twinkle={1}
          zoom={2.35}
          backgroundGlow={0.35}
          opacity={1}
          mouseInteraction
          mouseStrength={0.65}
          mouseRadius={0.9}
          mouseDampening={0.12}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,159,252,0.16),transparent_28%),linear-gradient(180deg,rgba(5,8,22,0.08),rgba(5,8,22,0.82))]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16 lg:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
              <Gamepad2 className="h-4 w-4 text-[#A6C8FF]" />
              .DOT GAMES - smart game discovery
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-5xl font-black leading-none tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Library analizi və oyun tövsiyəsi üçün yeni təcrübə.
              </h1>
              <p className="max-w-xl text-base leading-7 text-white/72 sm:text-lg">
                Steam, Epic və Game Pass kitabxanalarını bir yerdə izləyən, oynanmayan oyunları üzə çıxaran və bu gün nə oynayacağını seçməyə kömək edən bir platforma.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050816] transition-transform hover:-translate-y-0.5">
                Get started <ChevronRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors hover:bg-white/10">
                <Sparkles className="h-4 w-4 text-[#FF9FFC]" />
                What should I play today?
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['240+', 'Analyzed games'],
                ['18', 'Hidden gems found'],
                ['92%', 'Recommendation match']
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <div className="text-3xl font-bold text-white">{value}</div>
                  <div className="mt-1 text-sm text-white/60">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#7C5CFF]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-white/55">Tonight&apos;s pick</p>
                  <h2 className="mt-1 text-2xl font-bold">Cyberdeck Horizon</h2>
                </div>
                <Star className="h-5 w-5 text-[#FF9FFC]" />
              </div>

              <div className="mt-6 space-y-4">
                {[
                  ['Genre match', 'Action RPG'],
                  ['Playtime fit', '45-90 min'],
                  ['Library status', 'Unplayed']
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <span className="text-sm text-white/60">{label}</span>
                    <span className="text-sm font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl bg-gradient-to-br from-[#A6C8FF]/20 via-[#7C5CFF]/20 to-[#FF9FFC]/20 p-5">
                <p className="text-sm text-white/70">Smart recommendation engine</p>
                <p className="mt-2 text-lg font-semibold leading-7">
                  Explore your library, uncover the games you forgot about, and let the dashboard narrow the choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;