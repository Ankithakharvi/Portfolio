import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-gray-300 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects.
              Whether you're looking for a full-stack developer or need help with
              your next web application, I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope text-blue-500 text-xl mr-4"></i>
                <span className="text-gray-300">ankithakharvi191@gmail.com.com</span>
              </div>
              <div className="flex items-center">
                <i className="fab fa-linkedin text-blue-500 text-xl mr-4"></i>
                <span className="text-gray-300">linkedin.com/in/ankitha-kharvi-20437b224</span>
              </div>
              <div className="flex items-center">
                <i className="fab fa-github text-blue-500 text-xl mr-4"></i>
                <span className="text-gray-300">github.com/Ankithakharvi</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-blue-500 text-xl mr-4"></i>
                <span className="text-gray-300">Kundapura, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry"
                  required
                  className="w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 font-medium"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <i className="fas fa-paper-plane ml-2"></i>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
