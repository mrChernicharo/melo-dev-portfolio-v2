import { useForm, ValidationError } from '@formspree/react';
import React, { SyntheticEvent } from 'react';
import { FiMail } from 'react-icons/fi';
import { useThemeContext } from '../../hooks/ThemeContext';
import Button from '../Button/Button';
import { FormStyles } from './Styles';

export default function ContactForm(): JSX.Element {
  const { theme } = useThemeContext();

  const [formState, handleSubmit] = useForm('mjvjzwov');

  function handleFormSubmit(e: SyntheticEvent) {
    const emailEl = document.getElementById('email') as HTMLInputElement;
    const textAreaEl = document.getElementById('message') as HTMLInputElement;

    console.log(emailEl.value, textAreaEl.value);

    handleSubmit(e).then(() => {
      emailEl.value = '';
      textAreaEl.value = '';
    });
  }

  return (
    <FormStyles theme={theme}>
      <form
        onSubmit={handleFormSubmit}
        // method="POST"
        // action="https://formspree.io/f/mbjqjgkw"
      >
        <div className="inputs">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoCorrect="undefined"
          />
          <ValidationError prefix="Email" field="email" errors={formState.errors} />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="write here" />
          <ValidationError prefix="Message" field="message" errors={formState.errors} />
        </div>

        <Button
          title="Submit"
          leftIcon={<FiMail />}
          font={18}
          disabled={formState.submitting}
        />

        {formState.succeeded && (
          <div>
            <p>Thanks for writing us!</p>
            <p>We have received your message and will get back to you soon</p>
          </div>
        )}
      </form>
    </FormStyles>
  );
}
