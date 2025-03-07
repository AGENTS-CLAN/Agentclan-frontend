// import { BookCall } from '@/components/common/BookCall'
import BookCallBanner from '@/app/home/Banner'
import { Grid } from '@/pages/production/Carousel'
import { CoreTeamComm } from '@/pages/production/CoreTeamComm'
import { FeaturesCom } from '@/pages/production/FeatureCom'
import { HeroCom } from '@/pages/production/HeroCom'
import TestimonialSection from '@/pages/production/Testimonial'
import React from 'react'

function com() {
  return (
    <><HeroCom/>
    <FeaturesCom/>
    <Grid/>
{/* <BookCall/>  */}    <TestimonialSection/>

<BookCallBanner/>
   <CoreTeamComm/>
    </>
  )
}

export default com