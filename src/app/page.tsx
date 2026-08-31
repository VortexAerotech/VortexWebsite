import { Droplet, Wheat, Sprout, ArrowDown } from "lucide-react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LeadForm from "./components/LeadForm";
import ServiceCard from "./components/ServiceCard";
import PlaceholderImage from "./components/PlaceholderImage";
import { getSiteImages } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

const SLOGAN = "Spyt kom altyd te laat, so laat ons liewer vroeg kom spuit!";

export const revalidate = 60;

export default async function Home() {
  const images = await getSiteImages();

  const heroImageUrl = urlForImage(images.heroImage)?.width(1920).height(1080).url();
  const sprayingImageUrl = urlForImage(images.serviceSprayingImage)?.width(600).height(400).url();
  const spreadingImageUrl = urlForImage(images.serviceSpreadingImage)?.width(600).height(400).url();
  const vegetationImageUrl = urlForImage(images.serviceVegetationImage)?.width(600).height(400).url();
  const trustImageUrl = urlForImage(images.trustImage)?.width(1200).height(675).url();

  return (
    <>
      <Nav />
      <main className="flex flex-col">
        {/* 1. Hero */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden border-b border-border-muted pt-20">
          <div className="absolute inset-0 z-0">
            <PlaceholderImage
              src={heroImageUrl}
              alt="Drone spuit oor gewasse"
              label="Held-foto volg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-start gap-6 px-4 md:px-16">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-on-surface sm:text-6xl">
              Spyt kom altyd te laat,
              <br />
              <span className="text-safety-orange">so laat ons liewer vroeg kom spuit!</span>
            </h1>
            <p className="max-w-2xl border-l-2 border-safety-orange pl-4 text-lg text-on-surface-variant">
              Professionele dronespuitwerk en -strooiing vir plase in Limpopo,
              Noordwes en Gauteng.
            </p>
            <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <WhatsAppButton />
              <a
                href="#wat-ons-doen"
                className="inline-flex items-center justify-center gap-2 rounded border border-border-muted px-8 py-4 font-mono text-sm tracking-[0.08em] text-on-surface uppercase transition-colors hover:border-safety-orange hover:text-safety-orange"
              >
                Ons Dienste
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 2. What We Do */}
        <section className="bg-topo bg-surface px-4 py-20 md:px-16 md:py-28" id="wat-ons-doen">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-16 flex flex-col items-center text-center">
              <span className="mb-2 font-mono text-sm tracking-[0.2em] text-safety-orange uppercase">
                Wat Ons Doen
              </span>
              <h2 className="text-3xl font-bold text-on-surface sm:text-4xl">Ons Dienste</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <ServiceCard
                icon={Droplet}
                title="Spuitwerk"
                description="Gewasbeskerming, weiveld en bosbeheer, ook in moeilik-bereikbare terrein."
                imageLabel="Spuitwerk-foto volg"
                imageSrc={sprayingImageUrl}
              />
              <ServiceCard
                icon={Wheat}
                title="Strooiwerk"
                description="Kunsmis en saad strooiing, onderhewig aan T100-geskiktheid."
                imageLabel="Strooiwerk-foto volg"
                imageSrc={spreadingImageUrl}
              />
              <ServiceCard
                icon={Sprout}
                title="Bosbeheer"
                description="Bos- en plantegroeibeheer op plase, weivelde en moeilike terrein."
                imageLabel="Bosbeheer-foto volg"
                imageSrc={vegetationImageUrl}
              />
            </div>

            <p className="mt-10 max-w-2xl text-sm text-on-surface-variant/70">
              Ons pas produk toe volgens jou of jou adviseur se instruksies —
              ons verkoop nie chemikalieë nie en gee nie voorskrifte nie.
            </p>
          </div>
        </section>

        {/* 3. Why a Drone */}
        <section className="border-t border-border-muted px-4 py-20 md:px-16 md:py-28" id="hoekom-drone">
          <div className="mx-auto max-w-[1280px]">
            <span className="mb-2 block font-mono text-sm tracking-[0.2em] text-safety-orange uppercase">
              Hoekom &apos;n Drone
            </span>
            <h2 className="mb-8 text-3xl font-bold text-on-surface sm:text-4xl">
              Die regte werktuig, op die regte tyd
            </h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {[
                "Nat lande waar trekkers en spuiters vassit",
                "Moeilike terrein en oneweredige grond",
                "Swak toegang tot sommige kampe of blokke",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded border border-border-muted bg-surface-container px-6 py-5 text-on-surface-variant"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-sm text-on-surface-variant/70">
              &apos;n Drone is nie altyd vinniger of goedkoper as konvensionele
              toerusting nie — dit is die regte werktuig wanneer die
              omstandighede dit vra, en ons sal dit eerlik vir jou sê.
            </p>
          </div>
        </section>

        {/* 4. Trust Signals */}
        <section className="border-t border-border-muted px-4 py-20 md:px-16 md:py-28" id="vertroue">
          <div className="mx-auto max-w-[1280px]">
            <span className="mb-2 block font-mono text-sm tracking-[0.2em] text-safety-orange uppercase">
              Vertroue
            </span>
            <h2 className="mb-8 text-3xl font-bold text-on-surface sm:text-4xl">
              DJI AGRAS T100
            </h2>
            <div className="relative aspect-video w-full overflow-hidden rounded border border-border-muted">
              <PlaceholderImage
                src={trustImageUrl}
                alt="DJI AGRAS T100 drone toerusting"
                label="Toerusting-foto volg"
              />
            </div>
          </div>
        </section>

        {/* 5. Service Area */}
        <section className="border-t border-border-muted px-4 py-20 md:px-16 md:py-28" id="diensarea">
          <div className="mx-auto max-w-[1280px]">
            <span className="mb-2 block font-mono text-sm tracking-[0.2em] text-safety-orange uppercase">
              Diensarea
            </span>
            <h2 className="mb-4 text-3xl font-bold text-on-surface sm:text-4xl">
              Limpopo · Noordwes · Gauteng
            </h2>
            <p className="max-w-xl text-on-surface-variant/70">
              Oop vir reis elders in Suid-Afrika wanneer die werk dit
              regverdig.
            </p>
          </div>
        </section>

        {/* 6. Final CTA */}
        <section className="bg-topo bg-surface-container-low border-t border-border-muted px-4 py-20 md:px-16 md:py-28" id="kontak">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
            <h2 className="max-w-xl text-3xl font-bold text-on-surface sm:text-4xl">
              {SLOGAN}
            </h2>
            <WhatsAppButton className="mt-8" />
            <p className="mt-10 text-sm text-on-surface-variant/70">
              Verkies liewer om te wag vir &apos;n oproep? Los jou besonderhede:
            </p>
            <div className="mt-4">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
