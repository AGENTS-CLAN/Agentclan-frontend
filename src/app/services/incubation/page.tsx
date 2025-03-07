// import { BookCall } from '@/components/common/BookCall'
import BookCallBanner from '@/app/home/Banner'
import { Grid } from '@/pages/incubation/Carousel'
import { CoreTeamComm } from '@/pages/incubation/CoreTeamComm'
import { FeaturesCom } from '@/pages/incubation/FeatureCom'
import { HeroCom } from '@/pages/incubation/HeroCom'
import TestimonialSection from '@/pages/incubation/Testimonial'
import React from 'react'

function com() {
  return (
    <><HeroCom/>
    <FeaturesCom/>
    <Grid/>
{/* <BookCall/>     */}
<TestimonialSection/>
<BookCallBanner/>
<CoreTeamComm/>
    </>
  )
}

export default com