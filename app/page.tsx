"use client";
import About from "@/components/About";
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
    </>
  );
}

export default Home;
