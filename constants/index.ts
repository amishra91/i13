import * as z from 'zod';
export const formSchema = z.z.object({
  companyName: z.string().min(3, {
    message: 'Name is required.',
  }),
  companySize: z.string().min(3, {
    message: 'Size is required.',
  }),
  companyIndustry: z.string().min(3, {
    message: 'Industry is required.',
  }),
  companyProducts: z.string().min(3, {
    message: 'Products and Services are required.',
  }),
});
