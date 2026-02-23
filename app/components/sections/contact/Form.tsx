"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "@/components/ui/FormField";
import TextareaField from "@/components/ui/TextareaField";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.email("Please provide a valid email address."),
  message: z.string().min(10, "Project details must be at least 10 characters long."),
});

type Inputs = z.infer<typeof contactSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Contact form submitted:", data);
    reset();
  };

  return (
    <form
      className="my-16 grid grid-cols-1 gap-6 rounded-3xl bg-white p-4 md:grid-cols-2 lg:p-12 dark:bg-zinc-900"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        id="name"
        label="Full Name"
        required
        error={errors.name?.message}
        inputProps={{
          type: "text",
          placeholder: "Your full name",
          autoComplete: "name",
          ...register("name"),
        }}
      />
      <FormField
        id="email"
        label="Email"
        required
        error={errors.email?.message}
        inputProps={{
          type: "email",
          placeholder: "your@email.com",
          autoComplete: "email",
          ...register("email"),
        }}
      />
      <div className="md:col-span-2">
        <TextareaField
          id="message"
          label="Project Details"
          required
          error={errors.message?.message}
          textareaProps={{
            placeholder: "Describe your project or idea...",
            rows: 5,
            ...register("message"),
          }}
        />
      </div>
      <div className="md:col-span-2">
        <Button className="w-full" size="md" type="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
}
