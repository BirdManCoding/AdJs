function renderImages(img) {
  const wrapper = document.getElementById("gallery-wrapper");
  const template = document.getElementById("gallery-template");
  const imageBody = document.importNode(template.content, true);
  const imgTemplateBody = imageBody.querySelector("img");

  imgTemplateBody.dataset.lazy = img.thumbnailUrl;
  wrapper.append(imageBody);
}

function fadeIn(targets) {
  gsap.to(targets, {
    opacity: 1,
    stagger: 0.2,
  });
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    let targets = entries.map(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.lazy;

        img.setAttribute("src", src);
        observer.unobserve(entry.target);
        return entry.target.closest(".gallery-item");
      }
    });

    fadeIn(targets);
  },
  { threshold: 1 }
);

function observeImage() {
  const wrapper = document.getElementById("gallery-wrapper");
  const images = wrapper.querySelectorAll("img");

  images.forEach(element => {
    observer.observe(element);
  });
}

(async function getImages() {
  let json;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");

    if (response.status !== 200) throw new Error("not 200");

    json = await response.json();
  } catch (e) {
    throw new Error(e);
  }

  json.forEach(element => {
    renderImages(element);
  });

  observeImage();
})();
