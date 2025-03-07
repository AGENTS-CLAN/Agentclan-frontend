// import { BookCall } from '@/components/common/BookCall'
import BookCallBanner from '@/app/home/Banner'
import  Grid  from '@/pages/industries/Carousel'
import  CoreTeamComm  from '@/pages/industries/CoreTeamComm'
import  FeaturesCom  from '@/pages/industries/FeatureCom'
import  HeroCom  from '@/pages/industries/HeroCom'
import TestimonialSection from '@/pages/industries/Testimonial'
import React from 'react'

function com() {
  return (
    <><HeroCom/>
    <FeaturesCom/>
    <Grid/>
    {/* <BookCall/> */}    <TestimonialSection/>

    <BookCallBanner/>
    <CoreTeamComm/>
    </>
  )
}

export default com