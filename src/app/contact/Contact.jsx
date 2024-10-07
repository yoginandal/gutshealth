import React, { useState, useCallback } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import img from "../../images/sonalica.png";

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-dgold">
      {label}
    </label>
    <input
      id={id}
      type={type}
      aria-required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`mt-1 block text-dgold w-full px-3 py-2 bg-white border ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-md shadow-sm focus:outline-none focus:ring-dgold focus:border-dgold`}
    />
    {error && <p className="text-sm text-red-600">{error}</p>}
  </div>
);

export default React.memo(function ContactForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const validateForm = () => {
        const newErrors = {};
        if (!formValues.firstName)
          newErrors.firstName = "First name is required.";
        if (!formValues.email) {
          newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
          newErrors.email = "Email is not valid.";
        }
        if (!formValues.phone) {
          newErrors.phone = "Phone number is required.";
        } else if (!/^\+?[1-9]\d{1,14}$/.test(formValues.phone)) {
          newErrors.phone = "Phone number is not valid.";
        }
        return newErrors;
      };

      const newErrors = validateForm();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      // Handle successful form submission
      console.log("Form submitted", formValues);
      setErrors({});
    },
    [formValues]
  );

  return (
    <div className="flex flex-col gap-8 p-8 m-10 mx-auto md:flex-row max-w-7xl justify-center">
      <div className="flex- max-w-[600px] p-8 space-y-6 rounded-md bg-slate-50 shadow-lg">
        <div>
          <h2 className="text-sm font-semibold text-dgold">Get in Touch</h2>
          <h1 className="mt-2 text-3xl font-bold text-lgold">
            Let&#39;s Chat, Contact with Us
          </h1>
          <p className="mt-2 text-gray-600">
            Have any questions or feedback? We&#39;re here to help.
          </p>
          <p className="mt-2 text-gray-600">
            We&#39;ll get back to you within 24 hours.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <InputField
              id="firstName"
              label="First name"
              placeholder="First name"
              value={formValues.firstName}
              onChange={handleChange}
              error={errors.firstName}
              required
            />
            <InputField
              id="lastName"
              label="Last name"
              placeholder="Last name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="yourname@company.com"
            value={formValues.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <InputField
            id="phone"
            label="Phone number"
            type="tel"
            placeholder="+91 (555) 444-0000"
            value={formValues.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-dgold"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message"
              value={formValues.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-dgold bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dgold focus:border-dgold"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-lgold text-white py-2 px-4 rounded-md hover:bg-dgold focus:outline-none focus:ring-0 focus:ring-[ #a0843fc0] focus:ring-offset-0 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex- space-y-6">
        <div className="overflow-hidden rounded-lg shadow-lg aspect-square ">
          <img
            src={img}
            alt="Contact person"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-4 bg-lgold p-6 rounded-lg text-white shadow-lg">
          <div className="flex items-center space-x-3 p-3 bg-dgold rounded-md shadow-md">
            <Mail className="w-10 h-10 p-2 bg-lgold rounded-full drop-shadow-md" />
            <a href="mailto:ayurvedicnutritionbyss@gmail.com">
              <div>
                Email us
                <div>ayurvedicnutritionbyss@gmail.com</div>
              </div>
            </a>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-dgold rounded-md shadow-md">
            <Phone className="w-10 h-10 p-2 bg-lgold rounded-full drop-shadow-md" />
            <a href="tel:+919818295702">
              <div>
                Call us
                <div>+91-9876543210</div>
              </div>
            </a>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-dgold rounded-md shadow-md">
            <MapPin className="w-10 h-10 p-2 bg-lgold rounded-full drop-shadow-md" />
            <a
              href="https://www.google.com/maps?q=230+Norman+Street+New+York,+H8R+1A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                Our Address
                <div>230 Norman Street New York, H8R 1A1</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
