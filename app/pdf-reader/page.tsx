import PDFReader from "@/components/mdx/PDFReader.mdx";
import Wrapper from "@/components/page-wrapper";
export const metadata = {
  title: "PDF Reader",
  description:
    "Web app build with flask which is used to ask question from the your pdf. It uses ChatGPT directly without the API so it is completely free of cost.",
  openGraph: { images: "/pdf-reader-showcase.png" },
  twitter: { images: "/pdf-reader-showcase.png" },
};
export default function page() {
  return (
    <Wrapper>
      <div className="h-full w-full bg-black flex items-center justify-center">
        <PDFReader></PDFReader>
      </div>
    </Wrapper>
  );
}
