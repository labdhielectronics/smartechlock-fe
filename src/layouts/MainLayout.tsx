"use client";;
import React, { useEffect, useState } from "react";


// import { ChevronUp } from "lucide-react";

import Header from "@/components/layout/header";
// import MobileSidebar from "@/components/mobile-sidebar";
import Footer from "@/components/layout/footer";



const MainLayout = ({ children }: { children: React.ReactNode }) => {
 

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //  const queryClient = new QueryClient();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const handleMobileSidebarClose = () => {
    setIsMobileSidebarOpen(false)
  }


  return (
    <div>
       <Header  />
           
      {children}
       <Footer />
    
    </div>
  );
};

export default MainLayout;
