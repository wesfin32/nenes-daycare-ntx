import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NeNe&apos;s Daycare Navasota",
  description: "Contact NeNe&apos;s Daycare to schedule a tour, ask questions, or learn about enrollment. Located in Navasota, Texas.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}