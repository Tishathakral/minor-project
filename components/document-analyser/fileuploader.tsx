"use client";
import React, { useState, useEffect } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [query, setQuery] = useState<string>(""); // Input state for question
  const [result, setResult] = useState<string>(""); // To display the full result
  const [typedResult, setTypedResult] = useState<string>(""); // To display the progressively typed result
  const [isUploaded, setIsUploaded] = useState<boolean>(false); // Track upload status
  const [isUploading, setIsUploading] = useState<boolean>(false); // Track upload loading state
  const [isAsking, setIsAsking] = useState<boolean>(false); // Track ask loading state

  // Handle file upload
  const handleFileUpload = async (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    setTypedResult("");
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
  const handleSendQuery = async (question: string) => {
    setIsAsking(true); // Set asking state
    setTypedResult("");
    setResult("Analyzing the document..."); // Show analyzing message

    try {
      const response = await axios.post("https://college-minor-production.up.railway.app/ask", {
        question: question,
      });

      // Assuming the API response contains the result in a 'answer' field
      setResult(response.data.answer);
      setTypedResult(""); // Reset the typed result for animation effect
    } catch (error) {
      console.error("Error fetching the results:", error);
      setResult("Error occurred while fetching results.");
    } finally {
      setIsAsking(false); // Reset asking state
    }
  };

  // Typing effect to progressively reveal the result text
  useEffect(() => {
    let index = -1;
    const typingSpeed = 1; // Adjust typing speed (in ms)

    if (result) {
      const interval = setInterval(() => {
        setTypedResult((prevTypedResult) => prevTypedResult + result.charAt(index));
        index += 1;
        if (index >= result.length) {
          clearInterval(interval); // Clear the interval once all text is revealed
        }
      }, typingSpeed);

      return () => clearInterval(interval); // Cleanup on unmount or result change
    }
  }, [result]); // Re-run the effect whenever the result changes

  return (
    <div className="w-full max-w-4xl min-w-4xl mx-auto min-h-96 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 space-y-6">
      {/* Flexbox container to align uploader and result */}
      <div className="flex flex-col w-full lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left: File Uploader */}
        <div className="w-full lg:w-1/2 h-68 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-4 overflow-hidden flex items-center justify-center">
          <FileUpload onChange={handleFileUpload} />
        </div>

        {/* Right: Result Display */}
        <div className="w-full lg:w-1/2 h-68 border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <h3 className="text-lg font-semibold dark:text-white text-gray-800">Result:</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {typedResult ? typedResult : "No result yet. Ask a question to get the analysis."}
          </p>
        </div>
      </div>

      {/* Recommendation Buttons */}
      {isUploaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3"
        >
          <button
            onClick={() => handleSendQuery("What is the main topic of the document?")}
            className={`w-11/12 m-3 ${!isUploaded ? "cursor-not-allowed bg-gray-300" : "cursor-pointer text-white rounded-lg hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600"} rounded transition`}
          >
            What is the Main topic of the document?
          </button>
          <button
            onClick={() => handleSendQuery("Give me a summary of the document.")}
            className={`w-11/12 m-3 ${!isUploaded ? "cursor-not-allowed bg-gray-300" : "cursor-pointer text-white rounded-lg hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600"} rounded transition`}
          >
            Give me a summary of the document
          </button>
          <button
            onClick={() => handleSendQuery("What is the purpose of the document?")}
            className={`w-11/12 m-3 ${!isUploaded ? "cursor-not-allowed bg-gray-300" : "cursor-pointer text-white rounded-lg hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600"} rounded transition`}
          >
           What is the purpose of the document?
          </button>
        </motion.div>
      )}

      {/* Input box for question and send button outside of flex container */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
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
          className={`w-full md:w-1/3 p-3 ${!isUploaded || isAsking ? "cursor-not-allowed bg-gray-300" : "cursor-pointer text-white rounded-lg hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600"} rounded transition`}
          onClick={() => handleSendQuery(query)}
          disabled={!isUploaded || isAsking} // Disable button if not uploaded or asking
        >
          {isAsking || isUploading ? <><Loader2 className="flex w-full justify-center animate-spin" /></> : "Send"} {/* Show loading spinner */}
        </button>
      </div>
    </div>
  );
}
