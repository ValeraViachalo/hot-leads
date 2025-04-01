"use client"
import React from 'react'

import "./LinkPage.scss"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { anim, PageAnim } from '@/lib/helpers/anim'

export default function LinkPage() {
  return (
    <motion.section {...anim(PageAnim)} className='link-page'>
      <Link href="/buy" className='link-page__link link-page__link--buy'>
        купить лиды
      </Link>
      <Link href="/sell" className='link-page__link link-page__link--sell'>
        продать лиды
      </Link>
      <div className="hero">
        <div className="hero__img">
          <Image
            src="/images/hero/hero.png"
            alt="hero"
            fill
          />
        </div>
        <h1 className="fz--100 fz--mobile-30">
        что вас интересует?
        </h1>
      </div>
    </motion.section>
  )
}
