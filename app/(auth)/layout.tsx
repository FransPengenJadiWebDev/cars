import { ReactNode } from "react";

// app/(auth)/layout.tsx
export default function AuthLayout({ children } : { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}