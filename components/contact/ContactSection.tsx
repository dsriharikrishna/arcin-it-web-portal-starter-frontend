import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

const ContactSection = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 flex flex-col gap-4">
      <div className="grid lg:grid-cols-3 gap-6 items-stretch">
        {/* Form */}
        <div className="lg:col-span-2 flex">
          <ContactForm />
        </div>

        {/* Info */}
        <div className="lg:col-span-1 flex">
          <ContactInfo />
        </div>
      </div>

      {/* Map */}
      <div className="">
        <ContactMap />
      </div>
    </section>
  );
};


export default ContactSection;
