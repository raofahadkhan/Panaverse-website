"use client";
import About from "@/components/About";
import Core from "@/components/Core";
import Description from "@/components/Description";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Study from "@/components/study";
import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Description />
      <Study />
      <Core />
      <Program />
    </>
  );
}

export default Home;
