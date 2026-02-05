import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

const ContactSection = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-12">
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {/* Form */}
        <div className="flex lg:col-span-2">
          <ContactForm />
        </div>

        {/* Info */}
        <div className="flex lg:col-span-1">
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
    </section>
  );
};

export default ContactSection;
