const mainNav = document.getElementById("main-nav");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");
const sprinkles = document.getElementById("sprinkles");
const ctaSparkles = document.getElementById("cta-sparkles");

const layerData = {
  toppings: {
    title: "Toppings",
    desc: "Fresh local berries & gold leaves",
  },
  cream: {
    title: "Cream Frosting",
    desc: "Double-whipped Madagascar vanilla cream",
  },
  base: {
    title: "Sponge Base",
    desc: "Light & airy almond-infused sponge",
  },
};

const layerTooltip = document.getElementById("layer-tooltip");
const layerTitle = document.getElementById("layer-title");
const layerDesc = document.getElementById("layer-desc");
const cakeLayers = document.querySelectorAll(".cake-layer");
const layerButtons = document.querySelectorAll(".layer-btn");

window.addEventListener(
  "scroll",
  () => {
    if (!mainNav) return;
    if (window.scrollY > 30) {
      mainNav.classList.remove("md:w-[95%]", "bg-white/40");
      mainNav.classList.add("md:w-[700px]", "bg-white/90", "scale-95", "md:scale-100");
    } else {
      mainNav.classList.remove("md:w-[700px]", "bg-white/90", "scale-95", "md:scale-100");
      mainNav.classList.add("md:w-[95%]", "bg-white/40");
    }
  },
  { passive: true },
);

const closeMenu = () => {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
  menuOverlay.classList.add("hidden");
  menuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
};

const openMenu = () => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
  menuOverlay.classList.remove("hidden");
  menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-xl"></i>';
};

menuBtn?.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    openMenu();
  } else {
    closeMenu();
  }
});

menuOverlay?.addEventListener("click", closeMenu);
mobileMenu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

for (let i = 0; i < 10; i += 1) {
  const sprinkle = document.createElement("div");
  sprinkle.className = "sprinkle hidden sm:block";
  sprinkle.style.left = `${Math.random() * 100}vw`;
  sprinkle.style.top = `${Math.random() * 100}vh`;
  sprinkle.style.width = `${Math.random() * 12 + 4}px`;
  sprinkle.style.height = `${Math.random() * 12 + 4}px`;
  sprinkle.style.borderRadius = Math.random() > 0.5 ? "50%" : "20%";
  sprinkle.style.backgroundColor = i % 3 === 0 ? "#FFD1DC" : i % 3 === 1 ? "#E0F2F1" : "#FFB74D";
  sprinkle.style.animationDuration = `${15 + Math.random() * 10}s`;
  sprinkles?.appendChild(sprinkle);
}

for (let i = 0; i < 15; i += 1) {
  const cake = document.createElement("div");
  cake.className = "absolute text-xl md:text-2xl";
  cake.textContent = "🍰";
  cake.style.top = `${Math.random() * 100}%`;
  cake.style.left = `${Math.random() * 100}%`;
  cake.style.transform = `rotate(${Math.random() * 360}deg)`;
  ctaSparkles?.appendChild(cake);
}

const setActiveLayer = (id) => {
  cakeLayers.forEach((layer) => {
    layer.classList.toggle("active", layer.dataset.layer === id);
  });
  layerButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.layer === id);
  });

  if (!id || !layerData[id]) {
    layerTooltip.classList.add("hidden");
    return;
  }

  layerTitle.textContent = layerData[id].title;
  layerDesc.textContent = layerData[id].desc;
  layerTooltip.classList.remove("hidden");
};

cakeLayers.forEach((layer) => {
  layer.addEventListener("click", () => {
    const isActive = layer.classList.contains("active");
    setActiveLayer(isActive ? null : layer.dataset.layer);
  });
});

layerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveLayer(button.dataset.layer);
  });
});
