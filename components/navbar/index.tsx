"use client";

import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const navItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-primary)" : "none",
          width: scrolled ? "50%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full px-4 py-2 dark:bg-neutral-700"
      >
        <Image
          className="h-10 w-10 rounded-full"
          src="/avatar.jpeg"
          width={100}
          height={100}
          alt="avatar"
        />
        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              className="relative cursor-pointer px-2 py-1 text-sm"
              href={item.href}
              key={idx}
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {isHovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
