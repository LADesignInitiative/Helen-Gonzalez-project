document.addEventListener("astro:page-load", () => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("sinkTag")) {
          entry.target.classList.remove("sink2");
        }
      } else {
        if (
          entry.target.classList.contains("sinkTag") &&
          !entry.target.classList.contains("sink2")
        ) {
          entry.target.classList.add("sink2");
        }
      }
    });
  };
  const options = {
    threshold: 0.1,
  };
  const observer = new IntersectionObserver(callback, options);
  const SinkTag = document.getElementsByClassName("sinkTag");
  for (var i = 0; i < SinkTag.length; i++) {
    observer.observe(SinkTag[i]);
  }
});
