'use client'
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/service/services";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import About from "./about";
import Skills from "./components/Skills/skills";
import Timeline from "./components/Timeline/Timeline";
import Testimonials from "./components/Testimonials/Testimonials";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";


export default function Home() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  console.log(mousePosition)

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: 'difference'
    }
  }


  return (
    <div className="p-10">
      <section id="home"><Navbar /></section>
      {/* <section id="about"><About/></section> */}
      <section id="skill"><Skills /></section>
      <section id="service"><Services /></section>
      <section id="project"><Projects /></section>
      <section id="timeline" className="mt-20"><Timeline /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
      <motion.div variants={variants} animate='default' className="bg-white fixed w-8 h-8 rounded-full top-0 left-0" />
    </div>
  );
}
