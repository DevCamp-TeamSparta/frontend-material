# DevCamp - Frontned Material 

The application code provided above is designed to create a user registration form with a two-step process using React, TypeScript, and various custom components. This document will explain the code step by step, highlighting the use of external libraries, custom com
 

## Tech Stacks

The following technologies and libraries are used in this project:

1. **React**: A JavaScript library for building user interfaces.
2. **TypeScript**: Superset of JavaScript that adds static types.
3. **react-hook-form**: A library for managing form state and validation in React applications.
4. **zod**: A TypeScript-first schema declaration and validation library.
5. **framer-motion**: A library to create animations and transitions in React applications.
6. **lucide-react**: A library for displaying icons in React applications.

## Project Setup

1. **Clone the Repository**: Clone the project repository from the provided source control link.
2. **Install Dependencies**: Navigate to the project directory and run `npm install` or `yarn` to install all necessary dependencies.
3. **Start the Development Server**: Run `npm start` or `yarn start` to start the development server. This will open the application in your web browser.
4. **Explore the Code**: Open the project in your favorite code editor and explore the code, particularly the `Home` component which houses the registration form logic and rendering.

## Site URL

- **Live Demo**: You can view the live demo of the Registration Form Application at [https://registration-form-demo.example.com](https://registration-form-demo.example.com).

## Further Assistance

Should you encounter any issues or have questions regarding the code or setup, feel free to reach out to the project maintainers or refer to the official documentation of the libraries used in this project.

The Registration Form Application is structured to provide a seamless multi-step registration process. Understanding the tech stack and the project setup will provide a good foundation for further exploring and possibly extending the functionality of the application.ponents, and React hooks to manage form state and handle user input.

## Project Structure

Before diving into the code explanation, it's crucial to understand the project structure. The code assumes a directory setup where components and utility functions are organized in a certain way:

- `@/components/ui`: This directory contains custom UI components like Card, Button, Form, Select, Input, and other related components.
- `@/lib`: This is where utility functions are stored, like the `cn` (className) function.
- `@/validators`: This directory houses validation schemas, in this case for authentication (auth).

## Importing Dependencies and Components

At the start of the file, we import necessary dependencies and custom components. The imports include components for creating a card layout, form elements, select dropdown, input fields, and some utility hooks and functions.

```typescript
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// ... other imports
```

## Component Definition

We define a functional component `Home` as the main component for rendering the registration form.

```typescript
export default function Home() {
  // ... component body
}
```

## Managing State

We use the `useState` hook to manage the current step of the registration form (0 for the first step, 1 for the second step).

```typescript
const [step, setStep] = useState<number>(0);
```

## Setting Up Form Handling

We use the `useForm` hook from `react-hook-form` alongside the `zodResolver` to validate our form data against a predefined schema (`registerSchema`).

```typescript
const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      // ... other default values
    },
});
```

## Form Submission Handler

The `onSubmit` function is defined to handle form submissions. It checks if the password and confirmPassword fields match, and if they do, it alerts the form data; otherwise, it displays a toast message.

```typescript
function onSubmit(data: RegisterInput) {
    // ... function body
}
```

## Rendering the Form

The JSX returned by the component constructs a card layout with a form. The form is divided into two steps: user details and password setup. The `motion.div` elements from `framer-motion` are used to animate transitions between steps.

```typescript
return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className={cn("w-[380px]")}>
        // ... other JSX code
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              // ... form fields for step 1 and step 2
              <div className={"flex gap-2"}>
                // ... navigation and submission buttons
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
);
```

## Form Fields

Form fields are defined within `FormField` components, which accept a `control` prop for form state management, a `name` prop to identify the form field, and a `render` prop to render the actual input element.

```typescript
<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>이름</FormLabel>
      <FormControl>
        <Input placeholder="홍길동" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
// ... other form fields
```

## Navigation and Submission

Buttons are provided to navigate between steps, trigger form validation, and submit the form data.

```typescript
<div className={"flex gap-2"}>
  <Button className={cn({ hidden: step === 0 })} type="submit">
    계정 등록하기
  </Button>
  // ... other buttons for navigation
</div>
```

Each section of the form and the controls provided aid in a structured flow of user input, ensuring that the necessary information is collected in a user-friendly manner while adhering to the specified validation rules.