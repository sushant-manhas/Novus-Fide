import './Payment.css'
import card_img from '../../assets/card_img.png'

function Payment() {
  return (
    <div className="container">
      <form action="">
      <h3 className="title">PAYMENT</h3>

        <div className="row">

          <div className="col">

            <div className="inputBox">
              <span>full name:</span>
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="inputBox">
              <span>email:</span>
              <input type="email" placeholder="@email.com" required />
            </div>
            <div className="inputBox">
              <span>address:</span>
              <input type="text" placeholder="Address" required />
            </div>
            <div className="inputBox">
              <span>city:</span>
              <input type="text" placeholder="City" required />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>State:</span>
                <input list="state" placeholder="State" required />
                <datalist id="state">
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </datalist>
              </div>
              <div className="inputBox">
                <span>Pin-code:</span>
                <input className="removeSpinners" type="number" placeholder="Pin Code" required />
              </div>
            </div>

          </div>

          <div className="col">

            <div className="inputBox">
              <span>cards accepted:</span>
              <img src={card_img} alt="x" />
            </div>
            <div className="inputBox">
              <span>card holder's name:</span>
              <input type="text" placeholder="Card Holder's Name" required/>
            </div>
            <div className="inputBox">
              <span>credit card number:</span>
              <input className="removeSpinners" type="number" placeholder="XXXX-XXXX-XXXX-XXXX" max="9999999999999999" required/>
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>exp month:</span>
                <input type="number" value="01" max="12" required/>
              </div>
              <div className="inputBox">
                <span>exp year:</span>
                <input type="number" value="2023" min="2023" required/>
              </div>
            </div>
            <div className="inputBox">
              <span>CVV:</span>
              <input className="removeSpinners" type="number" placeholder="XXX" required/>
            </div>

          </div>

        </div>

        <input type="submit" value="proceed to checkout" className="submit-btn" />

      </form>

    </div >

  )
}

export default Payment