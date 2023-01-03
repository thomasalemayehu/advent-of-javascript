import React from "react";
import "../../assets/day17/styles/index.css";
import { useEffect } from "react";
const SmartSidebar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop);
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("smart-sidebar-active-element");
        if (li.classList.contains(current)) {
          li.classList.add("smart-sidebar-active-element");
        }
      });
    };

    return () => (window.onscroll = null);
  }, []);

  return (
    <div className="smart-sidebar-container">
      <nav className="smart-sidebar-table-of-contents-container">
        <p>Table of contents</p>

        <ul>
          <li className="smart-sidebar-active-element myStory">My Story</li>
          <li className="priming">Priming</li>
          <li className="anotherSection">Another Section</li>
        </ul>
      </nav>
      <div className="smart-sidebar-content-container">
        <section id="myStory">
          <h1>Framer is still alive and well… and it’s a game-changer</h1>

          <h3>A love letter to my prototyping tool of choice.</h3>

          <p>
            Earlier, this week, this post came across my feed: “Framer is Dead.”
          </p>

          <p>Impossible. I’ve been using it non-stop for the past month.</p>
          <p>
            Sadly, this post has gotten some traction, and I’ve seen it pop-up
            on several round-ups.
          </p>
          <p>
            Two weeks ago, Framer launched a new home page design and Smart
            Components, with Variants coming out of Beta. Looking at new
            features alone, it’s very much alive and well.
          </p>

          <p>
            The leading case this post made was that Framer was at fault for
            moving toward React. In doing so, it’s alienating designers that
            aren’t code-savvy. Or, on the opposite end of the spectrum,
            over-empowering UX engineers who over-value the code.
          </p>

          <p>
            Then, as if to drive the nail in the coffin: “Framer used to be
            about playing around. Now it’s about building things.” — Frankly,
            I’m not sure why “playing around” and “building things” have to be
            mutually exclusive.
          </p>

          <p>Are we talking about the same product?</p>
        </section>

        <section id="priming">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>

          <h3>Nulla esse accusamus eum libero nam saepe sunt.</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            minima expedita quas, beatae alias quis reiciendis?
          </p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dignissimos molestias ipsam ipsum voluptatibus tenetur, fugiat vitae
            nostrum cum sed.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            reiciendis culpa beatae deserunt nemo delectus neque, porro rerum,
            soluta totam saepe optio sint sed quod temporibus mollitia,
            aspernatur repellat dolore. Enim, dolor sint, labore, possimus
            corrupti eligendi asperiores corporis obcaecati et molestiae facilis
            expedita perferendis! Excepturi laborum, optio asperiores sapiente
            vitae ea.
          </p>

          <p>
            The leading case this post made was that Framer was at fault for
            moving toward React. In doing so, it’s alienating designers that
            aren’t code-savvy. Or, on the opposite end of the spectrum,
            over-empowering UX engineers who over-value the code.
          </p>

          <p>
            Then, as if to drive the nail in the coffin: “Framer used to be
            about playing around. Now it’s about building things.” — Frankly,
            I’m not sure why “playing around” and “building things” have to be
            mutually exclusive.
          </p>

          <p>Are we talking about the same product?</p>
        </section>

        <section id="anotherSection">
          <h1>Another awesome section in this content.</h1>

          <h3>Nulla esse accusamus eum libero nam saepe sunt.</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            minima expedita quas, beatae alias quis reiciendis?
          </p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dignissimos molestias ipsam ipsum voluptatibus tenetur, fugiat vitae
            nostrum cum sed.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            reiciendis culpa beatae deserunt nemo delectus neque, porro rerum,
            soluta totam saepe optio sint sed quod temporibus mollitia,
            aspernatur repellat dolore. Enim, dolor sint, labore, possimus
            corrupti eligendi asperiores corporis obcaecati et molestiae facilis
            expedita perferendis! Excepturi laborum, optio asperiores sapiente
            vitae ea.
          </p>

          <p>
            The leading case this post made was that Framer was at fault for
            moving toward React. In doing so, it’s alienating designers that
            aren’t code-savvy. Or, on the opposite end of the spectrum,
            over-empowering UX engineers who over-value the code.
          </p>

          <p>
            Then, as if to drive the nail in the coffin: “Framer used to be
            about playing around. Now it’s about building things.” — Frankly,
            I’m not sure why “playing around” and “building things” have to be
            mutually exclusive.
          </p>

          <p>Are we talking about the same product?</p>
        </section>
      </div>
    </div>
  );
};

export default SmartSidebar;
