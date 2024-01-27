import type { Metadata } from "next";


import { TopHeader } from "@/components";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <main className={`main`}>
        
        <div className={``}>{children}</div>
        
      </main>
    
  );
}
