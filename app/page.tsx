"use client";
import About from "@/components/About";
import Core from "@/components/Core";
import Description from "@/components/Description";
import Hero from "@/components/Hero";
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
    </>
  );
}

export default Home;
