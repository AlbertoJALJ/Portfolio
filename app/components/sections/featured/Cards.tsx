import feat_img_1 from "@/assets/feature_projects1.png";
import feat_img_2 from "@/assets/feature_projects2.png";
import feat_img_3 from "@/assets/feature_projects3.png";
import Card from "@/components/ui/Card";
export default function Cards() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      <Card
        image_src={feat_img_1}
        image_alt="SaaS landing page preview"
        card_title="SaaS Landing Page"
        card_description="High-conversion landing page with Framer Motion animations and responsive grid layout."
        demo_link="#"
        github_link="#"
        badges={["Tailwind"]}
      />
      <Card
        image_src={feat_img_2}
        image_alt="Portfolio project preview"
        card_title="Portfolio Website"
        card_description="Modern portfolio with reusable components, CVA variants and responsive sections."
        demo_link="#"
        github_link="#"
        badges={["Next.js"]}
      />
      <Card
        image_src={feat_img_3}
        image_alt="Dashboard project preview"
        card_title="Analytics Dashboard"
        card_description="Dashboard UI focused on clean layout, reusable UI primitives and scalable structure."
        demo_link="#"
        github_link="#"
        badges={["Node.js"]}
      />
    </div>
  );
}
