export default function CommonProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>Common Protected Layout</h1>
    {children}
    </>
  );
}