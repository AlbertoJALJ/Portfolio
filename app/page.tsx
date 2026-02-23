import Description from "@/components/sections/Hero/Description";
import Buttons from "@/components/sections/Hero/Buttons";
import HeroBadge from "@/components/sections/Hero/Badge";
import HeroImage from "./components/sections/Hero/HeroImage";
import Heading from "./components/sections/Hero/Heading";
import FeaturedTitle from "./components/sections/featured/Title";
import Cards from "./components/sections/featured/Cards";

import ContactHeading from "@/components/sections/contact/Heading";
import Form from "./components/sections/contact/Form";
import ContactFooter from "@/components/sections/contact/Footer";

import Legend from "@/components/sections/footer/Legend";
import Links from "@/components/sections/footer/Links";

export default function Home() {
  return (
    <>
      <section className="w-full">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 lg:flex-row lg:items-stretch lg:px-6 lg:py-20">
          <div className="w-full min-w-0 lg:flex lg:flex-3">
            <div className="flex h-full max-w-full flex-col gap-8 lg:max-w-[620px] lg:justify-between">
              <div className="flex justify-center lg:justify-start">
                <HeroBadge />
              </div>
              <Heading />
              <Description />
              <Buttons />
            </div>
          </div>
          <div className="hidden w-full min-w-0 lg:flex lg:flex-2">
            <HeroImage />
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-zinc-900">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 lg:px-6 lg:py-24">
          <FeaturedTitle />
          <div className="mt-10 lg:mt-12">
            <Cards />
          </div>
        </div>
      </section>
      <section className="w-full mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-24 text-center">
        <ContactHeading />
        <Form />
        <ContactFooter />
      </section>
      <section className="w-full border-t border-border-gray bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:gap-6 lg:px-6">
          <Legend />
          <Links />
        </div>
      </section>
    </>
  );
}
