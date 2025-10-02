import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    function handleClick(e) {
      if (e.target.tagName === "IMG" && e.target.closest(".markdown")) {
        const src = e.target.src;
        const lightbox = document.createElement("div");
        lightbox.classList.add("image-lightbox");
        lightbox.innerHTML = `<img src="${src}" />`;

        function closeLightbox() {
          lightbox.classList.add("closing");
          setTimeout(() => lightbox.remove(), 250); // match zoomOut duration
        }

        // Close on click
        lightbox.onclick = closeLightbox;

        // Close on ESC key
        document.addEventListener(
          "keydown",
          (ev) => {
            if (ev.key === "Escape") closeLightbox();
          },
          { once: true }
        );

        document.body.appendChild(lightbox);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // ✅ Must return children
  return <>{children}</>;
}
