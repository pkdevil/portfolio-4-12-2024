"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

//test
export default function WorkPage() {
  const projectsData = [
    {
      title: (
        <>
          Revoult <br /> Website
        </>
      ),
      description: "Figma Design",
      link: "https://www.figma.com/proto/SevFy0cGzxTrjsOec5em0j/Project-24?node-id=60-4344&t=xYVUBRWzljoP9wpt-1",
      imageLink: "/img/projects/1.png",
    },
    {
      title: (
        <>
          Siphome <br /> E-Commerce
        </>
      ),
      description: "UI Design",
      link: "https://www.figma.com/proto/SevFy0cGzxTrjsOec5em0j/Project-24?node-id=0-1&t=DtxaqYY7Gs7BBvK5-1",
      imageLink: "/img/projects/2.png",
    },
    {
      title: (
        <>
          Flowyze <br /> Website
        </>
      ),
      description: "Webflow Site",
      link: "https://flowyze.com/de/",
      imageLink: "/img/projects/3.png",
    },
    {
      title: (
        <>
          Tonito <br /> Petcare
        </>
      ),
      description: "UI Design",
      link: "https://www.figma.com/proto/uKKbH0YYUdvaKNYxUUwjDd/Untitled?node-id=100-481&t=bNCiKG811vbrIyZD-1",
      imageLink: "/img/projects/4.png",
    },

    {
      title: (
        <>
          PathX <br /> UI Design
        </>
      ),
      description: "Immigration Website UI",
      link: "https://www.figma.com/proto/uKKbH0YYUdvaKNYxUUwjDd/Untitled?node-id=105-20730&t=bNCiKG811vbrIyZD-1",
      imageLink: "/img/projects/5.png",
    },
    {
      title: (
        <>
          Weupload <br /> Web3 Data <br />
          Transfer
        </>
      ),
      description: "UI Design",
      link: "https://www.figma.com/proto/uKKbH0YYUdvaKNYxUUwjDd/Untitled?node-id=110-1290&t=bNCiKG811vbrIyZD-1",
      imageLink: "/img/projects/6.png",
    },
  ];

  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
