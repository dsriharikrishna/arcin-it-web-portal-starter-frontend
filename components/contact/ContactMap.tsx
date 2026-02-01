export default function ContactMap() {
  return (
    <div className="relative rounded-3xl overflow-hidden h-[280px] sm:h-[380px] bg-blue-50">
      
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm">
        <p className="text-sm font-semibold text-slate-900">
          Hyderabad – HITEC City
        </p>
        <p className="text-xs text-slate-500">
          India Office Location
        </p>
      </div>

      <iframe
        title="HITEC City Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.336397854825!2d78.3938610150515!3d17.447442703969174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7fe1a4daf%3A0xea86d6e6d7fc9658!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1710000000000"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
