'use client'
import React,{useEffect, useState} from 'react'

import { usePathname } from 'next/navigation'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header() {
   const pathname = usePathname()
   useEffect(() => {
    // This will run on the client side only
    console.log('Current pathname:', pathname);
    if(pathname == "/vnhome")
    {
setIsVietnam(true);
    }else{
setIsVietnam(false);
    }
  }, [pathname])


  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isSticky, setIsSticky] = useState(false);
   const toggleMenu2 = () => {
    setIsSticky(!isSticky);
  };
    const [isVietnam, setIsVietnam] = useState(false);
  const toggleLanguage = () => {
    setIsVietnam(!isVietnam);
  }
  return (
  <header className="fusion-header-wrapper">
  <div className="fusion-header-v1 fusion-logo-alignment fusion-logo-left fusion-sticky-menu-1 fusion-sticky-logo- fusion-mobile-logo-  fusion-mobile-menu-design-modern">
    <div className="fusion-header-sticky-height" style={{  overflow: 'visible' }}></div>
    <div className="fusion-header" style={{  overflow: 'visible', top: '0px' }}>
      <div className="fusion-row">
        <div className="fusion-logo" data-margin-top="0px" data-margin-bottom="0px" data-margin-left="0px" data-margin-right="0px">
            <a className="fusion-logo-link" href="">
            <Image src="/tp-group-logo-4.png" width={151} height={47} alt="TP Group Logo" className="fusion-standard-logo" />
            </a>
        </div>
        <nav className="fusion-main-menu" style={{paddingTop: '10px'}} aria-label="Main Menu" >
          <div className="fusion-overlay-search" style={{ maxWidth: '570.75px' }}>
            <form role="search" className="searchform fusion-search-form  fusion-search-form-clean" method="get" >
              <div className="fusion-search-form-content">
                <div className="fusion-search-field search-field">
                  <label>
                    <span className="screen-reader-text">Search for:</span>
                    <input type="search" name="s" className="s" placeholder="Search..."  aria-required="true" aria-label="Search..."/>
                  </label>
                </div>
                <div className="fusion-search-button search-button">
                  <input type="submit" className="fusion-search-submit searchsubmit" aria-label="Search" />
                </div>
              </div>
              <input type="hidden" name="lang" value="vi"/>
            </form>
            <div className="fusion-search-spacer"></div>
            <a href="#" role="button" aria-label="Close Search" className="fusion-close-search"></a>
          </div>
          <ul id="menu-danh-muc" className="fusion-menu">
            <li id="menu-item-667" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-667" data-item-id="667">
              <Link href="/#start" className="fusion-background-highlight">

                  {isVietnam ? (
                    <span style={{ display: 'block' }} className="menu-text">Bắt đầu</span>
                  ):
                   (
                    <span style={{ display: 'block' }} className="menu-text">Start</span>
                  )}
              </Link>
            </li>
            <li id="menu-item-657" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-657" data-item-id="657">
              <Link href="/#faq" className="fusion-background-highlight">
             
                 {isVietnam ? (
                    <span style={{ display: 'block' }} className="menu-text">Tìm hiểu</span>
                  ):
                   (
                    <span style={{ display: 'block' }} className="menu-text">FAQ</span>
                  )}
              </Link>
            </li>
           
         
        
            {isVietnam ? (
              <li id="menu-item-824" className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-824 fusion-dropdown-menu" data-classNamees="pll-parent-menu-item" data-item-id="824" style={{overflow: 'visible'}}>
                <Link href={'/'} className="fusion-background-highlight" aria-haspopup="true" >
                  <span className="menu-text">
                    <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11"/>
                    <span style={{ marginLeft: '0.3em' }}>Tiếng Việt</span>
                  </span>
                  <span className="fusion-caret" >
                    <KeyboardArrowDownIcon style={{ fontSize: '16px', marginLeft: '0.3em' }} />
                  </span>
                </Link>
                <ul className="sub-menu fusion-switched-side" style={{ left: '-39.359px' }}>
                  <li onClick={e => { e.preventDefault(); toggleLanguage(); }} id="menu-item-824-en" className="lang-item lang-item-11 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-824-en fusion-dropdown-submenu" data-classNamees="lang-item">
                    <Link href={'/ushome'} className="fusion-background-highlight" hrefLang="en-US" lang="en-US" >
                      <span >
                        <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" />
                        <span style={{marginLeft:'0.3em'}}>English</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li id="menu-item-19" className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-824 fusion-dropdown-menu" data-classNamees="pll-parent-menu-item" data-item-id="824" style={{overflow: 'visible'}}>
                <Link href={'/ushome'} className="fusion-background-highlight" aria-haspopup="true" >
                  <span>
                    <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" />
                    <span style={{marginLeft:'0.3em'}}>English</span>
                  </span>
                  <span className="fusion-caret">
                    <i className="fusion-dropdown-indicator" aria-hidden="true"></i>
                  </span>
                </Link>
                <ul className="sub-menu fusion-switched-side" style={{ left: '-39.359px' }}>
                  <li onClick={e => { e.preventDefault(); toggleLanguage(); }} id="menu-item-824-en" className="lang-item lang-item-11 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-824-en fusion-dropdown-submenu" data-classNamees="lang-item">
                    <Link href={'/'} className="fusion-background-highlight" hrefLang="vi" lang="vi" >
                      <span className="menu-text">
                        <Image  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11" style={{ display: 'inline-block', marginLeft: '0.3em' }}/>
                        <span style={{ marginLeft: '0.3em' }}>Tiếng Việt</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            )}

          </ul>
        </nav>
        <nav className="fusion-main-menu fusion-sticky-menu" aria-label="Main Menu Sticky" >
          <div className="fusion-overlay-search" style={{maxWidth: '570.75px'}}>
            <form role="search" className="searchform fusion-search-form  fusion-search-form-clean" method="get" action="https://backcom.trade/">
              <div className="fusion-search-form-content">
                <div className="fusion-search-field search-field">
                  <label>
                    <span className="screen-reader-text">Search for:</span>
                    <Input type="search" className="s"  name="s" placeholder="Search..."  aria-required="true" aria-label="Search..."/>
                   
                  </label>
                </div>
                <div className="fusion-search-button search-button">
                  <Input type="submit" className="fusion-search-submit searchsubmit" aria-label="Search"/>
                </div>
              </div>
              <input type="hidden" name="lang" value="vi"/>
            </form>
            <div className="fusion-search-spacer"></div>
            <a href="#" role="button" aria-label="Close Search" className="fusion-close-search"></a>
          </div>
          <ul id="menu-danh-muc-1" className="fusion-menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-667" data-item-id="667">
              <Link href="/#start" className="fusion-background-highlight">
                <span className="menu-text">Bắt đầu</span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-657" data-item-id="657">
              <Link href="/#faq" className="fusion-background-highlight">
                <span className="menu-text">Tìm hiểu</span>
              </Link>
            </li>
           
           
            {isVietnam ? (
              <li id='824' className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-824 fusion-dropdown-menu" data-classNamees="pll-parent-menu-item" data-item-id="824">
                <Link href={'/'} className="fusion-background-highlight" aria-haspopup="true">
                  <span className="menu-text">
                    <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11" />
                    <span style={{marginLeft:'0.3em'}}>Tiếng Việt</span>
                  </span>
                  <span className="fusion-caret">
                    <i className="fusion-dropdown-indicator" aria-hidden="true"></i>
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li onClick={e => { e.preventDefault(); toggleLanguage(); }} className="lang-item lang-item-11 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-824-en fusion-dropdown-submenu" data-classNamees="lang-item">
                    <Link href={'/ushome'} className="fusion-background-highlight" hrefLang="en-US" lang="en-US">
                      <span>
                        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" style={{ display: 'inline-block', marginLeft: '0.3em' }}/>
                        <span style={{marginLeft:'0.3em'}}>English</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li id='19' className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-824 fusion-dropdown-menu" data-classNamees="pll-parent-menu-item" data-item-id="19">
                <Link href={'/ushome'} className="fusion-background-highlight" aria-haspopup="true">
                  <span className="menu-text">
                    <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" />
                    <span style={{marginLeft:'0.3em'}}>English</span>
                  </span>
                  <span className="fusion-caret">
                    <i className="fusion-dropdown-indicator" aria-hidden="true"></i>
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li onClick={e => { e.preventDefault(); toggleLanguage(); }} className="lang-item lang-item-11 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-824-en fusion-dropdown-submenu" data-classNamees="lang-item">
                    <Link href={'/'} className="fusion-background-highlight" hrefLang="vi" lang="vi">
                      <span>
                        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11" style={{ display: 'inline-block', marginLeft: '0.3em' }}/>
                        <span style={{marginLeft:'0.3em'}}>Tiếng Việt</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            )}
           
          </ul>
        </nav>
        <div className="fusion-mobile-navigation">
          <ul id="menu-danh-muc-2" className="fusion-mobile-menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-667" data-item-id="667">
              <Link href="/#start" className="fusion-background-highlight">
                <span className="menu-text">Bắt đầu</span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-657" data-item-id="657">
              <Link href="/#faq" className="fusion-background-highlight">
                <span className="menu-text">Tìm hiểu</span>
              </Link>
            </li>
         
         
           
            <li id='mobile-824' className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-824 fusion-dropdown-menu" data-classNamees="pll-parent-menu-item" data-item-id="824">
              <Link href={'/'} className="fusion-background-highlight">
                <span className="menu-text">
                  <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11"/>
                  <span style={{marginLeft:'0.3em'}}>Tiếng Việt</span>
                </span>
                <span className="fusion-caret">
                  <i className="fusion-dropdown-indicator" aria-hidden="true"></i>
                </span>
              </Link>
              <ul className="sub-menu">
                <li onClick={
                  e => { e.preventDefault(); toggleLanguage(); }

                } className="lang-item lang-item-11 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-824-en fusion-dropdown-submenu" data-classNamees="lang-item">
                  <Link href={'/ushome'} className="fusion-background-highlight" hrefLang="en-US" lang="en-US">
                    <span>
                      <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" style={{ display: 'inline-block', marginLeft: '0.3em' }}/>
                      <span style={{marginLeft:'0.3em'}}>English</span>
                    </span>
                  </Link>
                </li>
               
              </ul>
            </li>
            {!isVietnam && (
              <li id='mobile-19' className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-824 fusion-dropdown-menu" data-classNamees="pll-parent-menu-item" data-item-id="824">
                <Link href={'/ushome'} className="fusion-background-highlight">
                  <span className="menu-text">
                    <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" />
                    <span style={{marginLeft:'0.3em'}}>English</span>
                  </span>
                  <span className="fusion-caret">
                    <i className="fusion-dropdown-indicator" aria-hidden="true"></i>
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li onClick={e => { e.preventDefault(); toggleLanguage(); }} className="lang-item lang-item-11 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-824-en fusion-dropdown-submenu" data-classNamees="lang-item">
                    <Link href={'/'} className="fusion-background-highlight" hrefLang="vi" lang="vi">
                      <span>
                        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11" style={{ display: 'inline-block', marginLeft: '0.3em' }}/>
                        <span style={{marginLeft:'0.3em'}}>Tiếng Việt</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            )}
             
          </ul>
        </div>
        <div className="fusion-mobile-menu-icons">
            <a
            href="#"
            className="fusion-icon awb-icon-bars"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu-danh-muc-2"
            onClick={e => {
              e.preventDefault();
              toggleMenu();
            }}
            ></a>
        </div>
        <nav
          className="fusion-mobile-nav-holder fusion-mobile-menu-text-align-left"
          aria-label="Main Menu Mobile"
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          <ul id="mobile-menu-danh-muc-2" className="fusion-mobile-menu">
            <li className="fusion-mobile-nav-item fusion-mobile-current-nav-item" data-item-id="667" >
              <Link href="/#start" className="fusion-background-highlight">
          <span className="menu-text">Bắt đầu</span>
              </Link>
            </li>
            <li className="fusion-mobile-nav-item fusion-mobile-current-nav-item" data-item-id="657" >
              <Link href="/#faq" className="fusion-background-highlight">
          <span className="menu-text">Tìm hiểu</span>
              </Link>
            </li>
           
            
             {isVietnam ?(
<li id='mb-824' className="fusion-mobile-nav-item pll-parent-menu-item menu-item-has-children" data-classNamees="pll-parent-menu-item" data-item-id="824" >
              <Link href={'/'} className="fusion-background-highlight">
          <span className="menu-text">
            <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11" />
            <span style={{marginLeft:'0.3em'}}>Tiếng Việt</span>
          </span>
              </Link>
              <button   aria-expanded={isSticky}  onClick={e => {
              e.preventDefault();
              toggleMenu2();
            }}  aria-label="Open submenu of "  className="fusion-open-submenu"></button>
                <ul className="sub-menu" style={{display: isSticky ? 'block' : 'none'}}>
              <li onClick={
e => { e.preventDefault(); toggleLanguage(); }
              } className="fusion-mobile-nav-item lang-item" data-classNamees="lang-item" >
              <Link href={'/ushome'} className="fusion-background-highlight" hrefLang="en-US" lang="en-US">
                <span>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" style={{ display: 'inline-block', marginLeft: '0.3em' }}/>
                <span style={{marginLeft:'0.3em'}}>English</span>
                </span>
              </Link>
              </li>
             
                </ul>
            </li>
             ):(
   <li id="mb-19" className="fusion-mobile-nav-item pll-parent-menu-item menu-item-has-children" data-classNamees="pll-parent-menu-item" data-item-id="824" >
              <Link href={'/ushome'} className="fusion-background-highlight">
          <span className="menu-text">
          
             <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" />
                <span style={{marginLeft:'0.3em'}}>English</span>
          </span>
              </Link>
              <button   aria-expanded={isSticky}  onClick={e => {
              e.preventDefault();
              toggleMenu2();
            }}  aria-label="Open submenu of "  className="fusion-open-submenu"></button>
                <ul className="sub-menu" style={{display: isSticky ? 'block' : 'none'}}>
              <li 
               onClick={
                e => { e.preventDefault(); toggleLanguage(); }
               }  className="fusion-mobile-nav-item lang-item" data-classNamees="lang-item" >
              <Link href={'/'} className="fusion-background-highlight" hrefLang="en-US" lang="en-US">
                <span>
                 <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11" style={{ display: 'inline-block', marginLeft: '0.3em' }}/>
            <span style={{marginLeft:'0.3em'}}>Tiếng Việt</span>
                </span>
              </Link>
              </li>
             
                </ul>
            </li>
             )

             }
            
          
          </ul>
        </nav>
        <nav className="fusion-mobile-nav-holder fusion-mobile-menu-text-align-left fusion-mobile-sticky-nav-holder" aria-label="Main Menu Mobile Sticky" style={{display: 'none'}}>
          <ul id="mobile-menu-danh-muc-1" className="fusion-menu">
            <li className="fusion-mobile-nav-item fusion-mobile-current-nav-item" data-item-id="667" >
              <Link href="/#start" className="fusion-background-highlight">
                <span className="menu-text">Bắt đầu</span>
              </Link>
            </li>
            <li className="fusion-mobile-nav-item fusion-mobile-current-nav-item" data-item-id="657" >
              <Link href="/#faq" className="fusion-background-highlight">
                <span className="menu-text">Tìm hiểu</span>
              </Link>
            </li>
          
         
            {
              isVietnam ?(
  <li id='mb-824' className="fusion-mobile-nav-item pll-parent-menu-item" data-classNamees="pll-parent-menu-item" data-item-id="824" >
              <Link href={'/'} className="fusion-background-highlight">
                <span className="menu-text">
                  <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11" />
                  <span style={{marginLeft:'0.3em'}}>Tiếng Việt</span>
                </span>
                <span className="fusion-caret">
                  <i className="fusion-dropdown-indicator" aria-hidden="true"></i>
                </span>
              </Link>
              <button  aria-label="Open submenu of " aria-expanded="false" className="fusion-open-submenu"></button>
              <ul className="sub-menu" style={{display: 'none'}}>
                <li className="fusion-mobile-nav-item lang-item" data-classNamees="lang-item" >
                  <Link href={'/ushome'} className="fusion-background-highlight" hrefLang="en-US" lang="en-US">
                    <span>
                      <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" style={{ display: 'inline-block', marginLeft: '0.3em' }}/>
                      <span style={{marginLeft:'0.3em'}}>English</span>
                    </span>
                  </Link>
                </li>
               
              </ul>
            </li>
              ):(
                 <li id='mb-19' className="fusion-mobile-nav-item pll-parent-menu-item" data-classNamees="pll-parent-menu-item" data-item-id="824" >
              <Link href={'/ushome'} className="fusion-background-highlight">
                <span className="menu-text">
                    <Image style={{ display: 'inline-block', marginLeft: '0.3em' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=" alt="" width="16" height="11" />
                      <span style={{marginLeft:'0.3em'}}>English</span>
                </span>
                <span className="fusion-caret">
                  <i className="fusion-dropdown-indicator" aria-hidden="true"></i>
                </span>
              </Link>
              <button  aria-label="Open submenu of " aria-expanded="false" className="fusion-open-submenu"></button>
              <ul className="sub-menu" style={{display: 'none'}}>
                <li className="fusion-mobile-nav-item lang-item" data-classNamees="lang-item" >
                  <Link href={'/'} className="fusion-background-highlight" hrefLang="en-US" lang="en-US">
                    <span>
                    
                       <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg==" alt="" width="16" height="11" style={{ display: 'inline-block', marginLeft: '0.3em' }}/>
                  <span style={{marginLeft:'0.3em'}}>Tiếng Việt</span>
                    </span>
                  </Link>
                </li>
               
              </ul>
            </li>
              )
            }
          
             
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div className="fusion-clearfix"></div>
</header>
   
  )
}
