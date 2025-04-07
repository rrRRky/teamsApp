import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderIcon from "@mui/icons-material/Folder";

export default function Sidebar() {
  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-100 border-r p-4 space-y-2">
      <h3 className="text-md font-semibold mb-2">Navigation</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 text-gray-700">
          <HomeIcon /> Home
        </li>
        <li>
          <div
            className="flex items-center gap-2 text-gray-700 cursor-pointer"
            onClick={() => setParentOpen(!parentOpen)}
          >
            <FolderIcon /> Parent Item
          </div>
          {parentOpen && (
            <ul className="ml-6 mt-1 space-y-1 text-sm">
              <li>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setChildOpen(!childOpen)}
                >
                  <SettingsIcon fontSize="small" /> Child Item
                </div>
                {childOpen && (
                  <ul className="ml-6 space-y-1">
                    <li className="flex items-center gap-2">
                      <SettingsIcon fontSize="small" /> Grandchild Item
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}
