import React, { useEffect, useState } from "react";

function BasicDetails({ display, handleNext, formData, setFormData }) {
  const [countries, setCountries] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    fetchCountry().then((data) => {
      if (data) {
        setCountries(data);
      }
    });
  }, []);

  const fetchCountry = async () => {
    return await fetch("https://api.countrystatecity.in/v1/countries", {
      method: "GET",
      headers: {
        "X-CSCAPI-KEY":
          "QzNVT0FaeUlPU0FlSlNEWHl6ZjR1V1BEYlFuSmF5eWhybk4xMFN0NA==",
      },
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  const handleState = async (e) => {
    setFormData({ ...formData, country: e.target.value });
    // console.log(formData);
    let selectElement = e.target;
    let id = selectElement.options[selectElement.selectedIndex].id;

    setState(
      await fetch(
        "https://api.countrystatecity.in/v1/countries/" + id + "/states",
        {
          method: "GET",
          headers: {
            "X-CSCAPI-KEY":
              "QzNVT0FaeUlPU0FlSlNEWHl6ZjR1V1BEYlFuSmF5eWhybk4xMFN0NA==",
          },
          redirect: "follow",
        }
      )
        .then((res) => res.json())
        .then((data) => data)
    );
  };

  const handleCity = async (e) => {
    setFormData({ ...formData, state: e.target.value });
    let selectElement = e.target;
    let id = selectElement.options[selectElement.selectedIndex].id;
    let contry = document.getElementById("country");
    let countryId = contry.options[contry.selectedIndex].id;

    setCity(
      await fetch(
        "https://api.countrystatecity.in/v1/countries/" +
          countryId +
          "/states/" +
          id +
          "/cities",
        {
          method: "GET",
          headers: {
            "X-CSCAPI-KEY":
              "QzNVT0FaeUlPU0FlSlNEWHl6ZjR1V1BEYlFuSmF5eWhybk4xMFN0NA==",
          },
          redirect: "follow",
        }
      )
        .then((res) => res.json())
        .then((data) => data)
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <div
      className={`w-full h-full absolute ${display} lg:flex-row flex-col lg:overflow-hidden overflow-scroll`}>
      <div className="w-1/2  justify-center items-center lg:flex hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[80%] h-[80%]"
          data-name="Layer 1"
          width="1050.8619"
          height="704.35284"
          viewBox="0 0 1050.8619 704.35284">
          <path
            d="M1125.431,472.17637c0,142.47-90.2998,263.86-216.77978,310.05a326.34413,326.34413,0,0,1-59.32032,15.57,332.22787,332.22787,0,0,1-165.71972-15.05c-127.28028-45.81-218.24024-167.61-218.18018-310.64,0-182.18,147.75-329.93,330-329.93a328.56355,328.56355,0,0,1,192.01026,61.6C1070.991,263.63639,1125.431,361.54636,1125.431,472.17637Z"
            transform="translate(-74.56905 -97.82358)"
            fill="#e5e5e5"
          />
          <path
            d="M908.65117,782.22636a326.34413,326.34413,0,0,1-59.32032,15.57,332.22787,332.22787,0,0,1-165.71972-15.05l15.23974-61.15.91992-3.67,31.1001.12,156.24024.56,2,5.91Z"
            transform="translate(-74.56905 -97.82358)"
            fill="#2f2e41"
          />
          <rect
            id="effaf695-3865-40c6-8918-ced0238239c2"
            data-name="Rectangle 25"
            width="286.651"
            height="324.35501"
            fill="#e6e6e6"
          />
          <rect
            id="f33d627f-c769-4bde-9d74-ef156faf640e"
            data-name="Rectangle 25-2"
            x="5.111"
            y="6.86201"
            width="275.92801"
            height="310.63199"
            fill="#fff"
          />
          <circle
            id="b5fd4af9-5b07-4da2-8ccf-5b3d4ac887f6"
            data-name="Ellipse 116"
            cx="143.326"
            cy="290.98201"
            r="15.467"
            fill="#e6e6e6"
          />
          <rect
            id="f05405a0-af73-4807-bbd1-d761cdd06c65"
            data-name="Rectangle 31"
            x="51.876"
            y="116.81901"
            width="88.837"
            height="9.088"
            fill="#e6e6e6"
          />
          <rect
            id="a05e4a04-50b7-46b0-b842-8db21044ae7a"
            data-name="Rectangle 32"
            x="51.876"
            y="144.05199"
            width="134.07899"
            height="9.088"
            fill="#6c63ff"
          />
          <rect
            id="bdce3bac-3998-4a72-bc14-4aa79023038d"
            data-name="Rectangle 38"
            x="51.876"
            y="171.45602"
            width="120.918"
            height="9.088"
            fill="#e6e6e6"
          />
          <rect
            id="e1177af0-2f80-4461-b67e-43945f3b6fee"
            data-name="Rectangle 39"
            x="51.876"
            y="198.13601"
            width="186.72301"
            height="9.088"
            fill="#6c63ff"
          />
          <rect
            id="b290cdc3-2096-427b-bfd4-6b657da823ea"
            data-name="Rectangle 40"
            x="53.81699"
            y="223.54501"
            width="152.175"
            height="9.088"
            fill="#e6e6e6"
          />
          <g id="b96c6486-fa38-4cba-8e5e-13dca7f44a0c" data-name="Group 52">
            <path
              id="b0fbfc35-67c9-42b4-b2fe-33d0d7288754-385"
              data-name="Path 846"
              d="M482.17805,625.61438a29.75626,29.75626,0,0,1,2.991,3.6l140.109-3.428,16.345-29.868,48.3,18.776-23.8,55.687a22.609,22.609,0,0,1-23.5,13.561l-158.3-19.123a29.665,29.665,0,1,1-2.15-39.211Z"
              transform="translate(-74.56905 -97.82358)"
              fill="#9f616a"
            />
            <path
              id="a6a8f1c9-3ab8-4f6f-ba9b-45acc2f7af89-386"
              data-name="Path 852"
              d="M670.75807,455.06457l65.569-21.489,19.258-26.411,93.716,5.546,13.759,30.82,49.972,23.613-7.68,142.624-13.138,133.477c-67.558-34.983-193.63907-8.31221-194.74307-7.87819Z"
              transform="translate(-74.56905 -97.82358)"
              fill="#6c63ff"
            />
            <path
              id="fc06e97d-785e-4845-9aa0-60a5889f9ce3-387"
              data-name="Path 853"
              d="M684.775,648.11407l-66.694-26.684.284-1.187c.286-1.2,28.672-119.817,32.441-138.879,3.926-19.859,18.271-25.35,18.88-25.573l.445-.164,26.394,8.034,11.592,91.081Z"
              transform="translate(-74.56905 -97.82358)"
              fill="#6c63ff"
            />
            <path
              id="b248559b-61d8-49e2-8eef-81cc9521c19e-388"
              data-name="Path 855"
              d="M828.7801,737.37719a29.72053,29.72053,0,0,1,4.677.258l92.747-105.072-10.788-32.286,46.608-22.652,24.655,55.313a22.608,22.608,0,0,1-6.034,26.453l-121.65,103.073a29.6649,29.6649,0,1,1-30.215-25.087Z"
              transform="translate(-74.56905 -97.82358)"
              fill="#9f616a"
            />
            <path
              id="b0e9bc84-32e8-4599-bd8d-d35670d3692b-389"
              data-name="Path 856"
              d="M918.801,642.79113l-38.689-91.006,15.09-63.391,16.259-20.541a9.36609,9.36609,0,0,1,7.524.07c6,2.413,11.1,9.81,15.177,21.984l36.259,103.279Z"
              transform="translate(-74.56905 -97.82358)"
              fill="#6c63ff"
            />
            <path
              id="b58b0f1b-b11b-4f57-8de2-a939101b4938-390"
              data-name="Path 857"
              d="M718.072,373.4422v-68.61a91.938,91.938,0,1,1,183.875-.60916q.001.30455,0,.60916v68.61a12.364,12.364,0,0,1-12.35,12.35H730.422A12.364,12.364,0,0,1,718.072,373.4422Z"
              transform="translate(-74.56905 -97.82358)"
              fill="#2f2e41"
            />
            <circle
              id="ba54abe3-4119-45e5-b5c1-150877d750f7"
              data-name="Ellipse 148"
              cx="716.54794"
              cy="218.96508"
              r="67.405"
              fill="#9f616a"
            />
            <path
              id="b6bcc4bf-1738-426f-8fbf-3ee273a728b5-391"
              data-name="Path 858"
              d="M696.322,310.32116a72.809,72.809,0,0,1,72.727-72.727h13.723a72.808,72.808,0,0,1,72.726,72.727v1.372h-29l-9.891-27.7-1.978,27.7H799.643l-4.99-13.974-1,13.974H696.322Z"
              transform="translate(-74.56905 -97.82358)"
              fill="#2f2e41"
            />
            <path
              id="be96ad09-85ff-4345-abef-5a49918f7c18-392"
              data-name="Path 859"
              d="M784.484,393.508a12.16709,12.16709,0,0,1-.967-12.918c14.541-27.658,34.9-78.765,7.877-110.283l-1.938-2.262h78.456v117.79L796.641,398.41a12.60771,12.60771,0,0,1-2.185.193,12.3,12.3,0,0,1-9.967-5.092Z"
              transform="translate(-74.56905 -97.82358)"
              fill="#2f2e41"
            />
          </g>
          <g id="b2dad932-78e1-44e1-9682-073c8202f887" data-name="Group 51">
            <path
              id="e043db59-b600-449e-8c52-e1eb73379667-393"
              data-name="Path 341"
              d="M217.64577,123.08567A32.89091,32.89091,0,1,0,250.535,155.9783v-.00172a32.89088,32.89088,0,0,0-32.89091-32.89091Zm0,9.86638a9.8664,9.8664,0,1,1-9.86636,9.86644v0A9.86643,9.86643,0,0,1,217.64577,132.95205Zm0,47.50128a23.961,23.961,0,0,1-19.73454-10.53178c.15847-6.57819,13.15636-10.1991,19.73454-10.1991s19.57608,3.62091,19.73455,10.1991A23.99974,23.99974,0,0,1,217.64577,180.45333Z"
              transform="translate(-74.56905 -97.82358)"
              fill="#6c63ff"
            />
          </g>
          <path
            id="bcfa45dc-2c5a-4ac5-8376-9a2a23e225d0-394"
            data-name="Path 842"
            d="M218.02806,394.73458c13.55-24.831,46.01-40.556,72.563-26.382,11.952,6.379,21.453,17.663,24.469,31,3.5,15.493-3.875,30.266-11.488,43.282-4.132,7.065-8.66,13.986-12.08,21.438-3.541,7.717-6.072,16.636-3.406,25.031,2.4,7.563,8.418,13.064,15.008,17.107a111.82826,111.82826,0,0,0,23.061,10.3,135.74266,135.74266,0,0,0,51.485,6.661,140.80273,140.80273,0,0,0,25.66-4.148c8.943-2.28,17.719-5.17,26.677-7.4,14.956-3.715,32.009-5.562,46.191,1.9,13.778,7.252,19.944,22.419,21.851,37.174,3.522,27.246-7.281,55.52-26.786,74.6-9.358,9.154-21.134,16.717-33.96,19.811-11.191,2.7-25.561,2.527-34.467-5.839-9.938-9.337-7.6-24.309.293-34.16,10.075-12.569,27.143-15.588,42.374-15.894,17.326-.348,34.636,2.232,51.952.628a79.799,79.799,0,0,0,24.568-5.926,62.2576,62.2576,0,0,0,18.515-12.529c10.69-10.386,17.9-24.222,21.485-38.608,4.317-17.3,3.376-35.482.025-52.859a238.36078,238.36078,0,0,0-6.888-26.507c-1.157-3.67-6.952-2.1-5.786,1.595,10.32,32.724,16.074,70.563-3.865,100.946a60.10728,60.10728,0,0,1-35.943,25.873c-17.257,4.289-35.365,2.169-52.909,1.531-16.682-.607-35,.048-49.3,9.764-11.731,7.969-19.936,23.127-16.39,37.437,3.419,13.8,16.681,20.8,29.945,21.878,13.917,1.134,27.612-3.537,39.3-10.841,24.313-15.193,40.479-41.913,43.862-70.242,1.763-14.761-.031-30.661-6.725-44.059a43.13316,43.13316,0,0,0-15.847-17.661c-6.81-4.175-14.676-6.23-22.576-6.957-17.948-1.653-35.192,4.509-52.218,9.223a144.79836,144.79836,0,0,1-26.628,5.083,132.98246,132.98246,0,0,1-26.272-.428,129.36478,129.36478,0,0,1-25.457-5.65,101.89269,101.89269,0,0,1-23.108-10.447c-6.385-4.083-11.907-9.931-12.221-17.9-.341-8.641,4.016-16.724,8.16-24.009,8.187-14.391,18.3-28.467,20.435-45.314,1.87-14.737-4.06-29.262-14.3-39.773a53.771,53.771,0,0,0-39.737-16.485c-15.193.435-29.74,7.042-40.915,17.189a67.358,67.358,0,0,0-13.8,17.53c-1.851,3.391,3.328,6.422,5.181,3.028Z"
            transform="translate(-74.56905 -97.82358)"
            fill="#3f3d56"
          />
        </svg>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="w-full h-full">
          <div className="mt-4 text-2xl font-medium w-full">
            Registration Form
          </div>
          <div className="text-md">Enter your basic information</div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 lg:mt-2 p-2">
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="fullname" className="block">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                display-message="First Name"
                onChange={handleChange}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%]"
              />
            </div>
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="mname" className="block">
                Middle Name
              </label>
              <input
                type="text"
                id="mname"
                name="mname"
                display-message="Middle Name"
                onChange={handleChange}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%]"
              />
            </div>
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="lname" className="block">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                display-message="Last Name"
                onChange={handleChange}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%]"
              />
            </div>
            <div className="lg:col-span-2 col-span-3">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                display-message="Email Address"
                onChange={handleChange}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[97%] w-[90%]"
              />
            </div>
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="gender" className="block">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                display-message="Gender"
                onChange={handleChange}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%] appearance-none">
                <option value="default">--select gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="dob" className="block">
                DOB
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                display-message="Date Of Birth"
                onChange={handleChange}
                className="text-md p-1.5 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%] appearance-none uppercase"
              />
            </div>
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="blood" className="block">
                Blood Group
              </label>
              <select
                name="blood"
                id="blood"
                display-message="Blood Group"
                onChange={handleChange}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%] appearance-none">
                <option value="default">--select blood--</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="phone" className="block">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                display-message="Phone Number"
                onChange={handleChange}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="lg:col-span-3 col-span-3">
              <label htmlFor="address" className="block">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                display-message="Residential Address"
                onChange={handleChange}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[97%] w-[90%]"
              />
            </div>
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="country" className="block">
                Country
              </label>
              <select
                name="country"
                id="country"
                display-message="Country"
                onChange={handleState}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%] appearance-none">
                <option value="default">--select country--</option>
                {countries?.map((country) => {
                  return (
                    <option
                      value={country.name}
                      key={country.id}
                      id={country.iso2}>
                      {country.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="lg:col-span-1 col-span-3">
              <label htmlFor="state" className="block">
                State
              </label>
              <select
                name="state"
                id="state"
                display-message="State"
                onChange={handleCity}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%] appearance-none">
                <option value="default">--select state--</option>
                {state?.map((state) => {
                  return (
                    <option value={state.name} key={state.id} id={state.iso2}>
                      {state.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="lg:col-span-1 col-span-3 lg:mb-3">
              <label htmlFor="city" className="block">
                City
              </label>
              <select
                name="city"
                id="city"
                display-message="City"
                onChange={handleChange}
                className="text-md p-2 bg-gray-200 rounded-sm outline-none lg:w-[95%] w-[90%]  appearance-none">
                <option value="default">--select city--</option>
                {city?.map((city) => {
                  return (
                    <option value={city.name} key={city.id} id={city.iso2}>
                      {city.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="lg:col-start-2 lg:col-end-3 col-span-3">
              <button
                type="reset"
                className="bg-blue-200 outline-none lg:w-[95%] w-[90%] p-1.5 text-lg rounded">
                Cancel
              </button>
            </div>
            <div className="lg:col-start-3 lg:col-end-4 col-span-3">
              <button
                type="button"
                className="bg-blue-200 outline-none lg:w-[95%] w-[90%] p-1.5 text-lg rounded"
                onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
