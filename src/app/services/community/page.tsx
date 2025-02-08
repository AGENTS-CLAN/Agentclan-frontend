import { BookCallComm } from '@/pages/community/BookCallComm'
import { Carousel } from '@/pages/community/Carousel'
import { CoreTeamComm } from '@/pages/community/CoreTeamComm'
import { FeaturesCom } from '@/pages/community/FeatureCom'
import { HeroCom } from '@/pages/community/HeroCom'
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