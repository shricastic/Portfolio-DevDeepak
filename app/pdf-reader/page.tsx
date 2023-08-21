import PDFReader from "@/components/my-components/Projects/PDFReader.mdx";
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
