import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Home() {
  const heroTitle = useRef(null);

  useEffect(() => {
    const heroTitleElement = heroTitle.current;
    const text = new SplitType(heroTitleElement, { types: "lines" });

    gsap.from(text.lines, {
      y: 20,
      opacity: 0,
      stagger: 0.2,
    });
  }, []); // Run only once on component mount

  return (
    <>
      <div className="hero">
        <div className="hero-img">
          <img
            data-scroll
            data-scroll-speed="3"
            src="https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className=" banner-text">
            <h1 className="title-h1" ref={heroTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              tenetur exercitationem natus. Cum, animi atque qui fugiat esse
              error reiciendis. Odit commodi repellat dolore accusantium
              molestias, sed ullam temporibus! Consequatur.
            </h1>
          </div>
        </div>
      </div>
      <div className="main">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim
          perferendis sequi consequuntur possimus provident iure odit
          praesentium perspiciatis harum? Perspiciatis labore culpa officia
          nobis a tempora numquam incidunt distinctio! At fugiat similique sint
          harum accusamus eligendi nisi dolorem ab odit quis, veniam
          dignissimos, provident necessitatibus molestiae perspiciatis mollitia
          maxime ducimus cupiditate, sequi veritatis rem quidem cumque nulla!
          Est, voluptatem. Iure quibusdam hic nihil eum assumenda eius ducimus
          alias commodi nulla et adipisci laudantium voluptates similique
          exercitationem mollitia, doloremque nostrum animi rerum fuga ex quae.
          Quisquam error ducimus amet in! Ab modi esse perspiciatis neque quae
          facere labore, quasi amet minus ipsum hic dolore iusto consequatur
          nulla, saepe, quidem consequuntur velit consectetur harum a quod
          voluptate? Beatae assumenda reprehenderit porro? Culpa dolores
          inventore libero nostrum similique, tenetur a blanditiis qui harum
          sequi! Consectetur eius in temporibus perferendis, error tenetur hic
          dolor quos? Laboriosam hic soluta deleniti qui ipsum tenetur ratione.
          Magni aperiam delectus officiis ipsam debitis cum. Cupiditate aliquam,
          praesentium id expedita, molestias voluptate quod, quo quos voluptas
          eaque facilis quis. Quisquam maxime eius amet delectus harum fuga
          commodi expedita? Rerum at obcaecati cumque expedita blanditiis
          tempora quod illum veniam cupiditate, deleniti, a amet, nesciunt
          placeat. Sint possimus sit commodi, veritatis dolores itaque, expedita
          excepturi quos, ex cumque amet libero. Iste porro aspernatur incidunt
          ex ullam illo veniam amet nisi, non veritatis eveniet error odit
          consequuntur, architecto consectetur, numquam similique tenetur? Ex
          nostrum laborum molestias, iusto a sit dolorum similique! Nihil
          molestias non qui? Soluta iure fugiat ratione quas quidem sunt
          sapiente esse rerum, hic at eveniet tempore unde obcaecati, saepe quia
          voluptatibus doloribus amet cupiditate modi quo voluptas
          necessitatibus. Ut et maxime nobis rem excepturi dicta animi possimus
          fugiat harum deleniti qui, veniam perferendis similique? Facere
          nesciunt necessitatibus saepe sunt? Vel, repudiandae. Magni illum
          eaque aliquam non minima et?
        </div>
      </div>
      <div className="hero-img">
        <img
          data-scroll
          data-scroll-speed="3"
          src="https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </>
  );
}
