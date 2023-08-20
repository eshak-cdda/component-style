"use client";
import Section from "@/components/output/Section";
import { useState } from "react";

export default function Home() {
  const mainStyle = {
    display: "flex",
    height: "100vh",
  };
  const dashboardStyle = {
    width: "350px",
    backgroundColor: "#ddd",
  };
  const contentStyle = {
    width: "100%",
  };

  return (
    <div style={mainStyle}>
      <div style={dashboardStyle}></div>
      <div style={contentStyle}>
        <Section tag={"section"}>
          <h1>hello</h1>
        </Section>
      </div>
    </div>
  );
}
