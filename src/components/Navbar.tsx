"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ sidebarOpen, setSidebarOpen }: Props) {
  const [showUserName, setShowUserName] = useState(false);

  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <span className="text-lg font-semibold">Teams Jayanita App</span>
      </div>
      <div className="relative flex items-center gap-2">
        <Avatar onClick={() => setShowUserName(!showUserName)} className="cursor-pointer" />
        {showUserName && (
          <div className="absolute right-0 mt-10 bg-white border shadow p-2 rounded">
            <p className="text-sm">John Doe</p>
          </div>
        )}
      </div>
    </header>
  );
}