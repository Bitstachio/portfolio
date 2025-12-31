import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });

        const scrollPosition = window.innerHeight + window.scrollY;
        if (scrollPosition >= document.documentElement.scrollHeight - 10) {
          setActiveId(sectionIds[sectionIds.length - 1]);
        }
      },
      { rootMargin: "-10% 0% -80% 0%", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};
