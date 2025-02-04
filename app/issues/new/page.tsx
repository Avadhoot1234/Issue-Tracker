import React from 'react'
import { TextArea, TextField } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'

const page = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder="Title">
        
      </TextField.Root>
      <TextArea placeholder='Description'/>
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default page
