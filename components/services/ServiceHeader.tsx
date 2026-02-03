"use client";

interface ServiceHeaderProps {
  title?: string;
  description: string;
  subtitle?:string; 
  maxWidth?: string;
}

export default function ServiceHeader({
  title,
  description,
  subtitle,
  maxWidth = "max-w-full",
}: ServiceHeaderProps) {
  return (
    <section className="bg-white">
      <div className={`mx-auto px-6 text-center ${maxWidth}`}>
        {title && (
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6">
            {title}
          </h2>
        )}

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>

        <p className="text-slate-500 text-sm sm:text-md  mt-4">{subtitle}</p>
      </div>
    </section>
  );
}
