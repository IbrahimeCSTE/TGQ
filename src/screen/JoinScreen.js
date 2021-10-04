import React, { useState } from "react";
import CheckoutStep from "../component/CheckoutStep";
import Navbar from "../component/Navbar/Navbar";
import Zoom from "react-reveal/Zoom";
const JoinScreen = () => {
  const [personal, setPersonal] = useState(true);
  const [education, setEducation] = useState(false);

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const [msc, setMsc] = useState("");
  const [bsc, setBsc] = useState("");
  const [bscResult, setBscResult] = useState("");
  const [underBsc, setUnderBsc] = useState("");

  const [facebook, setFacebook] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");

  const personalHandle = () => {
    if (
      fullName !== "" &&
      address !== "" &&
      city !== "" &&
      postalCode !== "" &&
      country !== ""
    ) {
      setPersonal(false);
      setEducation(true);
    } else {
      alert("Fill the form!");
    }
  };
  const educationHandle = () => {
    if (msc !== "" && bsc !== "" && bscResult !== "" && underBsc !== "") {
      setPersonal(false);
      setEducation(false);
      if (
        facebook !== "" &&
        whatsapp !== "" &&
        linkedin !== "" &&
        instagram !== ""
      ) {
        alert("fill up");
      }
    } else {
      alert("Fill the form!");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        {personal ? (
          <Zoom>
            <div className="shipping mt-5">
              <CheckoutStep step1></CheckoutStep>
              <div className="my-4">
                <h3 className="text-center">Personal Information</h3>
                <hr />
              </div>
              <section className="form">
                <div>
                  <input
                    type="text"
                    value={fullName}
                    placeholder="Enter full name"
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    value={address}
                    placeholder="Enter address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    value={city}
                    placeholder="Enter city"
                    onChange={(e) => setCity(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    value={postalCode}
                    placeholder="Enter postal code"
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    value={country}
                    placeholder="Enter country"
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <label />
                  <button
                    onClick={personalHandle}
                    className="btn m-1 btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </section>
            </div>
          </Zoom>
        ) : education ? (
          <Zoom>
            <div className="shipping mt-5">
              <CheckoutStep step1 step2></CheckoutStep>
              <div className="my-4">
                <h3 className="text-center">Educational Information</h3>
                <hr />
              </div>
              <section className="form">
                <div>
                  <input
                    type="text"
                    value={msc}
                    placeholder="Enter Msc Year if do else N/A"
                    onChange={(e) => setMsc(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    value={bsc}
                    placeholder="Enter Bsc Year if running input year and term"
                    onChange={(e) => setBsc(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    value={bscResult}
                    placeholder="Enter Bsc Result if do else N/A"
                    onChange={(e) => setBscResult(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    value={underBsc}
                    placeholder="Under bsc details"
                    onChange={(e) => setUnderBsc(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <label />
                  <button
                    onClick={educationHandle}
                    className="btn m-1 btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </section>
            </div>
          </Zoom>
        ) : (
          <Zoom>
            <div className="shipping mt-5">
              <CheckoutStep step1 step2 step3></CheckoutStep>
              <div className="my-4">
                <h3 className="text-center">Social Information</h3>
                <hr />
              </div>
              <form onSubmit={submitHandler} className="form">
                <div>
                  <input
                    type="text"
                    placeholder="Facebook Link"
                    onChange={(e) => setFacebook(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter WhatsApp Number"
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Linkedin Link"
                    onChange={(e) => setLinkedin(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Instagram"
                    onChange={(e) => setInstagram(e.target.value)}
                    required
                  ></input>
                  <br />
                </div>
                <div>
                  <label />
                  <button className="btn m-1 btn-primary">Submut</button>
                </div>
              </form>
            </div>
          </Zoom>
        )}
      </div>
    </div>
  );
};

export default JoinScreen;
