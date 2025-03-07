// import { BookCall } from '@/components/common/BookCall'
import BookCallBanner from '@/app/home/Banner'
import  GridEve  from '@/pages/events/CarouselEve'
import CoreTeamEve  from '@/pages/events/CoreTeamEve'
import FeaturesEve  from '@/pages/events/FeatureEve'
import HeroEve  from '@/pages/events/HeroEve'
import TestimonialSection from '@/pages/events/Testimonial'
import React from 'react'

function eve() {
  return (
    <><HeroEve/>
    <FeaturesEve/>
    <GridEve/>
    <BookCallBanner/>
    <TestimonialSection/>

{/* <BookCall/>   
 */}
 <CoreTeamEve/> 
    </>
  )
}

export default eve