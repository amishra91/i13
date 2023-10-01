'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/constants';

export default function Home() {
  const router = useRouter();
  const [messages] = useState<any[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      companySize: '',
      companyIndustry: '',
      companyProducts: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const companyDetails = [
    {
      label: 'Company name',
      name: 'companyName',
      placeholder: 'Enter your company name',
    },
    {
      label: 'Company size',
      name: 'companySize',
      placeholder: 'What is your company size(1-10, 11-20)',
    },
    {
      label: 'Industry',
      name: 'companyIndustry',
      placeholder: 'Your company industry',
    },
    {
      label:
        'Product and Services. Use comma(,) to add multiple products/services.',
      name: 'companyProducts',
      placeholder: 'Enter products and services you provide',
    },
  ];

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: any = {
        role: 'user',
        content: `return gainCreators, painRelievers, customerGains, customerPains and customerJobs in json for ${values.companyProducts}`,
      };

      const arrayOfProducts = values.companyProducts
        .split(',')
        .map((item) => item.trim());
      const newMessages = [...messages, userMessage];
      localStorage.userData = JSON.stringify(newMessages);
      localStorage.userAnswers = JSON.stringify(arrayOfProducts);
      router.replace('/value-proposition-canvas');
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pl-72 pr-20 md:flex flex-col justify-center pt-10 w-full hidden">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
                rounded-lg 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                bg-[#fff]
              "
          >
            {companyDetails.map((item) => {
              return (
                <FormField
                  key={item.name}
                  name={item.name}
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <label>{item.label}</label>
                      <FormControl className="mb-2 p-2">
                        <Textarea
                          className="rounded border mb-2 px-2 py-4 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                          disabled={isLoading}
                          placeholder={item.placeholder}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              );
            })}

            <Button
              className="bg-[#37a169] hover:bg-[#37a169]"
              type="submit"
              disabled={isLoading}
            >
              Generate Canvas
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
