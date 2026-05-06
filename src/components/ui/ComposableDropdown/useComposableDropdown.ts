import { Option } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

const useComposableDropdown = (options: readonly Option[], value: string) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => !rootRef.current?.contains(event.target as Node) && setOpen(false);
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return { open, setOpen, rootRef, selected };
};

export default useComposableDropdown;
