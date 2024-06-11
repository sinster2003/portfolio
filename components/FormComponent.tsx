import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "./ui/form";
  import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const FormComponent = ({ form, onSubmit }: { form: any, onSubmit: any}) => {
  return (
    <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-row gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Enter your name..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>This is your display name</FormDescription>
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
                      <Input
                        autoComplete="off"
                        placeholder="Enter your email..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your display email
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your message is mailed to sindhurvshabaraya2318@gmail.com
                  </FormDescription>
                  <FormMessage />
                  <Button type="submit">Submit</Button>
                </FormItem>
              )}
            />
          </form>
        </Form>
  )
}

export default FormComponent