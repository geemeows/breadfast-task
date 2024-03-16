import axiosClient from "@/utils/axios";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { type Post } from '@/types'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'

import { Skeleton } from '@/components/ui/skeleton';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useToast } from "@/components/ui/use-toast"


const formSchema = z.object({
  title: z.string({
    required_error: 'Title should not be empty!'
  }),

  body: z.string({
    required_error: 'Body should not be empty!'
  })
})

const LoadingSkeleton = () => {
  return (
    <>
      <Skeleton className='mt-3 w-full h-[40px]' />
      <Skeleton className='mt-3 w-full h-[250px]' />
    </>
  )
}

const Post = () => {
  const { toast } = useToast()
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState<Post>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitLoading(true)
      await axiosClient.put(`/posts/${id}`, {
        ...postData,
        ...values,
      });
      toast({
        title: 'Post Update',
        description: 'Your post is updated successfully'
      })
      navigate('/posts')
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Post Update',
        description: 'Something went wrong while updating your post!'
      })
    } finally {
      setIsSubmitLoading(false);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true)
        const { data } = await axiosClient.get<Post>(`/posts/${id}`)
        setPostData(data)
      } catch (err) {
        toast({
          variant: 'destructive',
          title: 'Post Fetch',
          description: 'Something went wrong while fetching your post!'
        })
        navigate("/posts");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPost();
  }, [])

  useEffect(() => {
    if (postData) {
      form.setValue('title', postData.title);
      form.setValue("body", postData.body);
    }
  }, [postData])

  return (
    <div className="mt-2">
      <h2 className="text-2xl font-semibold">Edit Post</h2>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post title</FormLabel>
                    <FormControl>
                      <Input placeholder="Add your title here..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post body</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-[250px]"
                        placeholder="Add your body here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitLoading}>
                {isSubmitLoading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </form>
          </Form>
        </>
      )}
    </div>
  );
}

export default Post