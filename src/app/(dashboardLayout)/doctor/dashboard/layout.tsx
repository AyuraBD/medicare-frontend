export default function DoctorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>Doctor Dashboard Layout</h1>
    {children}
    </>
  );
}