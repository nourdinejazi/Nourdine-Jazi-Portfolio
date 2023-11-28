import Fpage from "@/components/f-page";
import SecondPage from "@/components/SecondPage";
import ProjectsPage from "@/components/Project-page";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/contact-page";
import Nav from "@/components/Nav";
import Blastpage from "@/components/blast-page";
import LastPage from "@/components/last-page";

export default function Home() {
  return (
    <div className="fpage w-full ">
      <Nav />
      <Fpage />
      <SecondPage />
      <ProjectsPage />
      <AboutPage />
      {/* <ContactPage /> */}
      {/* <LastPage /> */}
      <Blastpage />
    </div>
  );
}
