export default function PatientDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>Patient Dashboard Layout</h1>
    {children}
    </>
  );
}