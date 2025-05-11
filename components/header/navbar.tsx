import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between h-14">
      {/* Logo text */}
      <div>
        <h1 className="font-bold text-xl">
          YT<span className="text-red-500">Shorts</span>
        </h1>
      </div>
      {/* Search Input field */}
      <div className="w-1/2">
        <Input type="text" placeholder="Search..." />
      </div>

      
    </div>
  );
};


