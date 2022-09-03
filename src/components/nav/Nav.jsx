import React from 'react'
import './nav.css'
import {AiOutlineHome , AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {CgWebsite} from 'react-icons/cg'
import {GiTalk} from 'react-icons/gi'

import { useState } from 'react'
const Nav = () => {
  const [activeNav , setActiveNav] = useState('#')
  return (
    <nav className='nav'>
      <a  onClick={()=>{
        setActiveNav('#')
      }} className={activeNav === '#' ? 'active' : ''}  href="#">
        <AiOutlineHome/>
      </a>
      <a onClick={()=>{
        setActiveNav('#about')
      }} className={activeNav === '#about' ? 'active' : ''} href="#about">
        <AiOutlineUser/>
      </a>
      <a href="#Experience" onClick={()=>{
        setActiveNav('#Experience')
      }} className={activeNav === '#Experience' ? 'active' : ''}>
        <BiBook/>
      </a>
      <a href="#Services" onClick={()=>{
        setActiveNav('#Services')
      }} className={activeNav === '#Services' ? 'active' : ''}>
        <RiServiceLine/>
      </a>
      <a href="#portfolio" onClick={()=>{
        setActiveNav('#portfolio')
      }} className={activeNav === '#portfolio' ? 'active' : ''}>
        <CgWebsite/>
      </a>
      <a href="#Testimonials" onClick={()=>{
        setActiveNav('#Testimonials')
      }} className={activeNav === '#Testimonials' ? 'active' : ''}>
        <GiTalk/>
      </a>
      <a href="#contact" onClick={()=>{
        setActiveNav('#contact')
      }} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail/>
      </a>
    </nav>
    
  )
}

export default Nav