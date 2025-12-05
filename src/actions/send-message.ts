"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function sendMessage(formData: { name: string; email: string; message: string; }) {
  const validatedFields = contactSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors in the form."
    };
  }

  try {
    // In a real application, you would send an email, save to a database, etc.
    // We'll simulate a network delay here.
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("New message received:", validatedFields.data);

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again."
    };
  }
}
