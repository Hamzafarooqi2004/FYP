import React from "react";
import "./artForm.css"; // Import the CSS file for styles

const UploadArtWork = () => {
  return (
    <div className="container1">
    <form className="form-container">
    <h2>UPLOAD ART</h2>
    <div className="container text-center">
      <div className="row align-items-start">
      <div className="col">
        <label htmlFor="titleInput" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-control"
          placeholder="Enter Title of the Art"
        />
      </div>

      <div className="col">
        <label htmlFor="artistInput" className="form-label">
          Artist Type
        </label>
        <input
          type="text"
          id="artist"
          className="form-control"
          placeholder="Enter Artist Type"
        ></input>
      </div>
      </div>
      </div>
     
      <div className="container text-center">
      <div className="row align-items-start">
      <div className="col">
        <label htmlFor="yearInput" className="form-label">
          Created Year
        </label>
        <input
          type="number"
          id="year"
          className="form-control"
          placeholder="Enter Created Year"
        ></input>
      </div>

      <div className="col">
        <label htmlFor="priceInput" className="form-label">
          Price
        </label>
        <input
          type="number"
          id="price"
          className="form-control"
          placeholder="Enter your price"
        ></input>
      </div>
      </div>
      </div>
      
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Upload Image
        </label>
        <input className="form-control" type="file" id="image" disabled="" />
      </div>
      <div className="container text-center">
      <div className="row align-items-start">
      <div className="col">
        <label htmlFor="mediumInput" className="form-label">
          Medium
        </label>
        <input
          type="text"
          id="mediumInput"
          className="form-control"
          placeholder="Enter Medium"
        ></input>
      </div>

      <div className="col">
        <label htmlFor="styleInput" className="form-label">
          Style
        </label>
        <input
          type="text"
          id="styleInput"
          className="form-control"
          placeholder="Enter Style"
        ></input>
      </div>
      </div>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputCategorySelect">
            Options
          </label>
          <select className="form-select" id="inputCategorySelect">
            <option>Enter your choice...</option>
            <option value={1}>Photography</option>
            <option value={2}>Painting</option>
            <option value={3}>Calligraphy</option>
            <option value={4}>Sketching</option>
            <option value={5}>Others</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="ownershipInput" className="form-label">
          Owner Ship
        </label>
        <input
          type="text"
          id="ownershipInput"
          className="form-control"
          placeholder="Enter Ownership"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="descriptionInput" className="form-label">
          Description
        </label>
        <textarea
          type="text"
          id="description"
          className="form-control"
          placeholder="Enter your description"
          style={{ height: 130 }}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};
export default UploadArtWork;