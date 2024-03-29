import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  Navbar,
  NavLogo,
  NavItem,
  NavMenu,
  NavLinks,
} from "../styled-components/HeaderElements";
import { HomeBg } from "../styled-components/HomePageElements";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  NavLink,
  Nav,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Wrapper,
  Burger,
  Content,
  Menu,
  MenuButton,
  BurgerIcon,
} from "../styled-components/navbarelements";
import "../styled-components/NavbarBtn.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  BsHouseDoorFill,
  BsFillQuestionCircleFill,
  BsSearch,
} from "react-icons/bs";
import { GiHouse, GiReceiveMoney } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setRegisterOpen] = React.useState(false);

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showModal = () => {
    setIsLoginOpen(true);
    setRegisterOpen(false);
  };
  return (
    <div
      expand="sm"
      fixed="top"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "black" : "transparent",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        height: "90px",
        width: "100%", zIndex:'200'
      }}
    >
      <Navbar>
        <Collapse isOpen={isOpen} navbar>
          <CgMenuRight className="nav-toggler" onClick={toggle} />
          <NavLogo />
          <NavItem>
            <Container></Container>

            <NavMenu>
              <NavLinks>
                <div class="container">
                  <Link to="home" duration={1000}>
                    <div class="btn">
                      <AnchorLink
                        style={{ color: "white", fontSize: "12px" }}
                        to="home"
                      >
                        HOME
                      </AnchorLink>
                    </div>
                  </Link>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <Link to="news">
                    <div class="btn">
                      <AnchorLink
                        style={{ color: "white", fontSize: "12px" }}
                        to="news"
                      >
                        NEWS
                      </AnchorLink>
                    </div>
                  </Link>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <Link to="contact" duration={1000}>
                    <div class="btn">
                      <AnchorLink
                        style={{ color: "white", fontSize: "12px" }}
                        to="contact"
                      >
                        CONTACT
                      </AnchorLink>
                    </div>
                  </Link>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <Link to="maillist" duration={1000}>
                    <div class="btn">
                      <AnchorLink
                        style={{ color: "white", fontSize: "12px" }}
                        to="maillist"
                      >
                        SIGNUP
                      </AnchorLink>
                    </div>
                  </Link>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <div class="btn">
                    <span style={{ color: "white", fontSize: "20px" }}>
                      <a href="https://facebook.com">
                        <AiFillFacebook />
                      </a>
                    </span>
                  </div>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <div class="btn">
                    <a href="https://mobile.twitter.com/home" class="pull-left">
                      <span style={{ color: "white", fontSize: "20px" }}>
                        <a href="https://twitter.com">
                          <GrTwitter />
                        </a>
                      </span>
                    </a>
                  </div>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <div class="btn">
                    <a href="https://instagram.com/blissrecordsgh?utm_medium=copy_link" class="pull-left">
                      <span style={{ color: "white", fontSize: "20px" }}>
                        <a
                          classNae="instagram"
                          style={{ color: "white", fontSize: "20px" }}
                          href="https://instagram.com/blissrecordsgh?utm_medium=copy_link"
                        >
                          <AiOutlineInstagram />
                        </a>
                      </span>
                    </a>
                  </div>
                </div>
              </NavLinks>
            </NavMenu>
          </NavItem>
          <Wrapper isOpen={isOpen}>
            <Content isOpen={isOpen}>
              <Menu>
                <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                  <FaTimes> {isOpen ? "menu_open" : "menu"}</FaTimes>
                </BurgerIcon>
                <MenuButton>
                  <Link
                    duration={1000}
                    to="home"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      margin: "20px",
                    }}
                  >
                    <GiHouse /> Home
                  </Link>
                </MenuButton>
                <MenuButton>
                  <Link
                    duration={1000}
                    to="contact"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    {" "}
                    <BsSearch /> Contact Us
                  </Link>
                </MenuButton>
                <MenuButton>
                  <Link
                    duration={1000}
                    to="maillist"
                    spy={true}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <MdEmail />
                    SignUp
                  </Link>
                </MenuButton>
                <MenuButton>
                  <Link
                    duration={1000}
                    to="news"
                    spy={true}
                    style={{ textDecoration: "none", ccolor: "#fff" }}
                  >
                    <BsFillQuestionCircleFill />
                    News
                  </Link>
                </MenuButton>
              </Menu>
            </Content>
          </Wrapper>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
