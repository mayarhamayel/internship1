
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Input, Button } from "antd";
import { useState } from "react";
const { Dragger } = Upload;
import logo from "./assets/logo.png";
import { createWorker } from "tesseract.js";
import { useEffect, useRef } from "react";



const { TextArea } = Input;




const CheckOCRScreen = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);

  const workerRef = useRef(null);
  useEffect(() => {
    const loadWorker = async () => {
      workerRef.current = await createWorker("eng+ara");
    };

    loadWorker();

    return () => {
      workerRef.current?.terminate();
    };
  }, []);


  const handleExtractText = async () => {
    if (!image) {
      messageApi.error("Please upload image");
      return;
    }

    setLoading(true);

    const {
      data: { text },
    } = await workerRef.current.recognize(image);

    setText(text);

    setLoading(false);
  };

  const handleClear = () => {
    setImage(null);
    setImageUrl(null);
    setText("");
  };

  const props = {
    name: "file",
    multiple: false,
    accept: "image/*",
    beforeUpload(file) {
      setImage(file);

      setImageUrl(URL.createObjectURL(file));

      return false;
    },

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        messageApi.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        messageApi.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div className=" bg-gray-100 h-screen p-8 ">
      <div className="flex gap-6 items-center bg-white rounded-2xl p-2.5 m-9">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="text">
          <h1>Smart OCR Scanner</h1>
          <p>convert your images into text</p>
        </div>
      </div>

      {contextHolder}

      <div className=" flex gap-8 m-9 items-stretch ">
        <div className="img w-full p-8 rounded-2xl bg-white">
          <h1 className="font-bold mb-8 text-gray-700">Upload Image</h1>
          <div className="!h-85">
            <Dragger {...props}>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="preview"
                  className="rounded-lg max-h-60 mx-auto"
                />
              ) : (
                <>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>

                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>

                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </>
              )}
            </Dragger>
          </div>
          <div className="btnss flex items-center justify-between mt-6">
            <Button
              type="primary"
              danger
              className="w-60"
              onClick={handleClear}
            >
              Clear/Delete
            </Button>
          </div>
        </div>

        <div className="w-full p-8 rounded-2xl bg-white ">
          <div>
            <h1 className="font-bold mb-8 text-gray-700">Extracted Text</h1>
            <TextArea rows={15} value={text} dir="auto" />
            <Button
              type="primary"
              className="w-40 mt-6"
              loading={loading}
              onClick={handleExtractText}
            >
              Extract Text
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOCRScreen;
