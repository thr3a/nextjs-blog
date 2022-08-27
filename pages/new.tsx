import type { NextPage } from 'next';
import { Button, Textarea, TextInput } from '@mantine/core';
import React from 'react';
// import Layout from '../components/Layout';
import Router from 'next/router';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1, { message: 'タイトルは必須です' }),
  content: z.string()
});

const New: NextPage = () => {

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      title: '',
      content: ''
    },
  });


  const handleSubmit = async(data: typeof form.values) => {
    try {
      console.log(data);
      await fetch(`http://localhost:3000/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      await Router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleError = (errors: typeof form.errors) => {
    console.log(errors);
  };
 
  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
      <TextInput
        withAsterisk
        label="タイトル"
        {...form.getInputProps('title')}
      />
      <Textarea
        label="内容"
        {...form.getInputProps('content')}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default New;
