'use client';
import React from 'react'
import { TextArea, TextField } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
// import dynamic from 'next/dynamic';
// const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });


const page = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder="Title">
      </TextField.Root>
        <SimpleMDE placeholder='Description'/>
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default page
