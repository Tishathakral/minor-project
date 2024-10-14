import React from 'react'
import { FileUploadDemo } from './fileuploader'

export default function MainAnalyser() {
  return (
    <div className=" mx-auto px-4 py-12 bg-white dark:bg-neutral-950 transition duration-500 ease-in-out">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 dark:from-purple-400 dark:via-teal-400 dark:to-blue-500">
        Document Analyser
      </h1>
      
      {/* Description */}
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto mt-2">
        Our powerful Document Analyser leverages advanced technologies like the Google Gemini API and Langchain to extract key information from your documents. Upload a PDF, ask a question, and get precise results in an instant.
      </p>

      {/* Steps for Usage
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition duration-500 ease-in-out">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">How to Use the Document Analyser</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Upload a file in PDF format by clicking on the "Choose File" button.</li>
          <li>Input your query about the document in the provided text box.</li>
          <li>Press "Enter" or click on the "Submit" button to get the relevant results extracted from the document.</li>
          <li>View the extracted text and analyze the document’s key information easily.</li>
        </ol>
      </div> */}

      {/* File Upload Component */}
      <div className="flex justify-center mt-10">
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition duration-500 ease-in-out">
          <FileUploadDemo />
        </div>
      </div>
    </div>
  )
}
