"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarComp() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-4 text-sm">
            <HoveredLink href="#">Frontend Development</HoveredLink>
            <HoveredLink href="#">Next.js</HoveredLink>
            <HoveredLink href="#">React.js</HoveredLink>
            <HoveredLink href="#">MongoDB</HoveredLink>
            <HoveredLink href="#">Python</HoveredLink>
            <HoveredLink href="#">Javascript</HoveredLink>
            <HoveredLink href="#">Problem Solving</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-0 md:p-4">
            <ProductItem
              title="Apni Dukaan"
              href="https://apni-dukaan-umber.vercel.app/"
              src="https://res.cloudinary.com/dzjlp82fv/image/upload/v1744719450/Screenshot_2025-04-15_at_5.45.39_PM_ssejpj.png"
              description="Manage your shop with Apni Dukaan, an inventory management service." />
            <ProductItem
              title="Go For Gold"
              href="https://goforgold.in/"
              src="https://res.cloudinary.com/dzjlp82fv/image/upload/v1744719704/Screenshot_2025-04-15_at_5.51.26_PM_y4m0zl.png"
              description="Learn from ICPC world finalists and explore all on going bootcamps for ICPC" />
            <ProductItem
              title="Healthy Jeewan"
              href="https://www.healthyjeevan.co.in/"
              src="https://res.cloudinary.com/dzjlp82fv/image/upload/v1744719871/Screenshot_2025-04-15_at_5.54.12_PM_nvsu68.png"
              description="Explore tasty recipes of healthy snacks now!!" />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">1kunalvats9@gmail.com</HoveredLink>
            <HoveredLink href="https://www.instagram.com/1kunal_vats9/">Instagram</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/kunal-vats-b67aa2309">LinkedIn</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
