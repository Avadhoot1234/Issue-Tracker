'use client';
import React, { useState } from 'react';
import { Callout, Spinner, TextArea, TextField } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';
import "easymde/dist/easymde.min.css";
import SimpleMDE from 'react-simplemde-editor';
import {useForm,Controller} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import { Text } from '@radix-ui/themes';
// import dynamic from 'next/dynamic';
// const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });
import {z} from 'zod'
import ErrorMessage from '@/app/components/ErrorMessage';

type IssueForm=z.infer<typeof createIssueSchema>

// interface IssueForm{
//     title:string;
//     description:string;
// }

const page = () => {
    const {register,control,handleSubmit,formState:{ errors}}=useForm<IssueForm>(
      {
        resolver:zodResolver(createIssueSchema)
      }
    );
    const router=useRouter();
    const [error,setError]=useState('')
    const [isSubmitting,setIsSubmitting]=useState(false)

  return (
    <div className='max-w-xl'>
    {error && <Callout.Root color='red' className='mb-2'>
        <Callout.Text>{error}</Callout.Text>
    </Callout.Root>}

    <form className='space-y-3' onSubmit={handleSubmit(async (data)=>{
      try{
        setIsSubmitting(true);
        await axios.post('/api/issues',data);
        router.push('/issues');
      }catch(error){
        setIsSubmitting(false)
        setError('An Unexpected Error occured')
      }
    })}>
      <TextField.Root placeholder="Title" {...register('title')}>
      </TextField.Root>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      <Controller name="description" control={control} render={({field})=><SimpleMDE placeholder='Description' {...field}/>}/>
      <ErrorMessage>{errors.description?.message}</ErrorMessage>
      <Button disabled={isSubmitting}>Submit New Issue{isSubmitting && <Spinner/>}</Button>
    </form>
    
    </div>
  )
}

export default page