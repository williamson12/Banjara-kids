import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const DISPOSABLE_DOMAINS = [
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email',
  'yopmail.com', 'maildrop.cc', '10minutemail.com', 'trashmail.com',
  'sharklasers.com', 'fakeinbox.com', 'getairmail.com', 'dispostable.com',
  'mailnull.com', 'spamgourmet.com', 'spam4.me', 'grr.la', 'trashmail.me',
  'discard.email', 'spamthisplease.com', 'bccto.me',
];

function isValidIndianPhone(raw: string): boolean {
  const cleaned = raw.replace(/[\s\-().]/g, '');
  return /^(?:\+91|91)?[6-9]\d{9}$/.test(cleaned);
}

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(60, 'Name must be under 60 characters.')
    .regex(
      /^[a-zA-Z\u0900-\u097F\s.'\-]+$/,
      'Name should contain only letters and spaces.'
    )
    .refine((val) => !/\d/.test(val), 'Name should not contain numbers.'),

  phone: z
    .string()
    .trim()
    .min(1, 'Please enter your phone number.')
    .refine(isValidIndianPhone, {
      message: 'Enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).',
    }),

  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address (e.g. name@gmail.com).')
    .max(100, 'Email is too long.')
    .refine((email) => {
      const domain = email.split('@')[1]?.toLowerCase() ?? '';
      return !DISPOSABLE_DOMAINS.some((d) => domain === d || domain.endsWith('.' + d));
    }, 'Please use a genuine email address — we will only contact you about your campus visit.'),

  childAge: z.string().min(1, "Please select your child's age group."),
});

type FormValues = z.infer<typeof formSchema>;

const MAPS_URL = 'https://www.google.com/maps/place/Banjara+Kids/@13.0329151,77.6665135,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae116d650b3b87:0x11ae8b72c391cef1!8m2!3d13.0329151!4d77.6665135!16s%2Fg%2F11n52m75vy?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: '4th Cross, Trinity Enclave, Banjara Layout, Hormavu, Bengaluru – 560043',
    href: MAPS_URL,
    cta: 'Get Directions',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 76196 33138',
    href: 'tel:+917619633138',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'director@banjarakids.com',
    href: 'mailto:director@banjarakids.com',
  },
  {
    icon: Clock,
    label: 'School Hours',
    value: 'Monday – Saturday, 8:30 AM – 12:30 PM',
    href: undefined,
  },
];

const inputClass =
  'border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent';

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', phone: '', email: '', childAge: '' },
    mode: 'onTouched',
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // We use the environment variable, or prompt the user if it's missing.
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: `New Campus Visit Request from ${values.name}`,
          from_name: "Banjara Kids Website",
          // Send all form fields
          name: values.name,
          email: values.email,
          phone: values.phone,
          childAge: values.childAge,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Request Received',
          description: 'Our admissions team will contact you within 24 hours to confirm your visit.',
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Please check your internet connection and try again.",
      });
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">

          {/* Left: info */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Take the <br /> First Step.
              </h2>
              <p className="text-lg text-primary-foreground/70 font-light mb-10 leading-relaxed">
                Admissions for the upcoming academic year are highly selective. Book a campus visit
                and experience the Banjara difference in person — right here in Hormavu, Bengaluru.
              </p>

              <div className="space-y-5 mb-10">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full border border-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-foreground/40 font-bold mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-primary-foreground/85 hover:text-accent transition-colors font-light"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-primary-foreground/85 font-light">{item.value}</p>
                      )}
                      {'cta' in item && item.cta && item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-accent hover:text-accent/80 transition-colors tracking-wide uppercase"
                          aria-label="Open location in Google Maps"
                        >
                          <ExternalLink size={11} aria-hidden="true" />
                          {item.cta}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-sm font-light text-primary-foreground/60 border-l border-primary-foreground/20 pl-6">
                <p>
                  <strong className="text-primary-foreground block mb-1">Campus Tours</strong>
                  Tours are conducted on Saturdays to ensure uninterrupted learning during the week.
                </p>
                <p>
                  <strong className="text-primary-foreground block mb-1">Admissions Process</strong>
                  1. Campus Visit &rarr; 2. Parent Interaction &rarr; 3. Offer of Admission
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-background text-foreground p-8 md:p-12 shadow-2xl"
            >
              <h3 className="font-serif text-2xl text-primary mb-2">Book a Campus Visit</h3>
              <p className="text-sm text-primary/50 mb-8">Hormavu, Bengaluru</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>

                  {/* Honeypot field — hidden from real users, traps bots */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="_honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Parent's Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/70 uppercase tracking-wider text-xs font-bold">
                          Parent's Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Rahul Kumar / Priya Sharma"
                            className={inputClass}
                            autoComplete="name"
                            data-testid="input-parent-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone + Email side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary/70 uppercase tracking-wider text-xs font-bold">
                            Mobile Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+91 98765 43210"
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              className={inputClass}
                              data-testid="input-phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary/70 uppercase tracking-wider text-xs font-bold">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="you@gmail.com"
                              type="email"
                              inputMode="email"
                              autoComplete="email"
                              className={inputClass}
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Child's Age Group */}
                  <FormField
                    control={form.control}
                    name="childAge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/70 uppercase tracking-wider text-xs font-bold">
                          Child's Age Group
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger
                              className="border-0 border-b border-border rounded-none px-0 focus:ring-0 focus:border-primary bg-transparent"
                              data-testid="select-child-age"
                            >
                              <SelectValue placeholder="Select age group" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="playgroup">1.5 – 2.5 Years (Playgroup)</SelectItem>
                            <SelectItem value="nursery">2.5 – 3.5 Years (Nursery)</SelectItem>
                            <SelectItem value="lkg">3.5 – 4.5 Years (LKG)</SelectItem>
                            <SelectItem value="ukg">4.5 – 5.5 Years (UKG)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-8 rounded-none h-14 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-base transition-colors duration-300"
                    data-testid="button-submit-visit"
                  >
                    {isSubmitting ? 'Sending…' : 'Request a Visit'}
                  </Button>

                  <p className="text-xs text-center text-primary/40 mt-3">
                    Our team will call you within 24 hours to confirm your visit.
                    Your information is kept private and will never be shared.
                  </p>
                </form>
              </Form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
