import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuickReplyButtonProps {
  label: string;
  onClick: () => void;
  active?: boolean;
}

export const QuickReplyButton = ({ label, onClick, active }: QuickReplyButtonProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={cn(
        "rounded-full border-brand-purple hover:bg-brand-purple hover:text-white transition-colors",
        active && "bg-brand-purple text-white"
      )}
    >
      {label}
    </Button>
  );
};