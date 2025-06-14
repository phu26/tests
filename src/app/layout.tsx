import type { Metadata } from "next";

import "./globals.css";
import "./cuss.css";

import Header from "@/app/Header";
import Footer from "@/app/Footer";


export const metadata: Metadata = {
  title: "TP GROUP",
  description: "TPGROUP makes trading simple, as Investors can copy trades made by experienced traders while both earn from profitable trades",
  icons: {
    icon: "/icon.ico",
    apple: "/icon.ico",
    shortcut: "icon.ico",
  }
  
    
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
        
       className="home page-template page-template-100-width page-template-100-width-php page page-id-497 awb-no-sidebars fusion-image-hovers fusion-pagination-sizing fusion-button_type-flat fusion-button_span-no fusion-button_gradient-linear avada-image-rollover-circle-yes avada-image-rollover-no fusion-body ltr fusion-sticky-header no-mobile-slidingbar fusion-disable-outline fusion-sub-menu-fade mobile-logo-pos-left layout-wide-mode avada-has-boxed-modal-shadow-none layout-scroll-offset-full avada-has-zero-margin-offset-top fusion-top-header menu-text-align-center mobile-menu-design-modern fusion-show-pagination-text fusion-header-layout-v1 avada-responsive avada-footer-fx-sticky avada-menu-highlight-style-background fusion-search-form-clean fusion-main-menu-search-overlay fusion-avatar-circle avada-dropdown-styles avada-blog-layout-large avada-blog-archive-layout-grid avada-header-shadow-no avada-menu-icon-position-left avada-has-pagetitle-100-width avada-has-breadcrumb-mobile-hidden avada-has-titlebar-hide avada-header-border-color-full-transparent avada-has-pagination-width_height avada-flyout-menu-direction-fade avada-ec-views-v1 awb-link-decoration fusion-no-touch">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
