import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'


const Issuepage = () => {
    
  return (
    <div>
      <Button><Link href="/issues/new">New Issues</Link></Button>
    </div>
  )
}

export default Issuepage
