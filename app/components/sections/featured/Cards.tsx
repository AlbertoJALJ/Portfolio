import feat_img_1 from "@/assets/feature_projects1.png";
import feat_img_2 from "@/assets/feature_projects2.png";
import feat_img_3 from "@/assets/feature_projects3.png";
import Card from "@/components/ui/Card";
export default function Cards() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      <Card
        image_src={feat_img_1}
        image_alt="CEP Banxico Node.js library repository preview"
        card_title="cep-nodejs"
        card_description="Professional Node.js client for validating SPEI transfers in Banxico CEP, including structured parsing and PDF/XML receipt downloads with robust error handling."
        demo_link="https://github.com/AlbertoJALJ/cep-nodejs"
        github_link="https://github.com/AlbertoJALJ/cep-nodejs"
        badges={["Node.js", "TypeScript"]}
      />
      <Card
        image_src={feat_img_2}
        image_alt="Personal portfolio repository built with Next.js"
        card_title="Portfolio"
        card_description="My personal portfolio website built with Next.js and Tailwind CSS, focused on reusable UI components, responsive layout patterns, and production-ready structure."
        demo_link="https://github.com/AlbertoJALJ/Portfolio"
        github_link="https://github.com/AlbertoJALJ/Portfolio"
        badges={["Next.js", "Tailwind CSS"]}
      />
      <Card
        image_src={feat_img_3}
        image_alt="soloajustes website repository preview"
        card_title="soloajustes"
        card_description="Production website implementation based on Astro + Tailwind CSS + TypeScript, with multilingual-ready pages, responsive UI, and content-driven architecture."
        demo_link="https://soloajustescomunicacion.com"
        github_link="https://github.com/Exclusivas-Automotrices-Sanchez/soloajustes"
        badges={["Astro", "Tailwind CSS"]}
      />
    </div>
  );
}
