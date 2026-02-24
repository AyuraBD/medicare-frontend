export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>Admin Dashboard Layout</h1>
    {children}
    </>
  );
}