//FAQ item dropdown

document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq-item");

  const toggleAnswer = function () {
    const answer = this.querySelector(".answer");
    const icon = this.querySelector(".drop-down-btn");
    answer.classList.toggle("hide");
    icon.classList.toggle("hide");
  };

  faqs.forEach(function (faq) {
    faq.addEventListener("click", toggleAnswer);
  });
});

//gsap text reveling animation

gsap.registerPlugin(ScrollTrigger);

// Use querySelectorAll to select all elements with the class
const splitTypes = document.querySelectorAll(".about-us-text");

// Convert NodeList to an array
const splitTypesArray = Array.from(splitTypes);

splitTypesArray.forEach((element) => {
  // Use SplitType on each element
  const text = new SplitType(element, { types: "chars" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
