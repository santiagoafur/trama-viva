"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  frontImage?: string;
  className?: string;
}

export function FlipCard({
  frontContent,
  backContent,
  frontImage,
  className,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full aspect-[3/4] cursor-pointer perspective-1000",
        className
      )}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => e.key === "Enter" && setIsFlipped(!isFlipped)}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-sm overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontImage && (
            <Image
              src={frontImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
            {frontContent}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-sm overflow-hidden bg-card border border-border p-6 lg:p-8"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full overflow-y-auto">{backContent}</div>
        </div>
      </motion.div>

      {/* Hint */}
      <div className="absolute bottom-3 right-3 text-xs text-foreground/40 pointer-events-none">
        {isFlipped ? "Click para voltear" : "Click para ver más"}
      </div>
    </div>
  );
}
