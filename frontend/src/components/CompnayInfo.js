import React from "react";
import TitleContaint from "./innerCom/TitleContaint";
import ProfileDetails from "./innerCom/ProfileDetails";

const CompnayInfo = () => {
  return (
    <>
      <TitleContaint name={"Company Profile"} path="companyProfile" />
      <div className="py-20 md:flex justify-center mx-38">
        <div className="me-7">
          <ProfileDetails />
        </div>

        <div>
          <div className="border-2 rounded-md">
            <div className="text-slate-600">
              <form method="post" className="p-3">
                <div className="flex">
                  <div className="w-full p-3">
                    <div>
                      <label htmlFor="fname">First Name</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="border-2 w-full p-2 rounded-md"
                      />
                    </div>

                    <div className="pt-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-2 w-full p-2 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="w-full p-3">
                    <div>
                      <label htmlFor="lname">Last Name</label>
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="border-2 w-full p-2 rounded-md"
                      />
                    </div>

                    <div className="pt-3">
                      <label htmlFor="pass">Password</label>
                      <input
                        type="password"
                        id="pass"
                        name="pass"
                        className="border-2 w-full p-2 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-5 border-2 rounded-md">
            <div className="bg-gray-700 px-4 py-3 rounded-sm"><p className="text-lg font-semibold text-white">General Information</p></div>
            <form method="post" className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="cname" className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                  <input type="text" name="cname" id="cname" className="border-2 w-full p-2 rounded-md" placeholder="Company Name" />
                </div>
                <div>
                  <label htmlFor="tagline" className="mb-2 block text-sm font-medium text-gray-700">Company Tagline</label>
                  <input type="text" name="tagline" id="tagline" className="border-2 w-full p-2 rounded-md" placeholder="Company Tagline" />
                </div>
                <div>
                  <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">Category</label>
                  <select className="border-2 w-full p-2 rounded-md text-gray-700">
                    <option value="mostRecenet">Location</option>
                    <option value="mostViewed">Information of Techonology</option>
                    <option value="mostSearch">Hardware</option>
                    <option value="mostSearch">Machanical</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="owner" className="mb-2 block text-sm font-medium text-gray-700">Owner Name</label>
                  <input type="text" name="owner" id="owner" className="border-2 w-full p-2 rounded-md" placeholder="Owner Name" />
                </div>
                <div>
                  <label htmlFor="logo" className="mb-2 block text-sm font-medium text-gray-700">Company Logo</label>
                  <input type="file" name="logo" id="logo" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Company Logo" />
                </div>
                <div>
                  <label htmlFor="established" className="mb-2 block text-sm font-medium text-gray-700">Established</label>
                  <input type="text" name="established" id="established" className="border-2 w-full p-2 rounded-md" placeholder="Established" />
                </div>
              </div>

            </form>
          </div>




          <div className="mt-5 border-2 rounded-md">
            <div className="bg-gray-700 px-4 py-3 rounded-sm"><p className="text-lg font-semibold text-white">Company Address</p></div>
            <form method="post" className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="cmail" className="mb-2 block text-sm font-medium text-gray-700">E-Mail</label>
                  <input type="email" name="cmail" id="cmail" className="border-2 w-full p-2 rounded-md" placeholder="E-Mail" />
                </div>
                <div>
                  <label htmlFor="number" className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="telephone" name="number" id="number" className="border-2 w-full p-2 rounded-md" placeholder="Phone Number" />
                </div>
                <div>
                  <label htmlFor="ladline" className="mb-2 block text-sm font-medium text-gray-700">Ladline</label>
                  <input type="telephone" name="ladline" id="ladline" className="border-2 w-full p-2 rounded-md" placeholder="Phone Number" />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="wlink" className="mb-2 block text-sm font-medium text-gray-700">Website Link</label>
                  <input type="url" name="wlink" id="wlink" className="border-2 w-full p-2 rounded-md" placeholder="Website Link" />
                </div>
                <div>
                  <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">Address</label>
                  <input type="text" name="address" id="address" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Address" />
                </div>
                <div>
                  <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="city" className="border-2 w-full p-2 rounded-md" placeholder="City" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="state" className="mb-2 block text-sm font-medium text-gray-700">State</label>
                  <input type="text" name="state" id="state" className="border-2 w-full p-2 rounded-md" placeholder="State" />
                </div>
                <div>
                  <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                  <input type="text" name="country" id="country" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Country" />
                </div>
                <div>
                  <label htmlFor="zip" className="mb-2 block text-sm font-medium text-gray-700">Zip Code</label>
                  <input type="number" name="zip" id="zip" className="border-2 w-full p-2 rounded-md" placeholder="Zip Code" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="employees" className="mb-2 block text-sm font-medium text-gray-700">Employees</label>
                  <input type="number" name="employees" id="employees" className="border-2 w-full p-2 rounded-md" placeholder="Employees" />
                </div>
                <div>
                  <label htmlFor="working" className="mb-2 block text-sm font-medium text-gray-700">Working Time</label>
                  <input type="number" name="working" id="working" className="border-2 w-full p-2 rounded-md text-gray-700" placeholder="Working Time" />
                </div>
                <div>
                  <label htmlFor="secondAdd" className="mb-2 block text-sm font-medium text-gray-700">Address 2</label>
                  <input type="text" name="secondAdd" id="secondAdd" className="border-2 w-full p-2 rounded-md" placeholder="Address 2" />
                </div>
              </div>
            </form>
          </div>


          <div className="mt-5 border-2 rounded-md">
            <div className="bg-gray-700 px-4 py-3 rounded-sm"><p className="text-lg font-semibold text-white">Company Summery</p></div>
            <div className="p-6">
              <p className="text-gray-700">About Company</p>
              <div className="text-gray-700 py-4">
                <select className="p-3 me-2">
                  <option>Normal text</option>
                  <option>Heading 1</option>
                  <option>Heading 2 </option>
                </select>
                <button className="text-bold p-3 mx-2" id="textBold">Bold</button>
                <button className="italic p-3 mx-2">Italic</button>
                <button className="underline p-3 mx-2">Underline</button>
              </div>
              <textarea rows={6} className="w-full border-2 rounded-md" id="summrey"></textarea>
            </div>
          </div>

          <button className="w-full text-white font-semibold bg-green-500 rounded-md p-3 mt-3">SUBMIT</button>
        </div>
      </div>
    </>
  );

};

export default CompnayInfo;
