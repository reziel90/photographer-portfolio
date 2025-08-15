import { Component } from '@angular/core';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Contact page component. Presents a simple form for visitors to get in touch
 * via email or phone. Submission is simulated by resetting the form and
 * displaying a confirmation message. In a real application you would send
 * this data to a backend or email service.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  submitted = false;

  submit(): void {
    // In a production app you would replace this with a call to a service.
    console.log('Contact form submitted:', this.contact);
    this.submitted = true;
    // Reset form fields.
    this.contact = { name: '', email: '', phone: '', message: '' };
  }
}