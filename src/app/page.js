'use client'
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/service/services";
import Projects from "./components/Projects/projects";
import Contact from "./contact";
import About from "./about";
import Skills from "./components/Skills/skills";
import Timeline from "./components/Timeline/Timeline";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {



  return (
   <div className="p-10">
    <section id="home"><Navbar/></section>
    {/* <section id="about"><About/></section> */}
    <section id="skill"><Skills/></section>
    <section id="service"><Services/></section>
    <section id="project"><Projects/></section>
    <section id="timeline" className="mt-20"><Timeline/></section>
    <section id="testimonials"><Testimonials/></section>
    <section id="contact"><Contact/></section>
   </div>
  );
}
