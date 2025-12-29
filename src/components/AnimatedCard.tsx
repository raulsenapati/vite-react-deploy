
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({ children, className, delay = 0 }: AnimatedCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Card
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6',
        className
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </Card>
  );
};

export default AnimatedCard;
