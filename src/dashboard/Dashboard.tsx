import React from 'react'
import Bottom from './Bottom'
import Boxes from './Boxes'
import Location from './Location'
import SalesChart from './SalesChart'
import Status from './Status'

const Dashboard = () => {
  return (
    <>
      <Boxes />
      <Location />
      <Status />
      <SalesChart />
      <Bottom />
     </>
  )
}

export default Dashboard
