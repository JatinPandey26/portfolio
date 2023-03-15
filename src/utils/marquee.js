import gsap from "gsap";
export const marquee = () => {
  const marqueeAll = document.querySelectorAll(".marquee");

  marqueeAll.forEach((marquee) => {
    if (!marquee) return;

    const marqueeContent = marquee.firstElementChild;
    if (!marqueeContent) return;
    const marqueeContentClone = marqueeContent.cloneNode(true);
    
    marquee.append(marqueeContentClone);

    let tween;

    const playMarquee = () => {
      let progress = tween ? tween.progress : 0;
      tween && tween.progress(0).kill();

      const width = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("width"),
        10
      );
      const gap = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("column-gap"),
        10
      );

      const distanceToTranslate = -1 * (width + gap);

      tween = gsap.fromTo(
        marquee.children,
        { x: 0 },
        { x: distanceToTranslate, duration: 7, ease: "none", repeat: -1 }
      );
      tween.progress(progress);
    };

    function debounce(func) {
      let timer;
      return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(
          () => {
            func();
          },
          500,
          event
        );
      };
    }

    playMarquee();
    window.addEventListener("resize", debounce(playMarquee));
  });
};
