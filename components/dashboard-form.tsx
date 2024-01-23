"use client";

import * as z from "zod";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import Link from "next/link";
import { Textarea } from "./ui/textarea";
import { send } from "@/actions/send";
import SmallLoader from "./small-loader";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { ProjectSchema } from "@/schemas";
import ImageUpload from "./ui/image-upload";
import { Project, Image } from "@prisma/client";
import { update } from "@/actions/update";
import { Checkbox } from "./ui/checkbox";
interface DashboardFormProps {
  initialData:
    | (Project & {
        images: Image[];
      })
    | null;
}

const DashboardForm = ({ initialData }: DashboardFormProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      isArchived: false,
      type: "",
      link: "",
      images: [],
      miniParagraph: "",
      gitRepoLink: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ProjectSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      if (initialData) {
        update(values, initialData.projectId)
          .then((data) => {
            if (data?.error) {
              form.reset();
              setError(data.error);
            }

            if (data?.success) {
              form.reset();
              setSuccess(data.success);
            }
            router.refresh();
            router.push(`/dashboard`);
          })
          .catch(() => setError("Something went wrong"));
      } else {
        send(values)
          .then((data) => {
            if (data?.error) {
              form.reset();
              setError(data.error);
            }

            if (data?.success) {
              form.reset();
              setSuccess(data.success);
            }
            router.refresh();
            router.push(`/dashboard`);
          })
          .catch(() => setError("Something went wrong"));
      }
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <div className="space-y-4">
            <>
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value.map((image) => image.url)}
                        disabled={isPending}
                        onChange={(url) =>
                          field.onChange([...field.value, { url }])
                        }
                        onRemove={(url) =>
                          field.onChange([
                            ...field.value.filter(
                              (current) => current.url !== url
                            ),
                          ])
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="project name"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="miniParagraph"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mini Paragraph</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="short paragraph"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="project type"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="project link"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gitRepoLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github Repository</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="repository link"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Editor
                        id={field.name}
                        disabled={isPending}
                        value={field.value}
                        onTextChange={(e: EditorTextChangeEvent) =>
                          field.onChange(e.htmlValue)
                        }
                        style={{ height: "320px" }}
                        className="max-w-[700px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isArchived"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isPending}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Archived</FormLabel>
                      <FormDescription>
                        This project will not appear anywhere in the portfolio.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full hover:bg-primary hover:text-white "
          >
            <span className="flex gap-3 items-center justify-center">
              {isPending ? (
                initialData ? (
                  <>
                    Updating <SmallLoader />
                  </>
                ) : (
                  <>
                    Creating <SmallLoader />
                  </>
                )
              ) : initialData ? (
                "Update"
              ) : (
                "Create"
              )}
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DashboardForm;
