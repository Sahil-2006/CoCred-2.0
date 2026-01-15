"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  BarChart2, 
  Users, 
  CreditCard, 
  Gift, 
  Share2, 
  Megaphone, 
  Ticket, 
  RotateCcw, 
  Bell, 
  Layout, 
  MessageSquare, 
  MapPin, 
  Settings,
  FileCheck,
  Upload,
  ShieldCheck
} from "lucide-react";
import { clsx } from "clsx";

const MENU_ITEMS = [
  {
    category: "GENERAL",
    items: [
      { name: "Dashboard", icon: Home, href: "/" },
      { name: "Statistics", icon: BarChart2, href: "/stats" },
    ],
  },
  {
    category: "OTHER",
    items: [
      { name: "Settings", icon: Settings, href: "/settings" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-[#FFE55B] h-screen flex flex-col fixed left-0 top-0 overflow-y-auto text-[#202020]">
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-2">
        <div className="bg-black text-[#FFE55B] p-1 rounded-full">
           {/* Simple Icon placeholder */}
           <CreditCard size={20} />
        </div>
        <span className="font-bold text-xl tracking-tight">CoCred</span>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-4 py-2 space-y-8">
        {MENU_ITEMS.map((section) => (
          <div key={section.category}>
            <h3 className="text-xs font-semibold text-gray-600 mb-3 px-3 tracking-wider">
              {section.category}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-black/5 text-black"
                        : "text-gray-700 hover:bg-black/5 hover:text-black"
                    )}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom User Profile Mockup */}
      <div className="p-4 border-t border-black/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-bold">
            TS
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Tom Svorobovich</p>
            <p className="text-xs text-gray-600 truncate">Dribbble</p>
          </div>
        </div>
      </div>
    </div>
  );
}
