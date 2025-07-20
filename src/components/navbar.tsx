"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  return (
    <nav className="border-b border-muted p-5 bg-red-900 text-white">
      <div className="flex flex-row items-center justify-between font-medium mx-4">
        <div className="flex items-center gap-4 text-base flex-1 uppercase top-0 right-0 justify-end">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {username ? username : "Guest"}{" "}
        </div>
      </div>
    </nav>
  );
}
