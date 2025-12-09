import React from "react";
import { IconDocumentDownload, IconPdf } from "@/components/organisms/Icons";
import Button from "@/components/atoms/Button/Button";
import type { CurriculumProps } from "./Curriculum.types";

const Curriculum: React.FC<CurriculumProps> = ({
  title,
  description,
  buttonText,
  downloadUrl,
}) => {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-screen bg-[color:var(--color2)] mt-20">
      <div className="max-w-screen-xl mx-auto px-4 py-16 text-center text-[color:var(--neutral1)]">
        <div className="flex justify-center items-center gap-2 mb-6">
          <IconPdf width={40} height={40} color={"var(--color4)"} />
          <h2 className="text-4xl font-bold text-[color:var(--color3)]">
            {title}
          </h2>
        </div>
        <div className="max-w-[700px] mx-auto mb-8 rounded-lg p-6 shadow-md w-full bg-[color:var(--color5)]">
          <p className="mb-8 text-lg">{description}</p>
          <div className="flex justify-center">
            <Button
              variant="secondary"
              rounded="rounded-full"
              href={downloadUrl}
              download
              className="text-lg font-semibold px-6 py-3"
            >
              <IconDocumentDownload className="mr-2" />
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
