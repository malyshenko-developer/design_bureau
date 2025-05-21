"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { ChevronDown } from "lucide-react";

interface ShowMoreTextProps {
  text: string;
  numberOfLine: number;
  showMoreLabel: string;
  showLessLabel: string;
}

const ShowMoreText = React.memo(
  ({ text, numberOfLine, showMoreLabel, showLessLabel }: ShowMoreTextProps) => {
    const [expanded, setExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState<number>(0);
    const [shouldShowMore, setShouldShowMore] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (contentRef.current) {
        const lineHeight =
          parseFloat(getComputedStyle(contentRef.current).lineHeight) ||
          1.5 * 16;
        const collapsedHeight = numberOfLine * lineHeight;
        const scrollHeight = contentRef.current.scrollHeight;

        setMaxHeight(expanded ? scrollHeight : collapsedHeight);

        const threshold = 2;
        setShouldShowMore(scrollHeight > collapsedHeight + threshold);
      }
    }, [expanded, text, numberOfLine]);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    const style = {
      maxHeight: maxHeight,
      overflow: "hidden",
      transition: "max-height 0.3s ease-in-out",
    };

    return (
      <div className="relative">
        <div ref={contentRef} style={style}>
          {text}
        </div>

        {shouldShowMore && (
          <Button
            variant={"secondary"}
            className="max-h-[23px] absolute bottom-0 right-0"
            aria-expanded={expanded}
            type="button"
            onClick={toggleExpanded}
          >
            {expanded ? showLessLabel : showMoreLabel}
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </Button>
        )}
      </div>
    );
  }
);

export default ShowMoreText;
