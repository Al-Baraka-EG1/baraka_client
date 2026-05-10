import { FormData, formSchema } from "@/lib/validations/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { subject: "" },
  });

  return {
    ...form,
  };
}
