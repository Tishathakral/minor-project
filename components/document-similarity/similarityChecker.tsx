"use client";
import React, { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

export function DocumentSimilarityChecker() {
  const [doc1Text, setDoc1Text] = useState<string>(""); // State for document 1 text
  const [doc2Text, setDoc2Text] = useState<string>(""); // State for document 2 text
  const [similarityDescriptions, setSimilarityDescriptions] = useState<string>(""); // To display the similarity descriptions
  const [similarityMatrix, setSimilarityMatrix] = useState<number[][]>([]); // To display the similarity matrix
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Track API call status

  // Handle finding document similarity
  const handleFindSimilarity = async () => {
    setIsLoading(true); // Start loading
    setErrorMessage(""); // Reset error message
    try {
      const response = await axios.post("http://localhost:5000/compare_documents", {
        docs: [doc1Text, doc2Text],
      });

      // Assuming the API response contains similarity matrix and descriptions
      setSimilarityMatrix(response.data.similarity_matrix);
      setSimilarityDescriptions(response.data.similarity_descriptions.join("\n"));
    } catch (error) {
      console.error("Error fetching the similarity score:", error);
      setErrorMessage("Error occurred while fetching similarity score. Please enter the text first");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto min-h-screen bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-6">
      {/* Document Input Section */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Side - Document 1 Input */}
        <div className="flex flex-col w-full md:w-1/2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900">
          <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2">Text 1</h3>
          <textarea
            rows={8}
            placeholder="Type or paste your first document here..."
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 transition duration-200"
            value={doc1Text}
            onChange={(e) => setDoc1Text(e.target.value)}
          />
        </div>

        {/* Right Side - Document 2 Input */}
        <div className="flex flex-col w-full md:w-1/2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900">
          <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2">Text 2</h3>
          <textarea
            rows={8}
            placeholder="Type or paste your second document here..."
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 transition duration-200"
            value={doc2Text}
            onChange={(e) => setDoc2Text(e.target.value)}
          />
        </div>
      </div>

      {/* Similarity Button */}
      <div className="flex items-center justify-center w-full p-6 border-t border-gray-300 dark:border-gray-600">
        <button
        className={`p-3 w-full text-white rounded-lg transition duration-200 ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600"
        }`}
          onClick={handleFindSimilarity}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? <div className="flex items-center justify-center">
              <Loader2 className="animate-spin mr-2" size={20} /> Finding Similarity...
            </div> : "Find Similarity"}
        </button>
      </div>

      {/* Result Display */}
      <div className="flex flex-col p-6 border-t border-gray-300 dark:border-gray-600">
        <h3 className="text-lg font-semibold dark:text-white text-gray-800">Similarity Results:</h3>

        {/* Similarity Descriptions */}
        {similarityDescriptions && (
          <div className="mt-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <h4 className="text-gray-700 dark:text-gray-300">Similarity Descriptions:</h4>
            <p className="text-gray-700 dark:text-gray-300">{similarityDescriptions}</p>
          </div>
        )}

        {/* Similarity Matrix */}
        {similarityMatrix.length > 0 && (
          <div className="mt-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <h4 className="text-gray-700 dark:text-gray-300">Similarity Matrix:</h4>
            <pre className="text-gray-700 dark:text-gray-300">{JSON.stringify(similarityMatrix, null, 2)}</pre>
          </div>
        )}

        {/* No Results or Error */}
        {!similarityDescriptions && !errorMessage && !isLoading && (
          <div className="mt-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <p className="text-gray-700 dark:text-gray-300">No similarity results available.</p>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="mt-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <p className="text-gray-700 dark:text-gray-300">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
