import React, { FormEvent } from "react";
import { uploadFile } from "../../scripts/cloudStorage";
// Interface
interface iProps {
  name: string;
  folder: string;
  hook: any;
}
export default function FileUploader({ name, folder, hook }: iProps) {
  const [setFileURL] = hook;
  // Methods
  async function onFileChange(event: FormEvent) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const filename = `files/${folder}-${name}.pdf`;

    const fileUpload = await uploadFile(filename, file);

    setFileURL(fileUpload);
  }

  return (
    <>
      <b>Upload pdf file:</b>
      <label className="custom-file-chooser">
        <input
          accept=".pdf"
          onChange={(event) => onFileChange(event)}
          type="file"
        />
      </label>
    </>
  );
}
