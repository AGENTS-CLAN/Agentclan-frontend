import { BookCallComm } from '@/pages/industries/BookCallComm'
import { Carousel } from '@/pages/industries/Carousel'
import { CoreTeamComm } from '@/pages/industries/CoreTeamComm'
import { FeaturesCom } from '@/pages/industries/FeatureCom'
import { HeroCom } from '@/pages/industries/HeroCom'
import React from 'react'

function com() {
  return (
    <><HeroCom/>
    <FeaturesCom/>
    <Carousel/>
    <BookCallComm/>
    <CoreTeamComm/>
    </>
  )
}

export default com