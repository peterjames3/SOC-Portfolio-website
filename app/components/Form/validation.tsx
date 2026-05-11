interface FormValues {
  name: string;
  email: string;
  // phone: string;
  message: string;
  subject: string;
  [key: string]: string;
}

export type { FormValues };

export const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  // Name
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Phone
  // if (!values.phone) {
  //   errors.phone = "Phone number is required";
  // } else if (
  //   !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phone)
  // ) {
  //   errors.phone = "Invalid phone number";
  // }
  // Subject
  if (!values.subject) {
    errors.subject = "Subject is required";
  } else if (values.subject.length < 5) {
    errors.subject = "Subject must be at least 5 characters";
  }
  // Message
  if (!values.message) {
    errors.message = "Message is required";
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};
