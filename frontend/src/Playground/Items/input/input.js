import React, { ChangeEvent, useState } from "react";
import Style from "./input.css";
function Input() {
  const [file, setfile] = useState([]);
  const [image, setimage] = useState([]);
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setfile(e.target.files[0]);
      setimage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      <div class="container">
        {file && (
          <>
            <img src={image} alt="err" />
            <div>{file.name}</div>
          </>
        )}
        <form className="Menus">
          <label for="nama" class="input">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            required
            className="inputForm"
            placeholder="Product Name"
          />
          <label for="role" class="input">
            Type
          </label>
          <input
            type="text"
            id="Type"
            required
            className="inputForm"
            placeholder="Drink/Food/Desert"
          />
          <label for="avability" class="input">
            Upload Images
          </label>
          <input
            type="file"
            id="available"
            required
            className="inputForm"
            onChangeCapture={uploadImage}
          />
          <label for="age" class="input">
            Price
          </label>
          <input
            type="number"
            id="Price"
            required
            className="inputForm"
            placeholder="$....,00"
          />
          <label for="lokasi" class="input">
            Deskription
          </label>
          <input
            type="text"
            id="Deskription"
            required
            className="inputForm"
            placeholder="something to be proud of"
          />
          <label for="Years" class="input">
            Making Time
          </label>
          <input
            type="number"
            id="makingTime"
            required
            className="inputForm"
            placeholder="minute"
          />
          <br />
          <input type="submit" value="Submit" onclick="" class="select" />
        </form>
      </div>
    </>
  );
}

export default Input;
