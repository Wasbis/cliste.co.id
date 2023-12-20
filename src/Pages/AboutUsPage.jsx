import React, { useEffect, useState } from "react";
import AboutusComponents from "../components/AboutusComponents";
import ExperienceComponents from "../components/ExperienceComponents";

// Card Components
import CardComponents from "../components/CardComponents";
import CardComponentsBlack from "../components/CardComponentsBlack";
import CardComponentslg from "../components/CardComponentslg";
import ModalComponents from "../components/ModalComponents";
import CardComponentsmd from "../components/CardComponentsmd";
import CardComponentslgimg from "../components/CardComponentslgimg";

// button
import WhiteButtonComponents from "../components/WhiteButtonComponents";
import BlackButtonComponents from "../components/BlackButtonComponents";

// assetimage

import blackAddButton from "../assets/icon/buttonicon/blackAddButton.png";
import whiteAddButton from "../assets/icon/buttonicon/whiteAddButton.png";
import ourvision from "../assets/Images/AboutUsPage/ourvision.png";
import ourmision from "../assets/Images/AboutUsPage/ourMission.png";
import ourmisionoverlay from "../assets/Images/AboutUsPage/ourmisionoverlay.png";
import software from "../assets/Images/AboutUsPage/softwaredevelopment.png";
import quality from "../assets/Images/AboutUsPage/qualityforyourbusiness.png";
import mre from "../assets/Images/AboutUsPage/maintenancereliability.png";
import cmrp from "../assets/Images/AboutUsPage/cmrp.png";

//client

// team
import imgtester from "../assets/Images/team/imgtester.png";
import TeamComponent from "../components/TeamComponent";

function AboutUsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <ModalComponents
        showModal={showModal}
        setShowModal={setShowModal}
        selectedModal={selectedModal}
      />
      <div className=" space-y-5">
        {/* aboutus */}
        <div id="homeSection" className=" flex justify-center items-center">
          <AboutusComponents />
        </div>
        {/* Software Development*/}
        <div className="bg-[#F5F5F7] ">
          <div className="py-10 my-3 flex justify-center max-md:my-5 ">
            <div className="">
              <CardComponentslgimg class="h-full md:bg-[#F5F5F7] md:rounded-[50px]   ">
                <div className="flex h-full justify-center items-center w-full  max-md:rounded-[30px]   ">
                  <div className="h-full overflow-hidden  ">
                    <img
                      className=" object-cover w-full rounded-l-[50px] max-md:rounded-l-md h-full flex items-center justify-center"
                      src={software}
                      alt=""
                    />
                  </div>
                  <div className="flex px-9 h-full items-center justify-center max-md:bg-software bg-no-repeat max-md:rounded-3xl">
                    <h1 className=" text-[#003478] text-start text-5xl max-md:text-4xl max-md:text-white font-bold">
                      Software Development
                    </h1>
                  </div>
                  <div className="absolute bottom-10 right-10 max-md:bottom-2 max-md:right-2 max-md:hidden ">
                    <BlackButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                      setSelectedModal={setSelectedModal}
                      index={1}
                    />
                  </div>
                  <div className="absolute bottom-10 right-10 max-md:bottom-5 max-md:right-5 md:hidden">
                    <WhiteButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                </div>
              </CardComponentslgimg>
            </div>
          </div>

          <div>
            {/* EPC and Cosultancy */}
            <div className="py-10 max-md:py-1 my-3 flex justify-center gap-6 ">
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 max-md:gap-6">
                <CardComponents class="h-full ">
                  <div className="flex h-full items-center rounded-[30px] ">
                    <div className="flex px-9 h-full flex-col items-center justify-center ">
                      <h1 className=" text-[#003478] text-start text-5xl max-md:text-4xl font-bold">
                        EPC and Consultancy
                      </h1>
                      <div className="absolute bottom-10 right-10 max-md: ">
                        <BlackButtonComponents
                          showModal={showModal}
                          setShowModal={setShowModal}
                          setSelectedModal={setSelectedModal}
                          index={2}
                        />
                      </div>
                    </div>
                  </div>
                </CardComponents>
                <CardComponentsBlack class="h-full bg-black rounded-[30px]">
                  <div className="flex h-full items-center rounded-[30px]">
                    <div className=" flex px-9 h-full flex-col items-center justify-center">
                      <h1 className=" boujee-text text-center text-5xl max-md:text-4xl font-bold   bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
                        Training and Labor Supply
                      </h1>
                      <div className="absolute bottom-10 right-10 ">
                        <WhiteButtonComponents
                          showModal={showModal}
                          setShowModal={setShowModal}
                        />
                      </div>
                    </div>
                  </div>
                </CardComponentsBlack>
              </div>
              {/* Training and Labor*/}
            </div>
          </div>
        </div>
        {/* Our Vision */}
        <div className="gap-6">
          <div className="my-3 flex justify-center max-md:my-5 ">
            <div>
              <CardComponentslgimg class="h-full md:bg-[#F5F5F7] md:rounded-[50px]">
                <div className="flex w-full h-full justify-center items-center max-md:rounded-[30px]  ">
                  <div className="flex h-full w-full items-center justify-center max-md:bg-ourvision max-md:bg-no-repeat max-md:rounded-3xl">
                    <div className="px-9">
                      <h1 className=" py-2 text-[#003478] text-start text-5xl font-bold max-md:text-4xl max-md:text-white">
                        Our Vision
                      </h1>
                      <p className=" text-[#003478] text-start max-md:text-sm max-md:font-light max-md:text-white">
                        To become an internationally recognized firm which
                        provides effective solutions and contribute to
                        reliability engineering development
                      </p>
                    </div>
                  </div>
                  <div className="h-full w-full overflow-hidden max-md:hidden">
                    <img
                      className="h-full w-full object-cover rounded-r-[50px] max-md:rounded-l-md flex items-center justify-center"
                      src={ourvision}
                      alt=""
                    />
                  </div>
                  <div className="absolute bottom-10 left-10 max-md:hidden">
                    <BlackButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                      setSelectedModal={setSelectedModal}
                      index={3}
                    />
                  </div>
                  <div className="absolute bottom-10 right-10 max-md:bottom-5 max-md:right-5 md:hidden">
                    <WhiteButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                </div>
              </CardComponentslgimg>
            </div>
          </div>
          {/* our mission */}
          <div className="my-3 flex justify-center max-md:my-5 ">
            <div>
              <CardComponentslgimg class="h-full md:bg-[#F5F5F7] md:rounded-[50px]">
                <div className="flex w-full h-full justify-center items-center max-md:rounded-[30px]  ">
                  <div className="h-full w-full overflow-hidden max-md:hidden">
                    <img
                      className="h-full w-full object-cover rounded-l-[50px] max-md:rounded-l-md flex items-center justify-center"
                      src={ourmision}
                      alt=""
                    />
                  </div>
                  <div className="flex h-full w-full items-center justify-center max-md:bg-ourmi max-md:bg-no-repeat max-md:rounded-3xl">
                    <div className="px-9">
                      <h1 className=" py-2 text-[#003478] text-start text-5xl font-bold max-md:text-4xl max-md:text-white">
                        Our Mission
                      </h1>
                      <p className=" text-[#003478] text-start max-md:text-sm max-md:font-light max-md:text-white">
                        To become an internationally recognized firm which
                        provides effective solutions and contribute to
                        reliability engineering development
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10 max-md:hidden">
                    <BlackButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                      setSelectedModal={setSelectedModal}
                      index={4}
                    />
                  </div>
                  <div className="absolute bottom-10 right-10 max-md:bottom-5 max-md:right-5 md:hidden">
                    <WhiteButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                </div>
              </CardComponentslgimg>
            </div>
          </div>
        </div>
        {/* Quality For Your Business 1*/}

        <div className="my-3">
          <div className="flex justify-center my-6">
            <CardComponentslgimg class="h-full">
              <div className="flex h-full justify-center items-center md:bg-[#F5F5F7] md:rounded-[50px]  ">
                <div className="flex flex-1  h-full w-full overflow-hidden rounded-l-[50px] bg-[#D9D9D9] max-md:hidden ">
                  <img
                    className=" object-cover p-20 flex items-center justify-center "
                    src={quality}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 h-full items-center justify-center max-md:w-full max-md:h-full max-md:bg-[#D9D9D9] max-md:rounded-[30px]">
                  <div className="flex justify-center items-center">
                    <div className="px-10">
                      <h1 className=" py-2 text-[#003478] text-start text-5xl font-bold max-md:text-4xl">
                        Quality for Your Business
                      </h1>
                      <p className=" text-[#003478] text-start max-md:font-light max-md:text-sm">
                        Deliver the highest quality of consultancy services,
                        products and training to bring your business to
                        Maintenance & Reliability Excellence
                      </p>
                      <div className="absolute bottom-10 right-10 ">
                        <BlackButtonComponents
                          showModal={showModal}
                          setShowModal={setShowModal}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardComponentslgimg>
          </div>

          {/* Quality for your business 2 */}
          <div className="flex justify-center my-6">
            <CardComponentslgimg class="h-full">
              <div className="flex h-full justify-center items-center md:bg-[#F5F5F7] md:rounded-[30px] ">
                <div className="flex flex-1 h-full items-center justify-center max-md:bg-[#D9D9D9] max-md:rounded-[30px] ">
                  <div className="flex justify-center items-center ">
                    <div className="px-10">
                      <h1 className=" py-2 text-[#003478] text-start text-5xl font-bold max-md:text-4xl">
                        Quality for Your Business
                      </h1>
                      <p className=" text-[#003478] text-start max-md:font-light max-md:text-sm">
                        Deliver the highest quality of consultancy services,
                        products and training to bring your business to
                        Maintenance & Reliability Excellence
                      </p>
                      <div className="absolute bottom-10 left-15">
                        <BlackButtonComponents
                          showModal={showModal}
                          setShowModal={setShowModal}
                          setSelectedModal={setSelectedModal}
                          index={5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 h-full w-full overflow-hidden rounded-r-[50px] bg-[#D9D9D9] max-md:hidden ">
                  <img
                    className=" object-cover p-20  rounded-r-[50px] h-full flex items-center justify-center "
                    src={quality}
                    alt=""
                  />
                </div>
              </div>
            </CardComponentslgimg>
          </div>
        </div>
        {/* Quality For Your Business 3*/}
        <div className="my-3">
          <div className="flex justify-center my-6">
            <CardComponentslgimg class="h-full">
              <div className="flex h-full justify-center items-center md:bg-[#F5F5F7] md:rounded-[30px]">
                <div className="flex flex-1 h-full w-full overflow-hidden rounded-l-[30px] bg-[#D9D9D9] max-md:hidden">
                  <img
                    className=" object-cover p-20 flex items-center justify-center "
                    src={quality}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 h-full items-center justify-center max-md:bg-[#D9D9D9] max-md:rounded-[30px]">
                  <div className="flex justify-center items-center">
                    <div className="px-10">
                      <h1 className=" py-2 text-[#003478] text-start text-5xl font-bold max-md:text-4xl">
                        Quality for Your Business
                      </h1>
                      <p className=" text-[#003478] text-start max-md:font-light max-md:text-sm">
                        Deliver the highest quality of consultancy services,
                        products and training to bring your business to
                        Maintenance & Reliability Excellence
                      </p>
                      <div className="absolute bottom-10 right-14 max-md:right-8 ">
                        <BlackButtonComponents
                          showModal={showModal}
                          setShowModal={setShowModal}
                          setSelectedModal={setSelectedModal}
                          index={6}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardComponentslgimg>
          </div>

          {/* Quality fory your business 4 */}
          <div className="flex justify-center my-6">
            <CardComponentslgimg class="h-full">
              <div className="flex h-full justify-center items-center md:bg-[#F5F5F7] md:rounded-[30px]">
                <div className="flex flex-1 h-full items-center justify-center max-md:bg-[#D9D9D9] max-md:rounded-[30px]">
                  <div className="flex justify-center items-center">
                    <div className="px-10">
                      <h1 className=" py-2 text-[#003478] text-start text-[54px] font-bold max-md:text-4xl">
                        Quality for Your Business
                      </h1>
                      <p className=" text-[#003478] text-start max-md:font-light max-md:text-sm">
                        Deliver the highest quality of consultancy services,
                        products and training to bring your business to
                        Maintenance & Reliability Excellence
                      </p>
                      <div className="absolute bottom-10 left-14 max-md:left-8 ">
                        <BlackButtonComponents
                          showModal={showModal}
                          setShowModal={setShowModal}
                          setSelectedModal={setSelectedModal}
                          index={7}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 h-full w-full overflow-hidden rounded-r-[50px] bg-[#D9D9D9] max-md:hidden ">
                  <img
                    className=" object-cover p-20  rounded-r-[30px] h-full flex items-center justify-center "
                    src={quality}
                    alt=""
                  />
                </div>
              </div>
            </CardComponentslgimg>
          </div>
        </div>
      </div>
      {/* Quality Services for your business */}
      <div>
        <div className="max-w-5xl mx-auto py-10 max-md:px-8">
          <h1 className="text-6xl font-bold max-md:text-4xl py-3">
            Quality Services In Our Business
          </h1>
          <p className="text-base py-3 max-md:font-light max-md:text-sm ">
            Our commitment is to deliver the highest quality in our every
            service and product – keeping <br />
            your company’s performance in-line with international standards.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="card quality-card grid grid-cols-2 gap-6 max-md:grid-cols-1">
            <CardComponents class="h-full ">
              <div className="flex h-full items-center rounded-[50px] ">
                <div className="flex px-9 h-full flex-col items-center justify-center  ">
                  <h1 className=" text-[#003478] text-start max-md:text-4xl text-[54px] font-black leading-snug px-7">
                    Maintenance <br /> & Reliability Asset Management
                  </h1>
                  <div className="absolute bottom-10 right-10 max-md: ">
                    <BlackButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                      setSelectedModal={setSelectedModal}
                      index={7}
                    />
                  </div>
                </div>
              </div>
            </CardComponents>
            <CardComponentsBlack class="h-full ">
              <div className="flex h-full items-center rounded-[50px]">
                <div className=" flex px-9 h-full flex-col items-center justify-center">
                  <h1 className=" boujee-text text-center text-[54px] max-md:text-4xl font-bold">
                    Procurement
                  </h1>
                  <div className="absolute bottom-10 right-10 ">
                    <WhiteButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                </div>
              </div>
            </CardComponentsBlack>
            <CardComponentsBlack class="h-full ">
              <div className="flex h-full items-center rounded-[50px]">
                <div className=" flex px-24 h-full flex-col justify-center">
                  <h1 className=" boujee-text text-start text-[54px] max-md:text-4xl font-black fontwe">
                    Man Power Supply
                  </h1>
                  <div className="absolute bottom-10 right-10 ">
                    <WhiteButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                </div>
              </div>
            </CardComponentsBlack>
            <CardComponents class="h-full ">
              <div className="flex h-full items-center rounded-[50px] ">
                <div className="flex px-14  h-full flex-col items-center justify-center ">
                  <h1 className=" text-[#003478] text-start text-[54px] max-md:text-4xl font-bold">
                    Software & Training
                  </h1>
                  <div className="absolute bottom-10 right-10 max-md: ">
                    <BlackButtonComponents
                      showModal={showModal}
                      setShowModal={setShowModal}
                      setSelectedModal={setSelectedModal}
                      index={8}
                    />
                  </div>
                </div>
              </div>
            </CardComponents>
          </div>
        </div>

        {/* MRE */}
        <div className="my-3 flex justify-center max-md:my-5 ">
          <div>
            <CardComponentslgimg class="h-full md:bg-[#F5F5F7] md:rounded-[50px]">
              <div className="flex w-full h-full justify-center items-center max-md:rounded-[30px]  ">
                <div className="flex h-full w-[453px] items-center justify-center max-md:bg-mre max-md:bg-no-repeat max-md:rounded-3xl">
                  <div className="px-14">
                    <h1 className=" py-2 text-[#003478] text-start text-[54px] font-black max-md:text-4xl max-md:text-white ">
                      Maintenance & Reliability Excellence
                    </h1>
                  </div>
                </div>
                <div className="h-full w-[627px] overflow-hidden max-md:hidden">
                  <img
                    className="object-cover h-full w-full rounded-r-[50px] max-md:rounded-l-md flex items-center justify-center"
                    src={mre}
                    alt=""
                  />
                </div>
                <div className="absolute bottom-10 left-10 max-md:hidden">
                  <BlackButtonComponents
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setSelectedModal={setSelectedModal}
                    index={9}
                  />
                </div>
                <div className="absolute bottom-10 right-10 max-md:bottom-5 max-md:right-5 md:hidden">
                  <WhiteButtonComponents
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                </div>
              </div>
            </CardComponentslgimg>
          </div>
        </div>
        <div className="my-3 flex justify-center max-md:my-5 ">
          <div>
            <CardComponentslgimg class="h-full md:bg-[#F5F5F7] md:rounded-[50px]">
              <div className="flex w-full h-full justify-center items-center max-md:rounded-[30px]  ">
                <div className="flex h-full w-[453px] items-center justify-center max-md:bg-cmrp max-md:bg-no-repeat max-md:rounded-3xl ">
                  <div className=" px-14 max-md:pt-14">
                    <h1 className=" text-[#003478] text-start text-5xl font-bold max-md:text-4xl max-md:text-black ">
                      Certified Maintenance & Reliability professional
                    </h1>
                  </div>
                </div>
                <div className=" h-full w-[627px] overflow-hidden max-md:hidden ">
                  <img
                    className=" object-cover h-full w-full rounded-r-[50px] max-md:rounded-l-md "
                    src={mre}
                    alt=""
                  />
                </div>
                <div className="absolute bottom-10 left-10   ">
                  <BlackButtonComponents
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setSelectedModal={setSelectedModal}
                    index={9}
                  />
                </div>
              </div>
            </CardComponentslgimg>
          </div>
        </div>
        {/* Work we have accomplished*/}
        <ExperienceComponents />
        <TeamComponent />
      </div>
    </div>
  );
}

export default AboutUsPage;
