import { BookCalleve } from '@/pages/events/BookCalleve'
import { CarouselEve } from '@/pages/events/CarouselEve'
import { CoreTeamEve } from '@/pages/events/CoreTeamEve'
import { FeaturesEve } from '@/pages/events/FeatureEve'
import { HeroEve } from '@/pages/events/HeroEve'
import React from 'react'

function eve() {
  return (
    <><HeroEve/>
    <FeaturesEve/>
    <CarouselEve/>
    <BookCalleve/>
    <CoreTeamEve/>
    </>
  )
}

export default eve