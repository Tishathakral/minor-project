"use client";
import React, { useState } from "react";
import axios from "axios";

export function DocumentSimilarityChecker() {
  const [doc1Text, setDoc1Text] = useState<string>(""); // State for document 1 text
  const [doc2Text, setDoc2Text] = useState<string>(""); // State for document 2 text
  const [similarityScore, setSimilarityScore] = useState<string>(""); // To display the similarity score

  // Handle finding document similarity
  const handleFindSimilarity = async () => {
    try {
      const response = await axios.post("/api/find-similarity", {
        document1: doc1Text,
        document2: doc2Text,
      });

      // Assuming the API response contains a similarity score
      setSimilarityScore(`Similarity Score: ${response.data.similarity}%`);
    } catch (error) {
      console.error("Error fetching the similarity score:", error);
      setSimilarityScore("Error occurred while fetching similarity score.");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto min-h-screen bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-6">

      {/* Document Input Section */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Side - Document 1 Input */}
        <div className="flex flex-col w-full md:w-1/2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900">
          <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2">Text A</h3>
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
          <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2">Text B</h3>
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
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-teal-500 dark:hover:bg-teal-600 transition duration-200"
          onClick={handleFindSimilarity}
        >
          Find Similarity
        </button>
      </div>

      {/* Result Display */}
      <div className="flex flex-col p-6 border-t border-gray-300 dark:border-gray-600">
        <h3 className="text-lg font-semibold dark:text-white text-gray-800">Similarity Result:</h3>
        <div className="mt-2 border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <p className="text-gray-700 dark:text-gray-300">
            {similarityScore || "No similarity score calculated yet. Please enter text and click 'Find Similarity'."}
          </p>
        </div>
      </div>
    </div>
  );
}
