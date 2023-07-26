"use client";

import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { useMemo } from "react";

export interface LucideIconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const LucideIcon = ({ name, ...props }: LucideIconProps) => {
  const LucideIcon = useMemo(() => dynamic(dynamicIconImports[name], { ssr: true }), [name]);

  return <LucideIcon {...props} />;
};

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M178.995 230.332L25.6684 77.0054"
        stroke="currentColor"
        strokeWidth="32.8556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M196.242 128.545C205.337 119.45 210.447 107.115 210.447 94.253C210.447 81.3909 205.337 69.0556 196.242 59.9607C187.148 50.8658 174.812 45.7564 161.95 45.7564C149.088 45.7564 136.753 50.8658 127.658 59.9607"
        stroke="currentColor"
        strokeWidth="32.8556"
      />
    </svg>
  ),
  LucideIcon,
};
