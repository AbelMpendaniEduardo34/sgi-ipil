import SideBar from "@/components/sidebar/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <SideBar></SideBar>
        {children}
    </>
  );
}