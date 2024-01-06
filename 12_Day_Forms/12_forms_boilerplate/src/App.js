import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    file: "",
    country: "",
    gender: "",
    skills: {
      html: false,
      css: false,
      js: false,
      react: false,
    },
    touched: {
      firstName: false,
      lastName: false,
    },
  });

  const options = [
    {
      value: "",
      label: "-- Select Country--",
    },
    {
      value: "Finland",
      label: "Finland",
    },
    {
      value: "Sweden",
      label: "Sweden",
    },
    {
      value: "Norway",
      label: "Norway",
    },
    {
      value: "Denmark",
      label: "Denmark",
    },
  ];

  const renderedOptions = options.map(({ value, label }) => (
    <option key={label} value={value}>
      {label}
    </option>
  ));

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => {
      if (type === "file") return { ...prevData, [name]: e.target.files[0] };
      if (type === "checkbox")
        return { ...prevData, skills: { ...prevData.skills, [name]: checked } };
      return { ...prevData, [name]: value };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handelOnBlur = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      touched: { ...prevData.touched, [name]: true },
    }));
  };

  const validate = () => {
    let error = {
      firstName: "",
      lastName: "",
    };

    if (
      (data.touched.firstName && data.firstName.length < 3) ||
      (data.touched.firstName && data.firstName.length > 12)
    ) {
      error = { ...error, firstName: "First name should be b/w 3 and 12 char" };
    }

    if (
      (data.touched.lastName && data.lastName.length < 3) ||
      (data.touched.lastName && data.lastName.length > 12)
    ) {
      error = { ...error, lastName: "Last name should be b/w 3 and 12 char" };
    }

    return error;
  };
  const { firstName, lastName } = validate();
  return (
    <div>
      <h3>Add Student</h3>
      <form onSubmit={handleOnSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              placeholder="First Name"
              onChange={handleOnChange}
              onBlur={handelOnBlur}
            />
            <br />
            <small>{firstName}</small>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name </label>
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              placeholder="Last Name"
              onChange={handleOnChange}
              onBlur={handelOnBlur}
            />
            <br />
            <small>{lastName}</small>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel">Telephone </label>
            <input
              type="tel"
              name="tel"
              value={data.tel}
              placeholder="Telephone"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <input type="file" name="file" onChange={handleOnChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <br />
          <select name="country" onChange={handleOnChange}>
            {renderedOptions}
          </select>
        </div>
        <div className="form-group">
          <p>Select your skills</p>
          <label htmlFor="html">HTML </label>
          <input
            type="checkbox"
            id="html"
            name="html"
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="css">CSS </label>
          <input
            type="checkbox"
            id="css"
            name="css"
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="js">JS </label>
          <input type="checkbox" id="js" name="js" onChange={handleOnChange} />
          <br />
          <label htmlFor="react">React </label>
          <input
            type="checkbox"
            id="react"
            name="react"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <p>Gender</p>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={data.gender === "Male"}
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="female">Female </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={data.gender === "Female"}
            onChange={handleOnChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
