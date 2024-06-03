{
  /* eslint-disable @next/next/no-img-element */
}
import React from 'react'
import Link from 'next/link'

//import { Header } from '../../../payload/payload-types'
import type { Header as HeaderType } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'

export async function Header() {
  let header: HeaderType | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error)
  }
  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}

/* eslint-disable @next/next/no-img-element */

// import React from 'react'
// import Link from 'next/link'

// import type { Header as HeaderType } from '../../../payload/payload-types'
// import { fetchHeader } from '../../_api/fetchGlobals'
// import HeaderComponent from './HeaderComponent'

// export async function HeaderComponentLoader() {
//   let header: HeaderType | null = null

//   try {
//     header = await fetchHeader()
//   } catch (error) {
//     console.log(error)
//   }

//   return <>{header && <HeaderComponent header={header} />}</>
// }
