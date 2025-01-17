document.addEventListener("astro:page-load", () => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("sinkTag")) {
          entry.target.classList.remove("sink");
        }
      } else {
        if (
          entry.target.classList.contains("sinkTag") &&
          !entry.target.classList.contains("sink")
        ) {
          entry.target.classList.add("sink");
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
