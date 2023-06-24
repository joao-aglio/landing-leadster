import { useState } from "react";

export default function useHover() {

    const [hover, setHover] = useState<boolean>();

    const handleMouseOver = () => {
        setHover(true);
      };
    
      const handleMouseLeave = () => {
        setHover(false);
      };

      return { handleMouseLeave, handleMouseOver, hover };
}