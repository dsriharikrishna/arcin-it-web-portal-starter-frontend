export default function ServiceLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-slate-50 min-h-screen">
            {children}
        </main>
    );
}
