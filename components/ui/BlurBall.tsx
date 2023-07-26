import { cn } from "@/lib/utils";

interface BlurBallProps extends React.HTMLAttributes<HTMLDivElement> {
  size: {
    width: number | string;
    height: number | string;
  };
}

export default function BlurBall({ size: { width, height }, className }: BlurBallProps) {
  return (
    <div
      style={{ width, height }}
      className={cn("position-center blur-3xl rounded-full", className)}
    />
  );
}
