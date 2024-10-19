import React from 'react'
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { Outlet } from 'react-router-dom';

export default function HomeTemplate() {
  return (
  <>
  <Header/>
  <Outlet />
  <Footer/>
  </>
  )
}
