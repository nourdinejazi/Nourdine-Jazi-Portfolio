
import SVGComponent from "@/components/Svg-comp";
import Title from "@/components/title";
import Line from "@/components/line";
import Fpage from "@/components/f-page";
import SecondPage from "@/components/SecondPage";
import ProjectsPage from "@/components/Project-page";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/contact-page";
import Nav from "@/components/Nav";
export default function Home () {
return(

<div className="fpage w-full ">
    <Nav /> 
    <Fpage />
    <SecondPage />
    <ProjectsPage />
    <AboutPage />
    <ContactPage />
</div>
)

}