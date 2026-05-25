// app/(main)/layout.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import { ReactNode } from "react";

export default function MainLayout({ children } : { children: ReactNode }) {
  return (
    <div className="bg-mist-900">
      <Navbar />
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer/>
    </div>
  );
}