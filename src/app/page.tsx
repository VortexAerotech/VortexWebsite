import WhatsAppButton from "./components/WhatsAppButton";
import LeadForm from "./components/LeadForm";

const SLOGAN = "Spyt kom altyd te laat, so laat ons liewer vroeg kom spuit!";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral-950 text-white">
      {/* 1. Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Vortex Aerotech
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
          {SLOGAN}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/60">
          Professionele dronespuitwerk en -strooiing vir plase in Limpopo,
          Noordwes en Gauteng.
        </p>
        <WhatsAppButton className="mt-10" />
      </section>

      {/* 2. What We Do */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Wat ons doen</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-medium text-white/90">Spuitwerk</h3>
              <p className="mt-2 text-white/60">
                Gewasbeskerming, weiveld en bosbeheer, ook in moeilik-bereikbare
                terrein.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white/90">Strooiing</h3>
              <p className="mt-2 text-white/60">
                Kunsmis en saad strooiing, onderhewig aan T100-geskiktheid.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm text-white/50">
            Ons pas produk toe volgens jou of jou adviseur se instruksies — ons
            verkoop nie chemikalieë nie en gee nie voorskrifte nie.
          </p>
        </div>
      </section>

      {/* 3. Why a Drone */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Hoekom &apos;n dronie</h2>
          <ul className="mt-8 space-y-4 text-white/70">
            <li>• Nat lande waar trekkers en spuiters vassit</li>
            <li>• Moeilike terrein en oneweredige grond</li>
            <li>• Swak toegang tot sommige kampe of blokke</li>
          </ul>
          <p className="mt-8 text-sm text-white/50">
            &apos;n Dronie is nie altyd vinniger of goedkoper as konvensionele
            toerusting nie — dit is die regte werktuig wanneer die
            omstandighede dit vra, en ons sal dit eerlik vir jou sê.
          </p>
        </div>
      </section>

      {/* 4. Trust Signals */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Vertroue</h2>
          <div className="mt-8 flex aspect-video w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/40">
            DJI AGRAS T100 foto volg
          </div>
          <p className="mt-6 text-white/60">
            Praktiese plaas- en droon-ervaring — geen oordrywing, net werk wat
            gedoen moet word.
          </p>
          <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:grid-cols-3">
            <p>✓ Weer word gecheck</p>
            <p>✓ Wind word gemeet</p>
            <p>✓ Voorvlug-inspeksie elke keer</p>
          </div>
        </div>
      </section>

      {/* 5. Service Area */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Diensarea</h2>
          <p className="mt-4 text-white/70">
            Primêr: Limpopo, Noordwes en Gauteng.
          </p>
          <p className="mt-2 text-white/50">
            Oop vir reis elders in Suid-Afrika wanneer die werk dit regverdig.
          </p>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="max-w-xl text-2xl font-semibold sm:text-3xl">
            {SLOGAN}
          </h2>
          <WhatsAppButton className="mt-8" />
          <p className="mt-10 text-sm text-white/50">
            Verkies liewer om te wag vir &apos;n oproep? Los jou besonderhede:
          </p>
          <div className="mt-4">
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}
