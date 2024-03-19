import React from "react";
import "../App.css";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  useEffect(() => {
    const scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      scroller.destroy(); // Cleanup when component unmounts
    };
  }, []); // Run only once on component mount

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      scroll.update();
    }
  }, [scroll]);
  return (
    <>
      <div className="hero">
        <div
          data-scroll-container
          className="hero-img"
          data-scroll
          data-scroll-speed="3"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        >
          <div className="banner-text">
            <h1>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error ex
          hic recusandae animi, saepe ipsam eum aliquid, esse, deserunt nostrum
          consectetur reprehenderit perspiciatis itaque cumque expedita
          blanditiis quisquam. Distinctio? Qui, nam rem. Tempora nobis, id neque
          quidem repellat rerum quo consectetur cumque repudiandae perferendis
          at commodi perspiciatis eveniet eos animi corrupti quos eligendi
          aliquam. Dolore recusandae laborum voluptatum incidunt? Cum
          accusantium eius sed harum veritatis hic, itaque labore quae nostrum
          vel tempora earum expedita reprehenderit aliquam quidem omnis delectus
          dolorem quod provident nemo odio facere pariatur? Tempora, quae eos!
          Doloribus in possimus atque, nemo qui, voluptates optio officia animi
          nulla recusandae necessitatibus sunt cumque. Optio aspernatur
          doloremque et pariatur dolor necessitatibus esse dolore culpa illo
          voluptatibus quia, tempore error. Voluptate maiores eveniet magni
          distinctio molestias iusto aliquid, aliquam minima, modi non
          exercitationem quod neque expedita quis veniam quo similique porro
          nobis? Libero saepe eaque sequi vero. Distinctio, temporibus odit.
          Perferendis sint in quae ea, soluta quidem adipisci, odio veritatis
          perspiciatis accusantium consequuntur atque accusamus omnis veniam.
          Minima nulla laborum ullam sint, necessitatibus, veritatis
          repellendus, nihil totam debitis quae dolorum! Aliquam quas asperiores
          fuga, voluptatem quibusdam blanditiis. Ipsum, quas omnis! Iure
          mollitia nisi placeat saepe sunt quibusdam accusantium aliquid
          temporibus maxime esse, laborum repellendus labore veritatis et
          beatae, debitis aperiam. Voluptas quo nisi error, rerum maiores quam
          incidunt quasi sit ratione eveniet explicabo in consequuntur
          molestiae. Neque facere, itaque quibusdam iste quo, sunt error dolore
          animi suscipit et cupiditate quod. animi suscipit et cupiditate quod.
          animi suscipit et cupiditate quod. animi suscipit et cupiditate quod.
          animi suscipit et cupiditate quod.
        </div>
        <div
          data-scroll-container
          className="hero-img"
          data-scroll
          data-scroll-speed="300"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        ></div>
      </div>
    </>
  );
}
