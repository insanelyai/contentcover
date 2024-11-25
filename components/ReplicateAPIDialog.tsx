"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { motion } from "framer-motion";
import { buttonVariants } from "./ui/button";
import { SettingsIcon } from "lucide-react";

export default function ReplicateAPIDialog() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <motion.div
            className={buttonVariants({
              variant: "default",
              size: "icon",
              className:
                "hover:bg-white hover:text-black ring-1 ring-muted-foreground rounded-full cursor-default",
            })}
            whileTap={{ scale: 0.9 }}
          >
            <SettingsIcon />
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Replicate API Key</DropdownMenuLabel>

          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
