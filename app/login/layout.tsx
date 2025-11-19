import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login -  Food Delivery & Pickup",
  description:
    "Order your favorite local food for delivery or pickup in minutes. Quick, easy ordering powered by the high performance of Next.js",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
