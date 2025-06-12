'use client'
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "radix-ui";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React, { useEffect } from "react";
import useWindowDimensions from "@/components/resize/windowDemensions";

export default function Home() {
  
  
   const [isMobile, setIsMobile] = React.useState(false);
  
    const { width, height } = useWindowDimensions();
   useEffect(() => {
 
   
    if (typeof width === "number" && width < 768) {
      setIsMobile(true);
      
    }else{
         setIsMobile(false);
    }
   },[width, height]);
  return (
    <div id="boxed-wrapper">
      <main id="main" className="clearfix width-100">
        <div className="fusion-row" style={{ maxWidth: "100%" }}>
          <section id="content" className="full-width">
   <div id="post-497" className="post-497 page type-page status-publish has-post-thumbnail hentry">

<span className="entry-title rich-snippet-hidden">Trang chủ</span>
        <span className="vcard rich-snippet-hidden">
          <span className="fn">
            <a href="https://backcom.trade/author/nqhai86gmail-com/" title="Đăng bởi nqhai86@gmail.com" rel="author">nqhai86@gmail.com</a>
          </span>
        </span>
        <span className="updated rich-snippet-hidden">2025-03-28T15:03:56+07:00</span>
        <div className="post-content">
          
          <div
          
            className="fusion-fullwidth fullwidth-box fusion-builder-row-1 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling"
            style={{
              // CSS variables as object keys
              ["--awb-background-position" as string]: "right bottom",
              ["--awb-border-sizes-top" as string]: "5px",
              ["--awb-border-color" as string]: "var(--awb-color66)",
              ["--awb-border-radius-top-left" as string]: "0px",
              ["--awb-border-radius-top-right" as string]: "0px",
              ["--awb-border-radius-bottom-right" as string]: "0px",
              ["--awb-border-radius-bottom-left" as string]: "0px",
              ["--awb-padding-top" as string]: "30px",
              ["--awb-padding-bottom" as string]: "30px",
              ["--awb-margin-top" as string]: "-60px",
              ["--awb-background-color" as string]: "#1e2329",
              ["--awb-background-size" as string]: "484px",
              ["--awb-flex-wrap" as string]: "wrap",
            }}
          >
            <div
              className="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap"
              style={{
                maxWidth: "1456px",
                marginLeft: "calc(-4% / 2 )",
                marginRight: "calc(-4% / 2 )"
              }}
            >
              <div
                className="fusion-layout-column fusion_builder_column fusion-builder-column-0 fusion-flex-column"
                style={{
                  "--awb-bg-size": "cover",
                  "--awb-width-large": "100%",
                  "--awb-margin-top-large": "0px",
                  "--awb-spacing-right-large": "5.0526315789474%",
                  "--awb-margin-bottom-large": "20px",
                  "--awb-spacing-left-large": "5.0526315789474%",
                  "--awb-width-medium": "100%",
                  "--awb-order-medium": 1,
                  "--awb-spacing-right-medium": "1.92%",
                  "--awb-spacing-left-medium": "1.92%",
                  "--awb-width-small": "100%",
                  "--awb-order-small": 1,
                  "--awb-spacing-right-small": "1.92%",
                  "--awb-spacing-left-small": "1.92%",
                } as React.CSSProperties}
              >
                <div className="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
                  <div className="fusion-title title fusion-title-1 fusion-sep-none fusion-title-text fusion-title-size-one" style={{ "--awb-text-color": "var(--awb-color1)" } as React.CSSProperties}>
                    <h1 className="fusion-title-heading title-heading-left fusion-responsive-typography-calculated" style={{ margin: 0, "--fontSize": 48, lineHeight: "var(--awb-typography1-line-height)" } as React.CSSProperties}>Follow and copy the trades of experienced traders</h1>
                  </div>
                  <div className="fusion-text fusion-text-1" style={{ "--awb-font-size": "18px", "--awb-text-color": "var(--awb-color1)" } as React.CSSProperties}>
                    <p>
                      <span style={{ color: "#facc15", fontWeight: "bold" }}>Want to turn every Forex or Crypto trade into an extra profit opportunity?</span> Optimize your earnings instantly with TPgroup’s copy the trades service!Just by joining, you can leverage the knowledge and trading efficiency of experienced traders at TPGROUP without needing to develop your own trading strategy.
                    </p>
                  </div>
                  <div>
                    <a
                      className="fusion-button button-flat fusion-button-default-size button-custom fusion-button-default button-1 fusion-button-default-span fusion-button-default-type"
                      style={{
                        "--button_accent_color": "var(--awb-color6)",
                        "--button_border_color": "var(--awb-color4)",
                        "--button_accent_hover_color": "var(--awb-color1)",
                        "--button_border_hover_color": "var(--awb-color1)",
                        "--button-border-radius-top-left": "5px",
                        "--button-border-radius-top-right": "5px",
                        "--button-border-radius-bottom-right": "5px",
                        "--button-border-radius-bottom-left": "5px",
                        "--button_gradient_top_color": "var(--awb-color4)",
                        "--button_gradient_bottom_color": "var(--awb-color4)",
                        "--button_gradient_top_color_hover": "#f97316",
                        "--button_gradient_bottom_color_hover": "#f97316",
                        "--button_font_size": "20px"
                      } as React.CSSProperties}
                      target="_self"
                      href="https://www.social-trading.club/strategy/110271215"
                    >
                        <span className="fusion-button-text">Get Started</span>
                    </a>
                  </div>
                  <div
                    className="accordian fusion-accordian"
                    style={{
                      "--awb-padding-top": "10px",
                      "--awb-border-size": "0px",
                      "--awb-icon-size": "18px",
                      "--awb-content-font-size": "16px",
                      "--awb-icon-alignment": "left",
                      "--awb-hover-color": "var(--awb-color7)",
                      "--awb-border-color": "var(--awb-color7)",
                      "--awb-background-color": "var(--awb-color7)",
                      "--awb-divider-color": "var(--awb-color4)",
                      "--awb-divider-hover-color": "var(--awb-color4)",
                      "--awb-icon-color": "var(--awb-color7)",
                      "--awb-title-color": "var(--awb-color1)",
                      "--awb-content-color": "var(--awb-color1)",
                      "--awb-icon-box-color": "var(--awb-color1)",
                      "--awb-toggle-hover-accent-color": "var(--awb-color3)",
                      "--awb-toggle-active-accent-color": "var(--awb-color3)",
                      "--awb-title-font-family": "var(--awb-typography1-font-family)",
                      "--awb-title-font-weight": "var(--awb-typography1-font-weight)",
                      "--awb-title-font-style": "var(--awb-typography1-font-style)",
                      "--awb-title-font-size": "18px",
                      "--awb-title-letter-spacing": "var(--awb-typography1-letter-spacing)",
                      "--awb-title-line-height": "var(--awb-typography1-line-height)",
                      "--awb-content-font-family": "var(--awb-typography4-font-family)",
                      "--awb-content-font-weight": "var(--awb-typography4-font-weight)",
                      "--awb-content-font-style": "var(--awb-typography4-font-style)",
                    } as React.CSSProperties}
                  >
                    <div className="panel-group fusion-toggle-icon-boxed" id="accordion-497-1">
                      <div className="fusion-panel panel-default panel-bfb2bb222946b3845 fusion-toggle-no-divider">
                        <div className="panel-heading">
                          <h4 className="panel-title toggle fusion-responsive-typography-calculated" id="toggle_bfb2bb222946b3845" data-fontsize="18" data-lineheight="21.6px" style={{ "--fontSize": 18, lineHeight: "1.2" } as React.CSSProperties}>
                            <a aria-expanded="false" aria-controls="bfb2bb222946b3845" role="button" data-toggle="collapse" data-parent="#accordion-497-1" data-target="#bfb2bb222946b3845" href="#bfb2bb222946b3845">

                             
                            </a>
                          </h4>
                        </div>
                        <div id="bfb2bb222946b3845" className="panel-collapse collapse " aria-labelledby="toggle_bfb2bb222946b3845">
                          <div className="panel-body toggle-content fusion-clearfix">
                        
                         
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
           <div className="fusion-fullwidth fullwidth-box fusion-builder-row-3 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style={{
            "--awb-border-radius-top-left": "0px",
            "--awb-border-radius-top-right": "0px",
            "--awb-border-radius-bottom-right": "0px",
            "--awb-border-radius-bottom-left": "0px",
            "--awb-padding-top": "30px",
            "--awb-background-color": "var(--awb-color7)",
            "--awb-flex-wrap": "wrap"
          } as React.CSSProperties}>
            <div className="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style={{ maxWidth: "1456px", marginLeft: "calc(-4% / 2 )", marginRight: "calc(-4% / 2 )" }}>
    <div
      className="fusion-layout-column fusion_builder_column fusion-builder-column-3 fusion_builder_column_1_1 1_1 fusion-flex-column"
      style={{
        "--awb-bg-size": "cover",
        "--awb-width-large": "100%",
        "--awb-margin-top-large": "0px",
        "--awb-spacing-right-large": "1.92%",
        "--awb-margin-bottom-large": "20px",
        "--awb-spacing-left-large": "1.92%",
        "--awb-width-medium": "100%",
        "--awb-order-medium": 0,
        "--awb-spacing-right-medium": "1.92%",
        "--awb-spacing-left-medium": "1.92%",
        "--awb-width-small": "100%",
        "--awb-order-small": 0,
        "--awb-spacing-right-small": "1.92%",
        "--awb-spacing-left-small": "1.92%"
      } as React.CSSProperties}
    >
                              <div className="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
                                <div
                                  className="fusion-title title fusion-title-12 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-two"
                                  style={{
                                    "--awb-text-color": "var(--awb-color1)",
                                    "--awb-margin-bottom": "40px",
                                    "--awb-margin-bottom-medium": "40px"
                                  } as React.CSSProperties}
                                  id="faq"
                                >
                                    <h2
                                    className="fusion-title-heading title-heading-center fusion-responsive-typography-calculated"
                                    style={{
                                      margin: 0,
                                      "--fontSize": 36,
                                      lineHeight: "var(--awb-typography1-line-height)"
                                    } as React.CSSProperties}
                                    >
                                    <SearchRoundedIcon
                                      className="fb-icon-element-1 fb-icon-element fontawesome-icon fa-search fas circle-no fusion-text-flow"
                                      style={{
                                      "--awb-font-size": "32px",
                                      "--awb-margin-right": "16px"
                                      } as React.CSSProperties}
                                     />
                                     Introduction
                                    </h2>
                                </div>
                                <div
                                  className="fusion-builder-row fusion-builder-row-inner fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap"
                                  style={{
                                    width: "104% !important",
                                    maxWidth: "104% !important",
                                    marginLeft: "calc(-4% / 2 )",
                                    marginRight: "calc(-4% / 2 )"
                                  } as React.CSSProperties}
                                >
                    <div
                      className="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-7 fusion_builder_column_inner_1_2 1_2 fusion-flex-column"
    style={{
        "--awb-bg-size": "cover",
       
        "--awb-margin-top-large": "0px",
        "--awb-spacing-right-large": "3.84%",
        "--awb-margin-bottom-large": "20px",
        "--awb-spacing-left-large": "3.84%",
        "--awb-width-medium": "50%",
        "--awb-order-medium": 0,
        "--awb-spacing-right-medium": "3.84%",
        "--awb-spacing-left-medium": "3.84%",
        "--awb-width-small": "100%",
        "--awb-order-small": 0,
        "--awb-spacing-right-small": "1.92%",
        "--awb-spacing-left-small": "1.92%"
        } as React.CSSProperties}
                    ><div className="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
                        <div className="accordian fusion-accordian" style={{
                          "--awb-border-size": "2px",
                          "--awb-icon-size": "24px",
                          "--awb-content-font-size": "16px",
                          "--awb-icon-alignment": "left",
                          "--awb-hover-color": "var(--awb-color7)",
                          "--awb-border-color": "var(--awb-color7)",
                          "--awb-background-color": "var(--awb-color7)",
                          "--awb-divider-color": "var(--awb-color4)",
                          "--awb-divider-hover-color": "var(--awb-color4)",
                          "--awb-icon-color": "var(--awb-color8)",
                          "--awb-title-color": "var(--awb-color1)",
                          "--awb-content-color": "var(--awb-color1)",
                          "--awb-icon-box-color": "var(--awb-color1)",
                          "--awb-toggle-hover-accent-color": "var(--awb-color3)",
                          "--awb-toggle-active-accent-color": "var(--awb-color3)",
                          "--awb-title-font-family": "var(--awb-typography1-font-family)",
                          "--awb-title-font-weight": "var(--awb-typography1-font-weight)",
                          "--awb-title-font-style": "var(--awb-typography1-font-style)",
                          "--awb-title-font-size": "18px",
                          "--awb-title-letter-spacing": "var(--awb-typography1-letter-spacing)",
                          "--awb-title-line-height": "var(--awb-typography1-line-height)",
                          "--awb-content-font-family": "var(--awb-typography4-font-family)",
                          "--awb-content-font-weight": "var(--awb-typography4-font-weight)",
                          "--awb-content-font-style": "var(--awb-typography4-font-style)"
                        } as React.CSSProperties}>
                        <div className="accordian fusion-accordian" >
                          <div className="panel-group fusion-toggle-icon-boxed" id="accordion-497-2">
                            <div className="fusion-panel panel-default panel-98dbe2d8f7a3fb590 fusion-toggle-no-divider fusion-toggle-boxed-mode">
                             
                              <div
                                id="98dbe2d8f7a3fb590"
                                className={`panel-collapse collapse in`}
                                aria-labelledby="toggle_98dbe2d8f7a3fb590"
                              >
                                <div className="panel-body toggle-content fusion-clearfix">
                                    <p>
                                    I started trading in 2000 with many successes and failures. Step by step, I learned valuable lessons from many traders, then adjusted my approach and achieved stable and solid profits. I hope that together we can <span style={{color: '#facc15', fontWeight: 'bold'}}>make money</span> from the market.
                                    </p>
                                    <p>
                                    My team and I share our trades through the social copy trading platform <span style={{color: '#facc15', fontWeight: 'bold'}}>Exness</span>
                                    </p>
                                </div>
                              </div>
                            </div>
                            <div className="fusion-panel panel-default panel-ffbc17330913c97ce fusion-toggle-no-divider fusion-toggle-boxed-mode">
                             
                              <div id="ffbc17330913c97ce" className={`panel-collapse collapse in  `} aria-labelledby="toggle_ffbc17330913c97ce">
                                <div className="panel-body toggle-content fusion-clearfix">
                                  <p>
                                    Every trade carries risk, so we trade each strategy separately and do not copy trades from multiple strategies at the same time.
                                  </p>
                                    <p>🚨 Financial investment always carries risks, including the possibility of losing your invested capital. If anyone tells you that financial investment is completely safe, that is a blatant lie.</p>
                                  <p>✅ Connect with TPGROUP today and: <br /> ✓ Allocate your capital wisely according to your personal finances and only copy with money you can afford to lose. <br /> ✓ Consider the risks before considering the profits. </p>
                                </div>
                              </div>
                            </div>
                            <div className="fusion-panel panel-default panel-94cb5c9ec679eac92 fusion-toggle-no-divider fusion-toggle-boxed-mode">
                              
                              <div id="94cb5c9ec679eac92" className={`panel-collapse collapse in`} aria-labelledby="toggle_94cb5c9ec679eac92">
                                <div className="panel-body toggle-content fusion-clearfix">
                                  <p>✓ The best time to copy for long-term performance is 6 months to 1 year, to achieve the most effective profits. That is the mindset of an investor, and it is the most correct mindset.</p>
                                  <p>✓ Allocate your capital according to your personal investment style. You can choose different strategies to copy, but never put all your capital into a single strategy.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
               
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fusion-fullwidth fullwidth-box fusion-builder-row-2 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" >
            <div
              className="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap"
              style={{
                maxWidth: "1456px",
                marginLeft: "calc(-4% / 2 )",
                marginRight: "calc(-4% / 2 )"
              } as React.CSSProperties}
            >
              <div className="fusion-layout-column fusion_builder_column fusion-builder-column-2 fusion_builder_column_1_1 1_1 fusion-flex-column" style={{ "--awb-bg-size": "cover", "--awb-width-large": "100%", "--awb-margin-top-large": "0px", "--awb-spacing-right-large": "1.92%", "--awb-margin-bottom-large": "20px", "--awb-spacing-left-large": "1.92%", "--awb-width-medium": "100%", "--awb-order-medium": 0, "--awb-spacing-right-medium": "1.92%", "--awb-spacing-left-medium": "1.92%", "--awb-width-small": "100%", "--awb-order-small": 0, "--awb-spacing-right-small": "1.92%", "--awb-spacing-left-small": "1.92%" } as React.CSSProperties}>
                <div className="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
                  <div className="fusion-title title fusion-title-2 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-two" style={{ "--awb-text-color": "var(--awb-color1)" } as React.CSSProperties} id="start">
                    <h2 className="fusion-title-heading title-heading-center fusion-responsive-typography-calculated" style={{ margin: 0, "--fontSize": 36, lineHeight: "var(--awb-typography1-line-height)" } as React.CSSProperties}>Start</h2>
                  </div>
                  <div className="fusion-text fusion-text-2" style={{ "--awb-content-alignment": "center", "--awb-font-size": "18px", "--awb-text-color": "#ffffff" } as React.CSSProperties}>
                    <p>Click button <span style={{ color: "#facc15" }}>Start copying</span>
                    </p>
                  </div>
                
                  <div className="fusion-title title fusion-title-6 fusion-sep-none fusion-title-text fusion-title-size-three" style={{ "--awb-text-color": "var(--awb-color1)" } as React.CSSProperties}>
                    <h3 className="fusion-title-heading title-heading-left fusion-responsive-typography-calculated" style={{ margin: 0, "--fontSize": 24, lineHeight: "var(--awb-typography1-line-height)" } as React.CSSProperties}>Exness</h3>
                  </div>
                  <div className="fusion-builder-row fusion-builder-row-inner fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style={{ width: "104% !important", maxWidth: "104% !important", marginLeft: "calc(-4% / 2 )", marginRight: "calc(-4% / 2 )" } as React.CSSProperties}>
              
                  
                  
                    <div  className="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-2 fusion_builder_column_inner_1_3 1_3 fusion-flex-column" style={{ "--awb-padding-right": "20px", "--awb-padding-bottom": "20px", "--awb-padding-left": "20px", "--awb-overflow": "hidden", "--awb-bg-color": "var(--awb-color6)", "--awb-bg-color-hover": "var(--awb-color6)", "--awb-bg-size": "cover", "--awb-border-color": "var(--awb-color7)", "--awb-border-top": "1px", "--awb-border-right": "1px", "--awb-border-bottom": "1px", "--awb-border-left": "1px", "--awb-border-style": "solid", "--awb-border-radius": "20px 20px 20px 20px", "--awb-width-large": "33.333333333333%", "--awb-margin-top-large": "0px", "--awb-spacing-right-large": "5.76%", "--awb-margin-bottom-large": "20px", "--awb-spacing-left-large": "5.76%", "--awb-width-medium": "33.333333333333%", "--awb-order-medium": 0, "--awb-spacing-right-medium": "5.76%", "--awb-spacing-left-medium": "5.76%", "--awb-width-small": "100%", "--awb-order-small": 0, "--awb-spacing-right-small": "1.92%", "--awb-spacing-left-small": "1.92%" } as React.CSSProperties}>
                      <div style={{paddingTop:'10px',backgroundColor: "#1e2329"}} className="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
                               <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root hLanG css-bovk7b" data-auto="strategy_detail_card">
  {isMobile ? (
     <div className="gs5fU gBc_5" style={{borderRadius:'10px'}}>
                               <Dialog>
  <DialogTrigger> <Image 
       src="/picmobile01.png"  
       width={500}
       height={100}
       alt="Photo"
        data-auto="strategy_image" className=""/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
    <VisuallyHidden.Root>
    <DialogTitle></DialogTitle>
    </VisuallyHidden.Root>
     
      <DialogDescription >
      <Image 
       src="/picmobile01.png"  
       width={500}
       height={500}
       style={{width:"-webkit-fill-available"}}
       alt="Photo"
        data-auto="strategy_image" className=""/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
      
     </div>
  ):(
 <div className="gs5fU gBc_5" style={{borderRadius:'10px'}}>
                               <Dialog>
  <DialogTrigger> <Image 
       src="/image01.jpg"  
       width={500}
       height={100}
       alt="Photo"
        data-auto="strategy_image" className=""/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
    <VisuallyHidden.Root>
    <DialogTitle></DialogTitle>
    </VisuallyHidden.Root>
     
      <DialogDescription >
      <Image 
       src="/image01.jpg"  
       width={500}
       height={500}
       style={{width:"-webkit-fill-available"}}
       alt="Photo"
        data-auto="strategy_image" className=""/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
      
     </div>
  )}
                              
</div>
                        <div className="fusion-title title fusion-title-7 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-three" style={{ "--awb-text-color": "var(--awb-color1)" } as React.CSSProperties}>
                          <h3 className="fusion-title-heading title-heading-center fusion-responsive-typography-calculated" style={{ margin: 0, "--fontSize": 24, lineHeight: "var(--awb-typography1-line-height)" } as React.CSSProperties}>Exness - TPGROUP___</h3>
                        </div>
                       
                        <div className="divcopy">
                          <div className="row1">
                            <span>Strategy Provider</span>
                           <span style={{ color: "#facc15", fontWeight: "bold" }}> Gia Vinh Lê Phạm</span>
                          </div>
                          <div className="row1">
                            <span>From</span>
                            <span className="code-container" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <span className="code-text">Viet Nam</span>
                            
                            </span>
                          </div>
                          <div className="row1">
                           
                          </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <a
                            className="fusion-button button-flat fusion-button-default-size button-custom fusion-button-default button-4 fusion-button-default-span fusion-button-default-type"
                            style={{
                              "--button_accent_color": "var(--awb-color1)",
                              "--button_accent_hover_color": "var(--awb-color1)",
                              "--button_border_hover_color": "var(--awb-color1)",
                              "--button_border_width-top": "1px",
                              "--button_border_width-right": "1px",
                              "--button_border_width-bottom": "1px",
                              "--button_border_width-left": "1px",
                              "--button_gradient_top_color": "var(--awb-color6)",
                              "--button_gradient_bottom_color": "var(--awb-color6)",
                              "--button_gradient_top_color_hover": "#f97316",
                              "--button_gradient_bottom_color_hover": "#f97316",
                              "--button_margin-top": "15px"
                            } as React.CSSProperties}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            href="https://www.social-trading.club/strategy/110271215"
                          >
                            <span className="fusion-button-text">Start copying</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-3 fusion_builder_column_inner_1_3 1_3 fusion-flex-column" style={{
                      "--awb-padding-right": "20px",  
                      "--awb-padding-bottom": "20px",
                      "--awb-padding-left": "20px",
                      "--awb-overflow": "hidden",
                      "--awb-bg-color": "var(--awb-color6)",
                      "--awb-bg-color-hover": "var(--awb-color6)",
                      "--awb-bg-size": "cover",
                      "--awb-border-color": "var(--awb-color7)",
                      "--awb-border-top": "1px",
                      "--awb-border-right": "1px",
                      "--awb-border-bottom": "1px",
                      "--awb-border-left": "1px",
                      "--awb-border-style": "solid",
                      "--awb-border-radius": "10px 10px 10px 10px",
                      "--awb-width-large": "33.333333333333%",
                      "--awb-margin-top-large": "0px",
                      "--awb-spacing-right-large": "5.76%",
                      "--awb-margin-bottom-large": "20px",
                      "--awb-spacing-left-large": "5.76%",
                      "--awb-width-medium": "33.333333333333%",
                      "--awb-order-medium": 0,
                      "--awb-spacing-right-medium": "5.76%",
                      "--awb-spacing-left-medium": "5.76%",
                      "--awb-width-small": "100%",
                      "--awb-order-small": 0,
                      "--awb-spacing-right-small": "1.92%",
                      "--awb-spacing-left-small": "1.92%"
                    } as React.CSSProperties}>
                      <div style={{paddingTop:'10px',backgroundColor: "#1e2329"}} className="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
                               <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root hLanG css-bovk7b" data-auto="strategy_detail_card">
  
                              {isMobile ? (
     <div className="gs5fU gBc_5" style={{borderRadius:'10px'}}>
                               <Dialog>
  <DialogTrigger> <Image 
       src="/picmobile02.png"  
       width={500}
       height={100}
       alt="Photo"
        data-auto="strategy_image" className=""/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
    <VisuallyHidden.Root>
    <DialogTitle></DialogTitle>
    </VisuallyHidden.Root>
     
      <DialogDescription >
      <Image 
       src="/picmobile02.png"  
       width={500}
       height={500}
       style={{width:"-webkit-fill-available"}}
       alt="Photo"
        data-auto="strategy_image" className=""/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
      
     </div>
  ):(
 <div className="gs5fU gBc_5" style={{borderRadius:'10px'}}>
                               <Dialog>
  <DialogTrigger> <Image 
       src="/image02.jpg"  
       width={500}
       height={100}
       alt="Photo"
        data-auto="strategy_image" className=""/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
    <VisuallyHidden.Root>
    <DialogTitle></DialogTitle>
    </VisuallyHidden.Root>
     
      <DialogDescription >
      <Image 
       src="/image02.jpg"  
       width={500}
       height={500}
       style={{width:"-webkit-fill-available"}}
       alt="Photo"
        data-auto="strategy_image" className=""/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
      
     </div>
  )}
</div>
                        <div className="fusion-title title fusion-title-7 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-three" style={{ "--awb-text-color": "var(--awb-color1)" } as React.CSSProperties}>
                          <h3 className="fusion-title-heading title-heading-center fusion-responsive-typography-calculated" style={{ margin: 0, "--fontSize": 24, lineHeight: "var(--awb-typography1-line-height)" } as React.CSSProperties}>Exness - TPGROUP_01</h3>
                        </div>
                        <div className="divcopy">
                          <div className="row1">
                            <span>Strategy Provider</span>
                           <span style={{ color: "#facc15", fontWeight: "bold" }}> Gia Vinh Lê Phạm</span>
                          </div>
                          <div className="row1">
                            <span>Từ:</span>
                            <span className="code-container" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <span className="code-text">Viet Nam</span>
                            
                            </span>
                          </div>
                          <div className="row1">
                           
                          </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <a
                            className="fusion-button button-flat fusion-button-default-size button-custom fusion-button-default button-4 fusion-button-default-span fusion-button-default-type"
                            style={{
                              "--button_accent_color": "var(--awb-color1)",
                              "--button_accent_hover_color": "var(--awb-color1)",
                              "--button_border_hover_color": "var(--awb-color1)",
                              "--button_border_width-top": "1px",
                              "--button_border_width-right": "1px",
                              "--button_border_width-bottom": "1px",
                              "--button_border_width-left": "1px",
                              "--button_gradient_top_color": "var(--awb-color6)",
                              "--button_gradient_bottom_color": "var(--awb-color6)",
                              "--button_gradient_top_color_hover": "#f97316",
                              "--button_gradient_bottom_color_hover": "#f97316",
                              "--button_margin-top": "15px"
                            } as React.CSSProperties}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            href="https://social-trading.exness.com/strategy/110268597"
                          >
                            <span className="fusion-button-text">Start copying</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-4 fusion_builder_column_inner_1_3 1_3 fusion-flex-column" style={{
                      "--awb-padding-right": "20px",
                      "--awb-padding-bottom": "20px",
                      "--awb-padding-left": "20px",
                      "--awb-overflow": "hidden",
                      "--awb-bg-color": "var(--awb-color6)",
                      "--awb-bg-color-hover": "var(--awb-color6)",
                      "--awb-bg-size": "cover",
                      "--awb-border-color": "var(--awb-color7)",
                      "--awb-border-top": "1px",
                      "--awb-border-right": "1px",
                      "--awb-border-bottom": "1px",
                      "--awb-border-left": "1px",
                      "--awb-border-style": "solid",
                      "--awb-border-radius": "20px 20px 20px 20px",
                      "--awb-width-large": "33.333333333333%",
                      "--awb-margin-top-large": "0px",
                      "--awb-spacing-right-large": "5.76%",
                      "--awb-margin-bottom-large": "20px",
                      "--awb-spacing-left-large": "5.76%",
                      "--awb-width-medium": "33.333333333333%",
                      "--awb-order-medium": 0,
                      "--awb-spacing-right-medium": "5.76%",
                      "--awb-spacing-left-medium": "5.76%",
                      "--awb-width-small": "100%",
                      "--awb-order-small": 0,
                      "--awb-spacing-right-small": "1.92%",
                      "--awb-spacing-left-small": "1.92%"
                    } as React.CSSProperties}>
                        <div style={{paddingTop:'10px',backgroundColor: "#1e2329"}} className="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
                               <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root hLanG css-bovk7b" data-auto="strategy_detail_card">
  
                               <div className="gs5fU gBc_5" style={{borderRadius:'10px'}}>
       
       <Image 
       src="/image03.jpg"  
       width={500}
       height={100}
       alt="Photo"
        data-auto="strategy_image" className=""/>
     </div>
</div>
                        <div className="fusion-title title fusion-title-7 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-three" style={{ "--awb-text-color": "var(--awb-color1)" } as React.CSSProperties}>
                          <h3 className="fusion-title-heading title-heading-center fusion-responsive-typography-calculated" style={{ margin: 0, "--fontSize": 24, lineHeight: "var(--awb-typography1-line-height)" } as React.CSSProperties}>Exness - TPGROUP_02</h3>
                        </div>
                        <div className="divcopy">
                          <div className="row1">
                            <span>Strategy Provider</span>
                           <span style={{ color: "#facc15", fontWeight: "bold" }}> Lê Thủy</span>
                          </div>
                          <div className="row1">
                            <span>Từ:</span>
                            <span className="code-container" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <span className="code-text">Viet Nam</span>
                            
                            </span>
                          </div>
                          <div className="row1">
                           
                          </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <a
                            className="fusion-button button-flat fusion-button-default-size button-custom fusion-button-default button-4 fusion-button-default-span fusion-button-default-type"
                            style={{
                              "--button_accent_color": "var(--awb-color1)",
                              "--button_accent_hover_color": "var(--awb-color1)",
                              "--button_border_hover_color": "var(--awb-color1)",
                              "--button_border_width-top": "1px",
                              "--button_border_width-right": "1px",
                              "--button_border_width-bottom": "1px",
                              "--button_border_width-left": "1px",
                              "--button_gradient_top_color": "var(--awb-color6)",
                              "--button_gradient_bottom_color": "var(--awb-color6)",
                              "--button_gradient_top_color_hover": "#f97316",
                              "--button_gradient_bottom_color_hover": "#f97316",
                              "--button_margin-top": "15px"
                            } as React.CSSProperties}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            href="https://social-trading.exness.com/strategy/110287824"
                          >
                            <span className="fusion-button-text">Start copying</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-5 fusion_builder_column_inner_1_3 1_3 fusion-flex-column"
                      style={{
                        "--awb-padding-right": "20px",
                        "--awb-padding-bottom": "20px",
                        "--awb-padding-left": "20px",
                        "--awb-overflow": "hidden",
                        "--awb-bg-color": "var(--awb-color6)",
                        "--awb-bg-color-hover": "var(--awb-color6)",
                        "--awb-bg-size": "cover",
                        "--awb-border-color": "var(--awb-color7)",
                        "--awb-border-top": "1px",
                        "--awb-border-right": "1px",
                        "--awb-border-bottom": "1px",
                        "--awb-border-left": "1px",
                        "--awb-border-style": "solid",
                        "--awb-border-radius": "10px 10px 10px 10px",
                        "--awb-width-large": "33.333333333333%",
                        "--awb-margin-top-large": "0px",
                        "--awb-spacing-right-large": "5.76%",
                        "--awb-margin-bottom-large": "20px",
                        "--awb-spacing-left-large": "5.76%",
                        "--awb-width-medium": "33.333333333333%",
                        "--awb-order-medium": 0,
                        "--awb-spacing-right-medium": "5.76%",
                        "--awb-spacing-left-medium": "5.76%",
                        "--awb-width-small": "100%",
                        "--awb-order-small": 0,
                        "--awb-spacing-right-small": "1.92%",
                        "--awb-spacing-left-small": "1.92%"
                      } as React.CSSProperties}
                    >
                     <div style={{paddingTop:'10px',backgroundColor: "#1e2329"}} className="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
                               <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root hLanG css-bovk7b" data-auto="strategy_detail_card">
  
                               <div className="gs5fU gBc_5" style={{borderRadius:'10px'}}>
       
       <Image 
       src="/image04.jpg"  
       width={500}
       height={100}
       alt="Photo"
        data-auto="strategy_image" className=""/>
     </div>
</div>
                        <div className="fusion-title title fusion-title-7 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-three" style={{ "--awb-text-color": "var(--awb-color1)" } as React.CSSProperties}>
                          <h3 className="fusion-title-heading title-heading-center fusion-responsive-typography-calculated" style={{ margin: 0, "--fontSize": 24, lineHeight: "var(--awb-typography1-line-height)" } as React.CSSProperties}>Exness - TPGROUP_03</h3>
                        </div>
                        <div className="divcopy">
                          <div className="row1">
                            <span>Strategy Provider</span>
                           <span style={{ color: "#facc15", fontWeight: "bold" }}> TRONG THUY LF</span>
                          </div>
                          <div className="row1">
                            <span>Từ:</span>
                            <span className="code-container" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <span className="code-text">Viet Nam</span>
                            
                            </span>
                          </div>
                          <div className="row1">
                           
                          </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <a
                            className="fusion-button button-flat fusion-button-default-size button-custom fusion-button-default button-4 fusion-button-default-span fusion-button-default-type"
                            style={{
                              "--button_accent_color": "var(--awb-color1)",
                              "--button_accent_hover_color": "var(--awb-color1)",
                              "--button_border_hover_color": "var(--awb-color1)",
                              "--button_border_width-top": "1px",
                              "--button_border_width-right": "1px",
                              "--button_border_width-bottom": "1px",
                              "--button_border_width-left": "1px",
                              "--button_gradient_top_color": "var(--awb-color6)",
                              "--button_gradient_bottom_color": "var(--awb-color6)",
                              "--button_gradient_top_color_hover": "#f97316",
                              "--button_gradient_bottom_color_hover": "#f97316",
                              "--button_margin-top": "15px"
                            } as React.CSSProperties}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            href="https://social-trading.exness.com/strategy/110290080"
                          >
                            <span className="fusion-button-text">Start copying</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-6 fusion_builder_column_inner_1_3 1_3 fusion-flex-column" style={{
                      "--awb-padding-right": "20px",
                      "--awb-padding-bottom": "20px",
                      "--awb-padding-left": "20px",
                      "--awb-overflow": "hidden",
                      "--awb-bg-color": "var(--awb-color6)",
                      "--awb-bg-color-hover": "var(--awb-color6)",
                      "--awb-bg-size": "cover",
                      "--awb-border-color": "var(--awb-color7)",
                      "--awb-border-top": "1px",
                      "--awb-border-right": "1px",
                      "--awb-border-bottom": "1px",
                      "--awb-border-left": "1px",
                      "--awb-border-style": "solid",
                      "--awb-border-radius": "20px 20px 20px 20px",
                      "--awb-width-large": "33.333333333333%",
                      "--awb-margin-top-large": "0px",
                      "--awb-spacing-right-large": "5.76%",
                      "--awb-margin-bottom-large": "20px",
                      "--awb-spacing-left-large": "5.76%",
                      "--awb-width-medium": "33.333333333333%",
                      "--awb-order-medium": 0,
                      "--awb-spacing-right-medium": "5.76%",
                      "--awb-spacing-left-medium": "5.76%",
                      "--awb-width-small": "100%",
                      "--awb-order-small": 0,
                      "--awb-spacing-right-small": "1.92%",
                      "--awb-spacing-left-small": "1.92%"
                    } as React.CSSProperties}>
                     <div style={{paddingTop:'10px',backgroundColor: "#1e2329"}} className="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
                               <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root hLanG css-bovk7b" data-auto="strategy_detail_card">
  
                               <div className="gs5fU gBc_5" style={{borderRadius:'10px'}}>
       
       <Image 
       src="/image05.jpg"  
       width={500}
       height={100}
       alt="Photo"
        data-auto="strategy_image" className=""/>
     </div>
</div>
                        <div className="fusion-title title fusion-title-7 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-three" style={{ "--awb-text-color": "var(--awb-color1)" } as React.CSSProperties}>
                          <h3 className="fusion-title-heading title-heading-center fusion-responsive-typography-calculated" style={{ margin: 0, "--fontSize": 24, lineHeight: "var(--awb-typography1-line-height)" } as React.CSSProperties}>Exness - TPGROUP_0404</h3>
                        </div>
                        <div className="divcopy">
                          <div className="row1">
                            <span>Strategy Provider</span>
                           <span style={{ color: "#facc15", fontWeight: "bold" }}> THI THANH NGUYEN </span>
                          </div>
                          <div className="row1">
                            <span>Từ:</span>
                            <span className="code-container" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <span className="code-text">Viet Nam</span>
                            
                            </span>
                          </div>
                          <div className="row1">
                           
                          </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <a
                            className="fusion-button button-flat fusion-button-default-size button-custom fusion-button-default button-4 fusion-button-default-span fusion-button-default-type"
                            style={{
                              "--button_accent_color": "var(--awb-color1)",
                              "--button_accent_hover_color": "var(--awb-color1)",
                              "--button_border_hover_color": "var(--awb-color1)",
                              "--button_border_width-top": "1px",
                              "--button_border_width-right": "1px",
                              "--button_border_width-bottom": "1px",
                              "--button_border_width-left": "1px",
                              "--button_gradient_top_color": "var(--awb-color6)",
                              "--button_gradient_bottom_color": "var(--awb-color6)",
                              "--button_gradient_top_color_hover": "#f97316",
                              "--button_gradient_bottom_color_hover": "#f97316",
                              "--button_margin-top": "15px"
                            } as React.CSSProperties}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            href="https://social-trading.exness.com/strategy/110271185"
                          >
                            <span className="fusion-button-text">Start copying</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
   </div>
        
          </section>
         

      </div>


</main>
   
    </div>
  );
}
