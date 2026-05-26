// app/(main)/layout.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import { ReactNode, Suspense } from "react";

export default function MainLayout({ children } : { children: ReactNode }) {
  return (
    <div className="bg-mist-900">
      {/* <Suspense fallback={<div className="h-20 bg-neutral-950" />}> */}
        <Navbar />
      {/* </Suspense> */}
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer/>
    </div>
  );
}