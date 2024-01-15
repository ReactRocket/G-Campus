import React, { useState } from "react";
import axios from "axios";

function Registration() {
  const [page, setPage] = useState(1);
  const [APIData, setAPIData] = useState(null);
  let responseData;

  const handleChange = () => {};
  const handleNext = () => {
    setPage((prev) => (page > 2 ? Number(1) : prev + 1));
  };
  const handlePrevious = () => {
    setPage((prev) => (page < 0 ? Number(1) : prev - 1));
  };

  const handleClick = async () => {
    await axios.get("http://localhost:5000/test").then((res) => {
      let response = res.data;
      responseData = response.data;
      setAPIData(responseData);
    });
  };

  return (
    <div className="h-screen w-full relative">
      <button onClick={handleClick}>click to fetch</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Medium</th>
            <th>Head Of The Department</th>
          </tr>
        </thead>
        <tbody>
          {APIData?.map((department, i) => {
            return (
              <tr key={i}>
                <td>{department.deptId}</td>
                <td>{department.deptName}</td>
                <td>{department.medium}</td>
                <td>{department.headOfDept}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <div
        className={` ${
          page === 1 ? "w-full h-full" : "hidden"
        } absolute flex lg:flex-row flex-col bg-slate-50`}>
        <div className="w-[45%] h-full lg:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[90%] m-auto h-[90%]"
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
        <div className="lg:w-[55%] lg:m-0 mt-2 w-full flex justify-center items-center bg-slate-50">
          <form className="lg:w-[90%] m-auto lg:h-[90%] h-full w-[90%]">
            <h1 className="w-[100%] text-2xl font-medium">
              G-Campus Admission Form
            </h1>
            <p>Enter your admission infromation</p>
            <div className="grid grid-cols-3 mt-5 lg:h-[19%]">
              <h1 className="col-span-3 lg:text-lg text-base font-normal lg:h-6 h-7 lg:block hidden">
                Name :
              </h1>
              <div className="lg:col-span-1 col-span-3">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="lg:col-span-1 col-span-3">
                <input
                  type="text"
                  name="middleName"
                  id="middleName"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="middleName">Middle Name</label>
              </div>
              <div className="lg:col-span-1 col-span-3">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="grid grid-cols-3 mt-5 lg:h-[19%]">
              <h1 className="col-span-3 lg:text-lg text-base font-normal lg:h-6 h-7 lg:block hidden">
                Birth Information :
              </h1>
              <div className="lg:col-span-1 col-span-3">
                <input
                  type="date"
                  pattern="[0-9]{10}"
                  id="dob"
                  name="dob"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="dob">Date Of Birth</label>
              </div>
              <div className="lg:col-span-1 col-span-3">
                <select
                  name="gender"
                  id="gender"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]">
                  <option value="default">-- Select Your Gender --</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="gender">Gender</label>
              </div>
              <div className="lg:col-span-1 col-span-3">
                <select
                  name="bloodgroup"
                  id="bloodgroup"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]">
                  <option value="default">-- Select Your Group --</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                <label htmlFor="bloodgroup">Blood Group</label>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5 lg:h-[19%]">
              <h1 className="col-span-2 lg:text-lg text-base font-normal lg:h-6 h-7 lg:block hidden">
                Contact :
              </h1>
              <div className="lg:col-span-1 col-span-2">
                <input
                  type="number"
                  pattern="[0-9]{10}"
                  id="phoneNo"
                  name="phoneNo"
                  onChange={handleChange}
                  className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none lg:w-[92%] w-[90%]"
                />
                <label htmlFor="phoneNo">Phone No</label>
              </div>
              <div className="lg:col-span-1 col-span-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none  lg:w-[92%] w-[90%]"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-5 lg:mt-5 mb-3">
              <button
                type="reset"
                className=" bg-sky-500 lg:col-start-3 col-start-2 text-center lg:w-9/12 text-lg py-2 lg:px-6 rounded text-sky-950">
                Reset
              </button>
              <button
                type="button"
                onClick={handleNext}
                className=" bg-sky-500 lg:col-start-4 col-start-4 text-center lg:w-9/12 text-lg py-2 lg:px-6 rounded text-sky-950">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={` ${
          page === 2 ? "w-full h-full" : "hidden"
        } absolute flex lg:flex-row flex-col bg-slate-50`}>
        <div className="w-[45%] h-full lg:flex justify-center items-center hidden">
          <svg
            className="w-[70%] m-auto h-[70%]"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            width="575.45508"
            height="668.31863"
            viewBox="0 0 575.45508 668.31863">
            <path
              d="M887.72754,709.08824H733.27246v-2h.00015A152.45493,152.45493,0,0,0,885.72754,554.63332V446.84068h2Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#f2f2f2"
            />
            <path
              d="M466.28967,319.488a114.22783,114.22783,0,0,1-12.55762,3.9713c-5.62552,1.371-8.80168,2.00651-14.2313-.10074-.19073-.074-.37274-.14719-.54445-.21916a57.67862,57.67862,0,0,1-35.10473-52.299c-.02717-.38357-.02717-.78688-.02717-1.18035a56.19182,56.19182,0,0,1,.27141-5.67544,57.37007,57.37007,0,0,1,1.23014-7.63289l-.05427-.00984c-4.396-4.49514-6.08745-10.6526-5.52665-16.83954A27.8324,27.8324,0,0,1,412.31794,218.689a44.03242,44.03242,0,0,1,18.28053-6.45254,46.32618,46.32618,0,0,1,5.25531-.30492h16.49858a71.2821,71.2821,0,0,1,10.35686-1.63284h.02711c33.20525-2.75411,59.39135,19.25926,56.94911,46.04317-.01811.02954-.04521.059-.06332.08855-.70551,1.15082-1.32963,2.24262-1.88144,3.28525-.53364.97377-.9859,1.90822-1.37484,2.7935-3.0302,6.846,11.36992,113.06125,6.205,114.67433-2.93972.91476-14.789-78.123-12.6634-63.09339C512.58492,332.946,481.58713,313.83322,466.28967,319.488Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#2f2e41"
            />
            <polygon
              points="204.039 395.654 250.068 493.714 73.005 475.781 109.966 381.645 204.039 395.654"
              fill="#ffb6b6"
            />
            <path
              d="M608.71111,708.10068a257.90911,257.90911,0,0,1-95.64,12.81l-14.09-22.85s-.59,8.51-1.47,21.52a248.82112,248.82112,0,0,1-45.47-9.64c-28.11-8.79-54.46-22.41-81.17-34.97-5.41-32.25-7.44-81.98,22.47-110.93l160.99,29.5s25.83,19.32,18.92,26.24c-6.91,6.91-7.98,5.84-3.44,10.38,4.54,4.54,14.35,10.61005,14.45,14.58C584.30107,646.29069,595.31108,674.40067,608.71111,708.10068Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#2f2e41"
            />
            <path
              d="M488.19882,322.00724l-38.89471,2.71358L424.165,349.013l-8.80424,1.57147A32.8246,32.8246,0,0,0,388.35461,384.83c1.811,30.68255,5.86582,76.52768,14.34076,91.40151,13.14119,23.06327,23.99553,15.827,13.14119,23.06327s-18.14163,1.55016-13.14119,12.98621-6.75842,26.10467-6.75842,26.10467l-4.681,4.681,4.96475,2.03476L554.41713,565.686s-13.67875-61.50178-5.1242-76.60989,29.296-60.77675,10.78455-78.6462l-18.0999-63.69413-31.13375-9.18242Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#6c63ff"
            />
            <path
              d="M723.64653,574.42937A17.98107,17.98107,0,0,1,706.56632,553.024L632.35987,502.7684l8.85421-23.94307L728.91379,539.159a17.95587,17.95587,0,0,1-5.26726,35.27033Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#ffb6b6"
            />
            <path
              d="M514.04974,343.72762l-10.783,4.26967,57.52156,112.34356,119.07923,81.16849,17.16487-29.01121-90.64431-78.2945-36.28982-69.59841A44.66534,44.66534,0,0,0,514.04974,343.72762Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#6c63ff"
            />
            <circle cx="154.45508" cy="157.23055" r="39.05578" fill="#ffb6b6" />
            <path
              d="M500.69035,256.55559c-.65123.34367-1.29347.66029-1.94476.97685-.67839.32562-1.35679.65129-2.04418.9588-13.07045,5.92465-23.71676,6.585-30.17511-1.93565a36.16881,36.16881,0,0,0-2.97587-13.00712,20.90284,20.90284,0,0,1-3.44625,13.00712H447.09706c-13.39606,8.89147-20.27046,17.05939-10.97193,46.24848.606,1.91765,4.75782,70.04666,5.94275,75.28391-20.2795-7.779-37.7731-90.37144-38.21631-112.13438-.02717-.35273-.02717-.72361-.02717-1.08545a47.554,47.554,0,0,1,.27141-5.21909,48.86121,48.86121,0,0,1,1.23014-7.01914l-.05427-.00906a18.33085,18.33085,0,0,1-5.52665-15.48552,44.66352,44.66352,0,0,1,12.4101-11.12568,79.196,79.196,0,0,1,13.586-5.10155c.11759-.02711.21708-.05427.33467-.08138,1.42917-.389,2.8945-.74172,4.35983-1.04928a81.869,81.869,0,0,1,9.14477-1.3839c.22613-.00906.44321-.02717.64223-.02717a6.85291,6.85291,0,0,1,3.49147.9588c.00905,0,.00905.00906.02711.00906a6.89007,6.89007,0,0,1,3.35582,5.86132h14.49056c.53364,0,1.06733.01811,1.601.04522,20.18.805,36.39826,9.43427,37.43844,29.27057C500.67224,255.1988,500.69035,255.86814,500.69035,256.55559Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#2f2e41"
            />
            <circle cx="102.74716" cy="116.55484" r="25.73018" fill="#2f2e41" />
            <path
              d="M450.34438,220.49454c-2.92316,13.90648-17.34512,22.22375-31.14221,18.82147a25.73019,25.73019,0,0,1-18.82147-31.1422c3.40228-13.79709,20.14678-9.81952,31.1422-18.82148C447.07749,176.61776,454.28651,201.74053,450.34438,220.49454Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#2f2e41"
            />
            <path
              d="M393.17569,607.597c21.92937-89.42732,65.38029-166.29182,137.3408-226.51415a20.24579,20.24579,0,0,1,27.77727-6.80757L729.36225,477.99792a20.24555,20.24555,0,0,1,6.80745,27.77714c-27.4664,91.76223-68.60463,171.3878-137.34068,226.51427a20.24537,20.24537,0,0,1-27.777,6.80761L399.98354,635.37428A20.24591,20.24591,0,0,1,393.17569,607.597Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#f2f2f2"
            />
            <path
              d="M423.58155,637.73515a20.24547,20.24547,0,0,1-6.8076-27.777c21.92927-89.42776,65.38032-166.2921,137.34054-226.51446a19.98448,19.98448,0,0,1,7.54552-7.12751l-3.36622-2.04122a20.24619,20.24619,0,0,0-27.77725,6.80728C458.55617,441.30474,415.10528,518.169,393.176,607.59672a20.24539,20.24539,0,0,0,6.80759,27.777L571.05177,739.09662a20.1556,20.1556,0,0,0,20.23173.32023Z"
              transform="translate(-312.27246 -115.84068)"
              opacity="0.2"
            />
            <path
              d="M624.201,587.772l-114.829-69.18876a8.04378,8.04378,0,0,1,8.30255-13.77958l114.829,69.18876a8.04378,8.04378,0,0,1-8.30268,13.77942Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#fff"
            />
            <path
              d="M557.40068,496.02091l-25.26225-15.2215a8.04383,8.04383,0,0,1,8.2592-13.80574l.04348.02632,25.26225,15.22151a8.04377,8.04377,0,0,1-8.30268,13.77941Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#fff"
            />
            <path
              d="M605.95064,618.06109l-114.829-69.18876a8.04382,8.04382,0,0,1,8.28623-13.7895l.01632.00992,114.829,69.18876a8.04378,8.04378,0,0,1-8.30268,13.77942Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#fff"
            />
            <circle cx="326.51102" cy="307.93473" r="33.53921" fill="#3f3d56" />
            <circle cx="268.69818" cy="595.63336" r="71.68503" fill="#fff" />
            <path
              d="M580.97062,784.15932a72.68506,72.68506,0,1,1,72.68506-72.68555A72.76757,72.76757,0,0,1,580.97062,784.15932Zm0-143.37012a70.68506,70.68506,0,1,0,70.68506,70.68457A70.76475,70.76475,0,0,0,580.97062,640.7892Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#3f3d56"
            />
            <path
              d="M571.19132,748.78276a7.97166,7.97166,0,0,1-6.37854-3.19024L545.256,719.51639a7.97379,7.97379,0,1,1,12.75837-9.56813l12.7947,17.05832,32.86156-49.29169a7.97412,7.97412,0,1,1,13.26974,8.8465L577.82683,745.2317a7.97733,7.97733,0,0,1-6.41357,3.54846C571.33928,748.78146,571.2653,748.78276,571.19132,748.78276Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#6c63ff"
            />
            <ellipse
              cx="812.17178"
              cy="344.61891"
              rx="5.17661"
              ry="3.60114"
              transform="translate(-338.67921 -45.39552) rotate(-4.88719)"
              fill="#fff"
            />
            <ellipse
              cx="844.22218"
              cy="333.74642"
              rx="5.17661"
              ry="3.60114"
              transform="translate(-337.63641 -42.70455) rotate(-4.88719)"
              fill="#3f3d56"
            />
            <ellipse
              cx="796.9793"
              cy="320.16645"
              rx="5.17661"
              ry="3.60114"
              transform="translate(-336.65124 -46.77873) rotate(-4.88719)"
              fill="#ff6584"
            />
            <ellipse
              cx="783.12096"
              cy="312.68407"
              rx="2.27591"
              ry="3.27161"
              transform="translate(-361.92998 64.44338) rotate(-12.7322)"
              fill="#e6e6e6"
            />
            <ellipse
              cx="773.54902"
              cy="293.55567"
              rx="2.27591"
              ry="3.27161"
              transform="translate(-357.94956 61.86343) rotate(-12.7322)"
              fill="#3f3d56"
            />
            <ellipse
              cx="819.47303"
              cy="320.41852"
              rx="2.27591"
              ry="3.27161"
              transform="translate(-362.74075 72.64536) rotate(-12.7322)"
              fill="#e6e6e6"
            />
            <ellipse
              cx="805.47423"
              cy="332.03974"
              rx="2.27591"
              ry="3.27161"
              transform="translate(-365.64622 69.84586) rotate(-12.7322)"
              fill="#ff6584"
            />
            <ellipse
              cx="830.95919"
              cy="341.50532"
              rx="2.27591"
              ry="3.27161"
              transform="translate(-367.10572 75.69535) rotate(-12.7322)"
              fill="#3f3d56"
            />
            <ellipse
              cx="675.13485"
              cy="198.762"
              rx="3.60114"
              ry="5.17661"
              transform="translate(4.33932 688.54051) rotate(-75.77932)"
              fill="#fff"
            />
            <ellipse
              cx="641.29123"
              cy="198.54384"
              rx="3.60114"
              ry="5.17661"
              transform="translate(-20.9789 655.56939) rotate(-75.77932)"
              fill="#3f3d56"
            />
            <ellipse
              cx="681.48584"
              cy="226.84045"
              rx="3.60114"
              ry="5.17661"
              transform="translate(-18.0879 715.87766) rotate(-75.77932)"
              fill="#ff6584"
            />
            <ellipse
              cx="692.1313"
              cy="238.44708"
              rx="3.27161"
              ry="2.27591"
              transform="translate(66.02744 783.97815) rotate(-83.62433)"
              fill="#e6e6e6"
            />
            <ellipse
              cx="694.91422"
              cy="259.65492"
              rx="3.27161"
              ry="2.27591"
              transform="translate(47.42466 805.59664) rotate(-83.62433)"
              fill="#3f3d56"
            />
            <ellipse
              cx="660.31394"
              cy="219.23899"
              rx="3.27161"
              ry="2.27591"
              transform="translate(56.83259 735.28249) rotate(-83.62433)"
              fill="#e6e6e6"
            />
            <ellipse
              cx="677.34564"
              cy="212.84054"
              rx="3.27161"
              ry="2.27591"
              transform="translate(78.33185 746.52093) rotate(-83.62433)"
              fill="#ff6584"
            />
            <ellipse
              cx="656.36333"
              cy="195.55403"
              rx="3.27161"
              ry="2.27591"
              transform="translate(76.85916 710.30149) rotate(-83.62433)"
              fill="#3f3d56"
            />
            <path
              d="M314.27246,378.08775h-2V115.84068H466.72754v2h-.00015A152.45493,152.45493,0,0,0,314.27246,270.29561Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#f2f2f2"
            />
            <path
              d="M403.84245,608.54427a19.07237,19.07237,0,0,1-9.03526-27.6058l-55.10537-77.46088L357.38,482.96777l64.77681,92.48a19.04564,19.04564,0,0,1-18.31433,33.0965Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#ffb6b6"
            />
            <path
              d="M405.10862,363.0727h0a13.59981,13.59981,0,0,0-17.38172,3.06013L313.27234,470.26162l69,98,27-29-42-66,55.81831-53.1454A44.66534,44.66534,0,0,0,405.10862,363.0727Z"
              transform="translate(-312.27246 -115.84068)"
              fill="#6c63ff"
            />
          </svg>
        </div>
        <div className="lg:w-[55%] lg:m-0 mt-2 w-full flex justify-center items-center bg-slate-50">
          <form className="lg:w-[90%] m-auto lg:h-[90%] h-full w-[90%]">
            <h1 className="w-[100%] text-2xl font-medium">Education Detail</h1>
            <div className="grid grid-cols-4 mt-5 lg:h-[19%] gap-2">
              <h1 className="col-span-4 lg:text-lg text-base font-normal lg:h-6 h-7 lg:block">
                STD 10<sup>th</sup>
              </h1>
              <div className="lg:col-span-2 col-span-4">
                <input
                  type="text"
                  name="tenthSchooName"
                  id="tenthSchooName"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="tenthSchooName">
                  10<sup>th</sup> School Name
                </label>
              </div>
              <div className="lg:col-span-2 col-span-4">
                <input
                  type="month"
                  name="tenthPassingYear"
                  id="tenthPassingYear"
                  value="2023-12"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="tenthPassingYear">Year of Passing </label>
              </div>
              <div className="lg:col-span-1 col-span-4">
                <input
                  type="text"
                  name="tenthTotalMarks"
                  id="tenthTotalMarks"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="tenthTotalMarks">Total Marks</label>
              </div>
              <div className="lg:col-span-1 col-span-4">
                <input
                  type="text"
                  name="tenthObtainMarks"
                  id="tenthObtainMarks"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="tenthObtainMarks">Obtain marks</label>
              </div>
            </div>
            <div className="grid grid-cols-4 lg:mt-14 mt-7 lg:h-[19%] gap-2">
              <h1 className="col-span-4 lg:text-lg text-base font-normal lg:h-6 h-7 lg:block">
                STD 12<sup>th</sup>
              </h1>
              <div className="lg:col-span-2 col-span-4">
                <input
                  type="text"
                  name="twelfthSchoolName"
                  id="twelfthSchoolName"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="twelfthSchoolName">
                  12<sup>th</sup> School Name
                </label>
              </div>
              <div className="lg:col-span-2 col-span-4">
                <input
                  type="month"
                  name="twelfthPassingYear"
                  id="twelfthPassingYear"
                  value="2023-12"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="twelfthPassingYear">Year of Passing </label>
              </div>
              <div className="lg:col-span-1 col-span-4">
                <input
                  type="text"
                  name="twelfthTotalMarks"
                  id="twelfthTotalMarks"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="twelfthTotalMarks">Total Marks</label>
              </div>
              <div className="lg:col-span-1 col-span-4">
                <input
                  type="text"
                  name="twelfthObtainMarks"
                  id="twelfthObtainMarks"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[90%]"
                />
                <label htmlFor="twelfthObtainMarks">Obtain marks</label>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:mt-14 mt-7 lg:h-[15%]">
              <h1 className="col-span-4 lg:text-lg text-base font-normal lg:h-6 h-7 lg:block">
                Aadhar Card
              </h1>
              <div className="col-span-1">
                <input
                  type="text"
                  name="twelfthSchoolName"
                  id="twelfthSchoolName"
                  onChange={handleChange}
                  className="border-2 text-lg px-2 py-1 rounded border-grey-900 block focus:border-sky-700 focus:ring-1 placeholder:text-sky-700 outline-none w-[95%]"
                />
                <label htmlFor="twelfthSchoolName">Aadhar Card</label>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-5 mb-3">
              <button
                type="reset"
                onClick={handlePrevious}
                className=" bg-sky-500 lg:col-start-3 col-start-2 text-center lg:w-9/12 text-lg py-2 lg:px-6 rounded text-sky-950">
                Previos
              </button>
              <button
                type="button"
                onClick={handleNext}
                className=" bg-sky-500 lg:col-start-4 col-start-4 text-center lg:w-9/12 text-lg py-2 lg:px-6 rounded text-sky-950">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={` ${
          page === 3 ? "w-full h-full" : "hidden"
        } absolute bg-green-800`}>
        third
      </div> */}
    </div>
  );
}

export default Registration;
