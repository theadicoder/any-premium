import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { QuickReplyButton } from "./QuickReplyButton";
import { cn } from "@/lib/utils";

interface Message {
  content: string;
  isBot: boolean;
  productImage?: string;
}

const quickReplies = [
  "Features",
  "Pricing",
  "How to Buy",
  "Download Instructions"
];

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! I'm your personal shopping assistant. How can I help you today?",
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { content: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response - In a real app, this would be connected to a backend
    setTimeout(() => {
      const botResponse = {
        content: "I understand you're interested in our premium subscriptions. Would you like to know more about our Netflix Premium or Amazon Prime offerings?",
        isBot: true,
        productImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    handleSend();
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 bg-brand-purple hover:bg-brand-purple/90 shadow-lg"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      <div className={cn(
        "fixed bottom-4 right-4 w-[380px] max-w-[calc(100vw-2rem)] bg-background border border-border rounded-lg shadow-xl transition-all duration-300 transform",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-semibold">Chat Assistant</h3>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="h-[400px] overflow-y-auto p-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
          {isTyping && (
            <div className="flex gap-2 items-center text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">Assistant is typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
            {quickReplies.map((reply) => (
              <QuickReplyButton
                key={reply}
                label={reply}
                onClick={() => handleQuickReply(reply)}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSend} className="bg-brand-purple hover:bg-brand-purple/90">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};