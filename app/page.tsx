"use client";
import About from "@/components/About";
import Core from "@/components/Core";
import Description from "@/components/Description";
import Hero from "@/components/Hero";
import Outcome from "@/components/Outcome";
import Program from "@/components/Program";
import Study from "@/components/Study";
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
      <Outcome />
    </>
  );
}

export default Home;
