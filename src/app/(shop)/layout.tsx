import type { Metadata } from "next";


import { TopHeader } from "@/components";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <main className={`main`}>
        <TopHeader/>
        <div className={`px-0 sm:px-10`}>{children}</div>
        
      </main>
    
  );
}
