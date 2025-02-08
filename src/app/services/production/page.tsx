import { BookCallComm } from '@/pages/production/BookCallComm'
import { Carousel } from '@/pages/production/Carousel'
import { CoreTeamComm } from '@/pages/production/CoreTeamComm'
import { FeaturesCom } from '@/pages/production/FeatureCom'
import { HeroCom } from '@/pages/production/HeroCom'
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