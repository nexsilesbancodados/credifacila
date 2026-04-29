import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";

const Lgpd = () => (
  <div className="relative min-h-screen">
    <AnimatedBackdrop variant="soft" />
    <Header />
    <main id="main" />
    <ContactFooter />
  </div>
);

export default Lgpd;
