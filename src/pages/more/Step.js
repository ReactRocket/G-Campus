import React from "react";
import ImageGridView from "../../components/ImageGridView";
import step1 from "../../resources/images/step/step1.jpeg";
import step2 from "../../resources/images/step/step2.jpeg";
import step3 from "../../resources/images/step/step3.jpeg";
import step4 from "../../resources/images/step/step4.jpeg";
import step5 from "../../resources/images/step/step5.jpeg";

const committeeMemberArray = [
  {
    name: "DR. MEHUL P. DESAI",
    designation: "PRINCIPAL",
    batch: "BOTH",
    connect: "https://www.linkedin.com/in/mehul-p-desai-92720b191/",
  },
  {
    name: "DR. MANISH M. KAYASTH",
    designation: "VICE-PRINCIPAL",
    batch: "BATCH-1",
    connect: "https://www.linkedin.com/in/mehul-p-desai-92720b191/",
  },
  {
    name: "DR. TEJAS R. GHADIYALI ",
    designation: "BCA-CO-ORDINATOR",
    batch: "BATCH-2",
    connect: "https://www.linkedin.com/in/mehul-p-desai-92720b191/",
  },
  {
    name: "DR. DARSHAN M. MEHTA",
    designation: "CO-ORDINATOR",
    batch: "BATCH-1",
    connect: "https://www.linkedin.com/in/mehul-p-desai-92720b191/",
  },
  {
    name: "DR. VISHAL A.NAIK ",
    designation: "CO-ORDINATOR",
    batch: "BATCH-2",
    connect: "https://www.linkedin.com/in/mehul-p-desai-92720b191/",
  },
  {
    name: "MR. RONAK M. SHAH",
    designation: "MEMBER",
    batch: "BATCH-1",
    connect: "https://www.linkedin.com/in/mehul-p-desai-92720b191/",
  },
];

const title = "THE STEP PROGRAM";
const subTitle = "NJ GROUP (UDHNA)";
const description =
  "NJ Group Udhna is offering a program named STEP (which could stand for various things like Student Training and Employment Program, Skills Training and Enhancement Program, etc.).";

const stepImageData = [
  {
    src: step1,
    title: title,
    subTitle: subTitle,
    description: description,
  },
  {
    src: step2,
    title: title,
    subTitle: subTitle,
    description: description,
  },
  {
    src: step3,
    title: title,
    subTitle: subTitle,
    description: description,
  },
  {
    src: step4,
    title: title,
    subTitle: subTitle,
    description: description,
  },
  {
    src: step5,
    title: title,
    subTitle: subTitle,
    description: description,
  },
];

const Step = () => {
  return (
    <div>
      <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        <div class="h-full">
          {/* <!-- Table --> */}
          <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-md border border-gray-200 ">
            <header class="px-5 py-4 border-b border-gray-100">
              <h2 class="font-semibold text-gray-800 uppercase">
                COMMITTEE MEMBERS
              </h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Name</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Designation</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Batch</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">Connect</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                    {committeeMemberArray?.map((member) => {
                      return (
                        <tr>
                          <td class="p-2 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  class="rounded-full"
                                  src="https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
                                  width="40"
                                  height="40"
                                  alt="Alex Shatov"
                                />
                              </div>
                              <div class="font-medium text-gray-800">
                                {member.name}
                              </div>
                            </div>
                          </td>
                          <td class="p-2 whitespace-nowrap">
                            <div class="text-left">{member.designation}</div>
                          </td>
                          <td class="p-2 whitespace-nowrap">
                            <div class="text-left font-medium text-gray-500">
                              {member.batch}
                            </div>
                          </td>
                          <td class="p-2 whitespace-nowrap ">
                            <a
                              href="mailto:"
                              class="text-lg flex justify-center items-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-envelope-at-fill hover:fill-blue-600 focus:fill-blue-600"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ImageGridView
        title={"GLIMPSES OF ACTIVITIES"}
        description={
          "Glimpses of activities include outdoor pursuits like hiking, camping, and sports, as well as indoor hobbies such as reading, cooking, and crafting. Social engagements, work-related tasks, educational pursuits, volunteer efforts, creative endeavors, and fitness activities also contribute to people's lifestyles and interests."
        }
        data={stepImageData}
      />
    </div>
  );
};

export default Step;
