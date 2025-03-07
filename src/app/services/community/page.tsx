// import { BookCall from '@/components/common/BookCall'
import BookCallBanner from '@/app/home/Banner'
import  Grid from '@/pages/community/Carousel'
import  CoreTeamComm from '@/pages/community/CoreTeamComm'
import  FeaturesCom from '@/pages/community/FeatureCom'
import  HeroCom from '@/pages/community/HeroCom'
import TestimonialSection from '@/pages/community/Testimonial'
import React from 'react'
  
function com() {
  return (
    <><HeroCom/>
    <FeaturesCom/>
    <Grid/>
    {/* <BookCall/> */}
    <BookCallBanner/>
    <TestimonialSection/>
    <CoreTeamComm/>
    </>
  )
}

export default com