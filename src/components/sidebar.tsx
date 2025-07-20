"use client";
import { Button } from "@/components/ui/button";
import {
  BookImage,
  LogOut,
  Plane,
  Ticket,
  User,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
export default function Sidebar() {
  return (
    <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5 max-md:hidden">
      <div className="space-y-2">
        {/* <div className="uppercase font-bold text-base text-center ">
          Kategori
        </div> */}
        <Button variant={"ghost"} asChild className="w-full justify-start">
          <Link href={"/history"}>
            <BookImage className="mr-2 w-4 h-4" />
            Dashboard
          </Link>
        </Button>
        <Button variant={"ghost"} asChild className="w-full justify-start">
          <Link href={"/history/makanan"} className="flex justify-between">
            <div className="flex">
              <UtensilsCrossed className="mr-2 w-4 h-4" />
              Report
            </div>
          </Link>
        </Button>
        <Button variant={"ghost"} asChild className="w-full justify-start">
          <Link href={"/history/penerbangan"}>
            <Plane className="mr-2 w-4 h-4" />
            Master Data
          </Link>
        </Button>
        <Button variant={"ghost"} asChild className="w-full justify-start">
          <Link href={"/history/konser"}>
            <Ticket className="mr-2 w-4 h-4" />
            User
          </Link>
        </Button>
      </div>
      <div className="space-y-2">
        <Button
          variant={"destructive"}
          className="w-full justify-start"
          type="submit"
          onClick={() => (
            (window.location.href = "/login"),
            localStorage.removeItem("username")
          )}
        >
          <LogOut className="mr-2 w-4 h-4" />
          Logout
        </Button>
      </div>
    </section>
  );
}
