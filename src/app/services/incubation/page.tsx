import { BookCallComm } from '@/pages/incubation/BookCallComm'
import { Carousel } from '@/pages/incubation/Carousel'
import { CoreTeamComm } from '@/pages/incubation/CoreTeamComm'
import { FeaturesCom } from '@/pages/incubation/FeatureCom'
import { HeroCom } from '@/pages/incubation/HeroCom'
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