import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Buttons from '../components/Buttons'
import ComponentsPage from '../components/ComponentsPage'
import GridC from '../components/GridC'
import Icons from '../components/Icons'
import Notify from '../components/Notify'
import Panels from '../components/Panels'
import SweetAlert from '../components/SweetAlert'
import TypographyC from '../components/TypographyC'
import Dashboard from './Dashboard'

// const routeData :any = [
//   {
//     component : <Buttons />,
//     path: 'button'
//   },
//   {
//     component : <GridC />,
//     path: 'grid'
//   },
//   {
//     component : <Panels />,
//     path: 'panels'
//   },
//   {
//     component : <SweetAlert />,
//     path: 'sweet-alert'
//   },
//   {
//     component : <Notify />,
//     path: 'notifications'
//   },
//   {
//     component : <Icons />,
//     path: 'icons'
//   },
//   {
//     component : <TypographyC />,
//     path: 'typography'
//   }
// ]

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* <Route path='/components' element={<ComponentsPage />}>
            {routeData.map((ele: any) => {
                return (
                    <Route key={ele.path}  path={ele.path} element={ele.component} />
                )
            })}
        </Route> */}
        <Route path='/button' element={<Buttons />} />
        <Route path='/grid' element={<GridC />} />
        <Route path='/panels' element={<Panels />} />
        <Route path='/sweet-alert' element={<SweetAlert />} />
        <Route path='/notifications' element={<Notify />} />
        <Route path='/icons' element={<Icons />} />
        <Route path='/typography' element={<TypographyC />} />
      </Routes>
    </>
  )
}

export default Routing
