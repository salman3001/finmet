import axios from "axios";
import { useState } from "react";

const GetStartedForm = () => {
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handelsubmit = () => {
    if (fname === "" || phone === "" || email === "" || city === "" || message === "") {
      alert("All fields are required")
      return
    }

    const bodyFormData = new FormData();
    bodyFormData.append("fname", fname);
    bodyFormData.append("phone", phone);
    bodyFormData.append("email", email);
    bodyFormData.append("city", city);
    bodyFormData.append("message", message);



    axios({
      method: "post",
      url: "/request_mail.php",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);

        alert(
          "Thank you, Your request has recieved. Our ITR expert will contain you shortly"
        );
        setFname("");
        setPhone("");
        setEmail("");
        setMessage("");
        setCity("");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        alert("Something went wrong");
      });
  };

  return (
    <form className="bg-white space-y-4 text-black p-5 lg:p-10 rounded-lg shadow-2xl  max-w-lg w-full ">
      <h1 className="text-xl font-bold text-center">Get Started! </h1>
      <input
        type="text"
        required
        name="fname"
        placeholder="Name*"
        className="border-b border-gray-300 p-2 w-full"
        value={fname}
        onChange={(e) => {
          setFname(e.target.value);
        }}
      />
      <input
        type="number"
        name="phone"
        required
        placeholder="mobile*"
        className="border-b border-gray-300 p-2 w-full"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="border-b border-gray-300 p-2 w-full"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        name="city"
        type="text"
        required
        placeholder="City*"
        className="border-b border-gray-300 p-2 w-full"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <input
        name="message"
        type="text"
        required
        placeholder="Service type*"
        className="border-b border-gray-300 p-2 w-full"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <div className="pt-4">
        <button
          id="form-btn"
          type="submit"
          className="p-2 px-8 rounded-sm bg-rose-600 text-white w-full"
          onClick={(e) => {
            e.preventDefault();
            handelsubmit();
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default GetStartedForm;
