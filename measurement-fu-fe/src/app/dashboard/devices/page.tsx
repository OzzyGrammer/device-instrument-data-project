import MultitypeChart from "@/components/charts/MultitypeChart";
import MultitypeChartDevices from "@/components/devices/charts/MultitypeChartDevices";
import MeasurementFuApi from "@/components/http-clients/measurement-fu-core-api/measurement-fu-core-api";
import AllDeviceListTable from "@/components/measure/tables/AllDeviceListTable";
import BasicSection from "@/components/sections/BasicSection";
import Header from "@/components/sections/Header";
import convertAllDeviceRowsToTableRows from "@/components/utils/deviceTableList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Measurements | All Devices",
};

const Devices = async () => {
  try {
    const resp = await MeasurementFuApi.devices.getAllDeviceData();
    const rowdata = convertAllDeviceRowsToTableRows(resp);
    return (
      <div>
        <Header
          title="Measurements From All Devices"
          description="A list of all the data from all the devices"
        />
        <div className="mt-20 w-5/6 mx-auto">
          <BasicSection>
            <div className="flex justify justify-between content-between">
              <h2 className="text-xl font-semibold leading-6 mb-4 text-[#495057]">
                A visual represantation of the first 20 numeric data measured
                over time for all devices
              </h2>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <MultitypeChart data={resp.slice(0, 20)} />
              </div>
            </div>
          </BasicSection>
        </div>
        <div className="mt-20 w-5/6 mx-auto">
          <BasicSection>
            <AllDeviceListTable data={rowdata} />
          </BasicSection>
        </div>
        <div className="mt-20 w-5/6 mx-auto">
          <BasicSection>
            <div className="flex justify justify-between content-between">
              <h2 className="text-xl font-semibold leading-6 mb-4 text-[#495057]">
                A visual represantation of all the numeric data measured over
                time for all devices
              </h2>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <MultitypeChart data={resp} />
              </div>
            </div>
          </BasicSection>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div>
        <h1>Error occurred while fetching data</h1>
      </div>
    );
  }
};

export default Devices;
