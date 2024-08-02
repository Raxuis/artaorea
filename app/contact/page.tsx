"use client";

import Header from '@/components/Header'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Lenis from 'lenis';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ContactSchema } from '@/utils/validation';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { sendEmail } from '@/utils/sendEmail';
import { toast } from "sonner";


const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof ContactSchema>) {
    setIsLoading(true);
    sendEmail(values)
      .then((response) => {
        toast.success('Email sent successfully!');
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error('Failed to send email.');
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <Header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Want to work with me?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{isLoading ? <Loader2 className="animate-spin" /> : "Submit"}</Button>
        </form>
      </Form>
    </Header>
  )
}

export default Contact