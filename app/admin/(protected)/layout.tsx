import AdminNav from "@/components/admin/AdminNav";

export default function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full bg-cream text-brown">
      <AdminNav />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {children}
      </div>
    </div>
  );
}
