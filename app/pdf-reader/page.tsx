import PDFReader from "@/components/mdx/PDFReader.mdx";
import Wrapper from "@/components/page-wrapper";

export default function page() {
  return (
    <Wrapper>
      <div className="h-full w-full bg-black flex items-center justify-center">
        <PDFReader></PDFReader>
      </div>
    </Wrapper>
  );
}
