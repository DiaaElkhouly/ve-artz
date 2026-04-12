import ClientPage from "@/components/ClientPage";
import CustomCursor from "@/components/CustomCursor";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function ClientDetailPage() {
  return (
    <>
      <ClientPage lang="en" />
      <About />
      <Contact />
      {/* <CustomCursor /> */}
    </>
  );
}
