import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./skill";
import Service from "./service";
import Project from "./project";
import Contact from "./contact";
import About from "./about/page";

export default function Home() {
  return (
   <div className="p-10">
    <section><Navbar/></section>
    <section><About/></section>
    <section><Skill/></section>
    <section><Service/></section>
    <section><Project/></section>
    <section><Contact/></section>
   </div>
  );
}
