    // Navbar Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    navbar.classList.remove("md:w-[68%]", "top-4", "rounded-full");
    navbar.classList.add("w-full", "top-0", "rounded-none", "shadow-md", "bg-white/80");
  } else {
    navbar.classList.remove("w-full", "top-0", "rounded-none", "shadow-md", "bg-white/80");
    navbar.classList.add("md:w-[68%]", "top-4", "rounded-full");
  }
});

    // Hero Animation
    window.addEventListener("load", () => {
      heroText.classList.remove("opacity-0", "translate-y-10");
      heroImage.classList.remove("opacity-0", "translate-x-10");
    });

    // Typing Effect
    const text = "Developer";
    let index = 0;
    function typing(){
      if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 120);
      }
    }

    typing();

    // About Animation
    const aboutImage = document.getElementById("aboutImage");
    const aboutText = document.getElementById("aboutText");
    function reveal(){
      const trigger = window.innerHeight * 0.85;
      if(aboutImage.getBoundingClientRect().top < trigger){
        aboutImage.classList.remove("opacity-0", "-translate-x-14");
      }
      if(aboutText.getBoundingClientRect().top < trigger){
        aboutText.classList.remove("opacity-0", "translate-x-14");
      }
    }
    window.addEventListener("scroll", reveal);

    const cards = document.querySelectorAll(".project-card");
function revealCards(){
  const trigger = window.innerHeight * 0.85;
  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;
    if(top < trigger){
      setTimeout(() => {
        card.classList.remove(
          "opacity-0",
          "translate-y-10"
        );
      }, index * 150);
    }
  });
}
window.addEventListener("scroll", revealCards);

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");
function runCounter() {
  const trigger = window.innerHeight * 0.85;
  counters.forEach(counter => {
    const top = counter.getBoundingClientRect().top;
    if(top < trigger && !counter.classList.contains("counted")){
      counter.classList.add("counted");
      const target = +counter.dataset.target;
      let count = 0;
      const speed = target / 40;
      const updateCounter = () => {
        count += speed;
        if(count < target){
          counter.innerText = Math.ceil(count) + "+";
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + "+";
        }
      };
      updateCounter();
    }
  });
}

window.addEventListener("scroll", runCounter);

    // Progress Bar Animation
const progressBars = document.querySelectorAll(".progress-bar");
function animateSkills(){
  const trigger = window.innerHeight * 0.85;
  progressBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if(top < trigger){
      bar.style.width = bar.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateSkills);

// SKILL ANIMATION
const skillCards = document.querySelectorAll(".skill-card");
const skillProgressBars = document.querySelectorAll(".progress-bar");
function revealSkills() {
  const trigger = window.innerHeight * 0.85;
  // CARD REVEAL
  skillCards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      setTimeout(() => {
        card.classList.remove(
          "opacity-0",
          "translate-y-10"
        );
      }, index * 120);
    }
  });

  // PROGRESS BAR
  skillProgressBars.forEach((bar) => {
    const top = bar.getBoundingClientRect().top;
    if (top < trigger) {
      bar.style.width = bar.dataset.width;
    }
  });
}

window.addEventListener("scroll", revealSkills);

// HOVER EFFECT
skillCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background =
      "radial-gradient(circle at " +
      x +
      "px " +
      y +
      "px, #ffffff, #fff6f8 70%)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "#ffffff";
  });
});

// ICON FLOAT EFFECT
const skillIcons = document.querySelectorAll(".skill-card img");
skillIcons.forEach((icon, index) => {
  icon.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-6px)" },
      { transform: "translateY(0px)" }
    ],
    {
      duration: 2500 + index * 300,
      iterations: Infinity
    }
  );

});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  successMessage.classList.remove("hidden");
  contactForm.reset();
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 3000);
});



// INPUT EFFECT
const inputs = document.querySelectorAll(".contact-input");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.add(
      "shadow-md",
      "scale-[1.01]",
      "border-[#c98ea3]"
    );
  });
  input.addEventListener("blur", () => {
    input.parentElement.classList.remove(
      "shadow-md",
      "scale-[1.01]",
      "border-[#c98ea3]"
    );
  });
});


// REVEAL CONTACT
const contactItems = document.querySelectorAll(".contact-item");
const contactBox = document.querySelector(".contact-form");
function revealContact(){
  const trigger = window.innerHeight * 0.85;
  contactItems.forEach((item, index) => {
    if(item.getBoundingClientRect().top < trigger){
      setTimeout(() => {
        item.classList.remove(
          "opacity-0",
          "translate-y-10"
        );
      }, index * 150);
    }
  });

  if(contactBox.getBoundingClientRect().top < trigger){
    contactBox.classList.remove(
      "opacity-0",
      "translate-x-10"
    );
  }
}

window.addEventListener("scroll", revealContact);

