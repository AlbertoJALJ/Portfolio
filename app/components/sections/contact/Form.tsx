"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "@/components/ui/FormField";
import TextareaField from "@/components/ui/TextareaField";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
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
    console.log("Contact form values:", data);
    reset();
  };

  return (
    <form
      className="grid grid-cols-1 gap-6 rounded-3xl bg-white p-4 md:grid-cols-2 lg:p-12 my-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        id="name"
        label="Your Name"
        required
        error={errors.name?.message}
        inputProps={{
          type: "text",
          placeholder: "John Doe",
          autoComplete: "name",
          ...register("name"),
        }}
      />
      <FormField
        id="email"
        label="Email Address"
        required
        error={errors.email?.message}
        inputProps={{
          type: "email",
          placeholder: "john@example.com",
          autoComplete: "email",
          ...register("email"),
        }}
      />
      <div className="md:col-span-2">
        <TextareaField
          id="message"
          label="Message"
          required
          error={errors.message?.message}
          textareaProps={{
            placeholder: "Tell me about your project...",
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
