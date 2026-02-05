"use client";

interface ServiceHeaderProps {
  title?: string;
  description: string;
  subtitle?: string;
  maxWidth?: string;
}

export default function ServiceHeader({
  title,
  description,
  subtitle,
  maxWidth = "max-w-full",
}: ServiceHeaderProps) {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className={`mx-auto px-4 text-center sm:px-6 ${maxWidth}`}>
        {title && (
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 sm:mb-6 sm:text-3xl md:text-4xl">
            {title}
          </h2>
        )}

        <p className="text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
          {description}
        </p>

        {subtitle && (
          <p className="md:text-md mt-3 text-xs text-slate-500 sm:mt-4 sm:text-sm">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
