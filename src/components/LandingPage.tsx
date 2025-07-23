"use client";

import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spacer,
} from "@heroui/react";
import { motion } from "framer-motion";

interface LandingPageProps {
  user?: {
    email: string;
  } | null;
  adminUrl?: string;
}

export default function LandingPage({ user, adminUrl }: LandingPageProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Features",
    "Pricing",
    "Documentation",
    "About",
    "Contact",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Navigation */}
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent backdrop-blur-md"
        maxWidth="xl"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white sm:hidden"
          />
          <NavbarBrand>
            <p className="text-xl font-bold text-white">PayloadCMS</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem>
            <Button variant="light" className="text-white">
              Features
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button variant="light" className="text-white">
              Pricing
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button variant="light" className="text-white">
              Docs
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          {user ? (
            <NavbarItem>
              <Chip color="success" variant="flat">
                {user.email}
              </Chip>
            </NavbarItem>
          ) : (
            <NavbarItem>
              <Button color="primary" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          )}
          {adminUrl && (
            <NavbarItem>
              <Button
                as="a"
                href={adminUrl}
                target="_blank"
                color="secondary"
                variant="solid"
              >
                Admin Panel
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>

        <NavbarMenu className="bg-black/80 backdrop-blur-md">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Button className="w-full text-white" variant="light" size="lg">
                {item}
              </Button>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Chip color="secondary" variant="flat" className="mb-6">
              🚀 Powered by Payload CMS & Hero UI
            </Chip>

            <h1 className="mb-6 text-5xl leading-tight font-bold text-white md:text-7xl">
              Build Amazing
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-center text-xl leading-relaxed text-gray-300">
              Kombinasi sempurna antara Payload CMS yang powerful dan Hero UI
              components yang modern untuk membangun aplikasi web yang luar
              biasa.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                color="primary"
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
              >
                Get Started
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="border-white px-8 py-6 text-lg font-semibold text-white hover:bg-white hover:text-black"
              >
                View Demo
              </Button>
            </div>

            {/* Email Subscription */}
            <div className="mx-auto max-w-md">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  classNames={{
                    input: "text-white",
                    inputWrapper:
                      "bg-white/10 backdrop-blur-md border-white/20",
                  }}
                />
                <Button color="secondary">Subscribe</Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              Why Choose Our Stack?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Teknologi modern yang terintegrasi untuk pengalaman development
              yang optimal
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Payload CMS",
                description:
                  "Headless CMS yang powerful dengan TypeScript support dan admin panel yang modern",
                icon: "🚀",
              },
              {
                title: "Hero UI",
                description:
                  "Component library yang beautiful dan customizable dengan Tailwind CSS",
                icon: "🎨",
              },
              {
                title: "Next.js 15",
                description:
                  "Framework React terbaru dengan App Router dan Server Components",
                icon: "⚡",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                  <CardHeader className="pb-2 text-center">
                    <div className="mb-2 text-4xl">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </CardHeader>
                  <CardBody className="text-center">
                    <p className="text-gray-300">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-white/10 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md">
              <CardBody className="p-12">
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Ready to Start Building?
                </h2>
                <p className="mb-8 text-lg text-gray-300">
                  Mulai project Anda dengan template yang sudah terintegrasi dan
                  siap production
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    color="primary"
                    size="lg"
                    className="px-8 py-6 text-lg font-semibold"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="bordered"
                    size="lg"
                    className="border-white px-8 py-6 text-lg font-semibold text-white hover:bg-white hover:text-black"
                  >
                    Contact Sales
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-400">
            © 2024 Payload CMS Hero UI Template. Built with ❤️ using modern web
            technologies.
          </p>
          <Spacer y={4} />
          <div className="flex justify-center gap-4">
            <Button variant="light" size="sm" className="text-gray-400">
              Privacy Policy
            </Button>
            <Button variant="light" size="sm" className="text-gray-400">
              Terms of Service
            </Button>
            <Button variant="light" size="sm" className="text-gray-400">
              Support
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
