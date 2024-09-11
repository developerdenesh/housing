'use client'

import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        placeholder="14280000"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

        <Button fullWidth type="submit" variant="filled" color="green">Submit</Button>
    </form>
  );
}