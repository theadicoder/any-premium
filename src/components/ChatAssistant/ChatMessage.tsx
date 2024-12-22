import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  productImage?: string;
}

export const ChatMessage = ({ content, isBot, productImage }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-3 mb-4", !isBot && "flex-row-reverse")}>
      <Avatar className="w-8 h-8">
        <AvatarImage src={isBot ? "/assistant-avatar.png" : undefined} />
        <AvatarFallback>{isBot ? "AI" : "U"}</AvatarFallback>
      </Avatar>
      <div className={cn(
        "rounded-lg p-4 max-w-[80%]",
        isBot ? "bg-brand-dark text-white" : "bg-brand-purple/10 text-foreground"
      )}>
        <p className="text-sm">{content}</p>
        {productImage && isBot && (
          <img 
            src={productImage} 
            alt="Product preview" 
            className="mt-2 rounded-md w-full max-w-xs object-cover"
          />
        )}
      </div>
    </div>
  );
};