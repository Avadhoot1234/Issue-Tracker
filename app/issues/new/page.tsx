'use client';
import React from 'react'
import { TextArea, TextField } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import {useForm,Controller} from 'react-hook-form'
import { useRouter } from 'next/navigation';
import axios from 'axios';
// import dynamic from 'next/dynamic';
// const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

interface IssueForm{
    title:string;
    description:string;
}

const page = () => {
    const {register,control,handleSubmit}=useForm<IssueForm>();
    const router=useRouter();


  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data)=>{
      await axios.post('/api/issues',data);
      router.push('/issues');
    })}>
      <TextField.Root placeholder="Title" {...register('title')}>
      </TextField.Root>
        <Controller name="description" control={control} render={({field})=><SimpleMDE placeholder='Description' {...field}/>}/>
      <Button>Submit New Issue</Button>
    </form>
  )
}

export default page
