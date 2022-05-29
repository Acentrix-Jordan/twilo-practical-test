import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { BiPhotoAlbum, BiPhoneCall } from "react-icons/bi";

export const navbarData = [
  { title: "Home", path: "/", icon: <AiOutlineHome /> },

  { title: "About Us", path: "/about-us", icon: <RiTeamLine /> },

  { title: "Product Gallery", path: "/products", icon: <BiPhotoAlbum /> },

  { title: "Contact Us", path: "/contact-us", icon: <BiPhoneCall /> },
];
