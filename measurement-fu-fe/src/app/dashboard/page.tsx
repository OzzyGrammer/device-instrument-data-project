import MultitypeChart from "@/components/charts/MultitypeChart";
import MeasurementFuApi from "@/components/http-clients/measurement-fu-core-api/measurement-fu-core-api";
import DeviceCard from "@/components/info-card/DeviceCard";
import DeviceDataCard from "@/components/info-card/DeviceDataCard";
import BasicSection from "@/components/sections/BasicSection";
import Header from "@/components/sections/Header";
import convertAllDeviceRowsToTableRows from "@/components/utils/deviceTableList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instruments | Dashboard",
};

const Home = async () => {
  const deviceData = await MeasurementFuApi.devices.getLimitedDeviceData(20);
  const devices = await MeasurementFuApi.devices.getAllDevices();
  const data = convertAllDeviceRowsToTableRows(deviceData).slice(0, 20);

  return (
    <div>
      <Header
        title="Measurement Dashboard"
        description="Data Snippets for the data collected"
      />
      <div className="mt-20 w-5/6 mx-auto">
        <BasicSection>
          <div className="flex justify justify-between content-between">
            <h2 className="text-xl font-semibold leading-6 mb-4 text-[#495057]">
              You can select a device for device specific data
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {devices.data.allDevices.map((item) => (
              <div key={item.id}>
                <DeviceCard device={item} />
              </div>
            ))}
          </div>
        </BasicSection>
      </div>

      <div className="mt-20 w-5/6 mx-auto">
        <BasicSection>
          <div className="flex justify justify-between content-between">
            <h2 className="text-xl font-semibold leading-6 mb-4 text-[#495057]">
              A visual represantation of the first 20 numeric data measured by
              the Instruments over time
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <MultitypeChart data={deviceData} />
            </div>
          </div>
        </BasicSection>
      </div>

      <div className="mt-20 w-5/6 mx-auto">
        <BasicSection>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {data.map((item) => (
                <div key={item.id}>
                  <DeviceDataCard
                    deviceData={{
                      id: item.id,
                      parameter: item.parameter,
                      timestamp: item.timestamp,
                      type: item.type,
                      value: item.value,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </BasicSection>
      </div>
    </div>
  );
};

export default Home;
