import Style from "./input.css";
function Input() {
  return (
    <>
      <div class="container">
        <form className="Menus">
          <label for="nama" class="input">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            required
            placeholder="Product Name"
          />
          <label for="role" class="input">
            Type
          </label>
          <input
            type="text"
            id="Type"
            required
            placeholder="Drink/Food/Desert"
          />
          <label for="avability" class="input">
            available
          </label>
          <input
            type="text"
            id="available"
            required
            placeholder="available / not available"
          />
          <label for="age" class="input">
            Price
          </label>
          <input type="number" id="Price" required placeholder="$....,00" />
          <label for="lokasi" class="input">
            Deskription
          </label>
          <input
            type="text"
            id="Deskription"
            required
            placeholder="something to be proud of"
          />
          <label for="Years" class="input">
            Making Time
          </label>
          <input type="number" id="makingTime" required placeholder="minute" />
          <br />
          <input type="submit" value="Submit" onclick="" class="select" />
        </form>
      </div>
    </>
  );
}

export default Input;
