import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { CalendarDays, MessageSquareText, CircleGauge, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useNavigate } from "react-router-dom"

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();

  return (
    <div className={cn("pb-12 h-full", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Apps
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <CalendarDays className="mr-2 h-4 w-4" />
              Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquareText className="mr-2 h-4 w-4" />
              Chat
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-between items-center"
            >
              <div className="w-full flex flex-row justify-start items-center">
                <CircleGauge className="mr-2 h-4 w-4 mb-0" />
                <span>CRM</span>
              </div>
              <Badge
                variant="destructive"
                className="text-[10px] px-[8px] py-[1px]"
              >
                NEW
              </Badge>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Social Media
          </h2>
          <div className="space-y-1">
            <Button 
              variant="secondary" 
              className="w-full justify-start"
              onClick={() => navigate('/posts')}
            >
              <Facebook className="mr-2 h-4 w-4 mb-0" />
              Facebook Posts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Instagram className="mr-2 h-4 w-4 mb-0" />
              Instagram Posts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Linkedin className="mr-2 h-4 w-4 mb-0" />
              LinkedIn Posts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}