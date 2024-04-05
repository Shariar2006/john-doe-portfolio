'use client'
import Navbar from "./components/Navbar/Navbar";
import Service from "./service";
import Project from "./project";
import Contact from "./contact";
import About from "./about";
import Skills from "./components/Skills/skills";

export default function Home() {



  return (
   <div className="p-10">
    <section id="home"><Navbar/></section>
    {/* <section id="about"><About/></section> */}
    <section id="skill"><Skills/></section>
    <section id="service"><Service/></section>
    <section id="project"><Project/></section>
    <section id="contact"><Contact/></section>
   </div>
  );
}
