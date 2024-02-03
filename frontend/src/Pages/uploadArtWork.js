import React, { useState } from 'react';

const UploadArtWork = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      // Generate a preview for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the upload logic here (e.g., send file to the server)

    // Clear the form after submission
    setFile(null);
    setPreview(null);
  };

  return (
    <div style={{ padding: '150px' }}>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Picture</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fileInput" className="block text-sm font-medium text-gray-600">
            Choose a picture:
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {preview && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Preview:</label>
            <div className="mt-1 p-2 border border-gray-300 rounded-md">
              <img src={preview} alt="Preview" className="w-full" />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!file}
          className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
        >
          Upload
        </button>
      </form>
    </div>
    </div>
  );
};

export default UploadArtWork;
