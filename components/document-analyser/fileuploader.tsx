"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import axios from "axios";
import { Loader2 } from "lucide-react";

export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [query, setQuery] = useState<string>(""); // Input state for question
  const [result, setResult] = useState<string>(""); // To display the fetched result
  const [isUploaded, setIsUploaded] = useState<boolean>(false); // Track upload status
  const [isUploading, setIsUploading] = useState<boolean>(false); // Track upload loading state
  const [isAsking, setIsAsking] = useState<boolean>(false); // Track ask loading state

  // Handle file upload
  const handleFileUpload = async (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    console.log(uploadedFiles);

    // Upload the files immediately after selection
    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("pdf_files", file);
    });

    setIsUploading(true); // Set uploading state

    try {
      const response = await axios.post("https://college-minor-production.up.railway.app/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Set upload status based on API response
      if (response.status === 200) {
        setIsUploaded(true); // Set to true if upload was successful
        setResult("Files uploaded successfully! You can now ask questions.");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      setResult("Error occurred while uploading files.");
    } finally {
      setIsUploading(false); // Reset uploading state
    }
  };

  // Handle sending the query to the API
  const handleSendQuery = async () => {
    setIsAsking(true); // Set asking state
    setResult("Analyzing the document..."); // Show analyzing message

    try {
      const response = await axios.post("https://college-minor-production.up.railway.app/ask", {
        question: query,
      });

      // Assuming the API response contains the result in a 'answer' field
      setResult(response.data.answer);
    } catch (error) {
      console.error("Error fetching the results:", error);
      setResult("Error occurred while fetching results.");
    } finally {
      setIsAsking(false); // Reset asking state
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 space-y-6">

      {/* Flexbox container to align uploader and result */}
      <div className="flex flex-col w-full lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        
        {/* Left: File Uploader */}
        <div className="w-full lg:w-1/2 h-68 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-4 overflow-hidden flex items-center justify-center">
          <FileUpload onChange={handleFileUpload} />
        </div>

        {/* Right: Result Display */}
        <div className="w-full lg:w-1/2 h-68 border border-gray-300 dark:border-gray-600 rounded-lg p-4 overflow-auto bg-gray-50 dark:bg-gray-900">
          <h3 className="text-lg font-semibold dark:text-white text-gray-800">Result:</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {result ? result : "No result yet. Ask a question to get the analysis."}
          </p>
        </div>
      </div>

      {/* Input box for question and send button outside of flex container */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
        
        {/* Input box for question */}
        <input
          type="text"
          placeholder="Ask a question about the document..."
          className={`w-full md:w-2/3 p-4 border ${!isUploaded || isAsking ? "cursor-not-allowed" : "cursor-text"} border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={!isUploaded || isAsking} // Disable input if not uploaded or asking
        />
        
        {/* Send button */}
        <button
          className={`w-full md:w-1/3 p-3 ${isUploaded && !isAsking ? "bg-blue-500" : "bg-gray-300"} ${!isUploaded || isAsking ? "cursor-not-allowed" : "cursor-pointer"} text-white rounded-lg hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600 transition`}
          onClick={handleSendQuery}
          disabled={!isUploaded || isAsking} // Disable button if not uploaded or asking
        >
          {isAsking || isUploading  ? <><Loader2 className="flex w-full justify-center animate-spin"/></> : "Send"} {/* Show loading text */}
        </button>
      </div>
    </div>
  );
}
