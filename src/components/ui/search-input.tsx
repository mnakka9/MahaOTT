"use client"

import { useRouter } from "next/navigation";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "./form"
import { FormControl, FormField, FormItem } from "./form";
import { Input } from "./input";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    input: z.string().min(2).max(50),
  });

function SearchInput() {

const router = useRouter();
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
  
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    router!.push(`/search/${values.input}`);
    form.reset();
  }

  return (
    <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="spacy-y-8" >
        <FormField
         control={form.control}
         name="input"
         render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="search" {...field} />
              </FormControl>
            </FormItem>
          )} ></FormField>
       </form>
    </Form>
  )
}

export default SearchInput

