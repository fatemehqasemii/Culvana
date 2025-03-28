import { InboxOutlined } from "@ant-design/icons";
import { Create } from "@refinedev/antd";
import { Upload, message } from "antd";

export const RecipeCreate = () => {
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "/upload",
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Create saveButtonProps={undefined}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
    </Create>
  );
};
