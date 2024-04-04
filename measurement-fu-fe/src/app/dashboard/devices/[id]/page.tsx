import MultitypeChart from "@/components/charts/MultitypeChart";
import MultitypeChartDevices from "@/components/devices/charts/MultitypeChartDevices";
import MeasurementFuApi from "@/components/http-clients/measurement-fu-core-api/measurement-fu-core-api";
import DeviceListTable from "@/components/measure/tables/DeviceListTable";
import BasicSection from "@/components/sections/BasicSection";
import Header from "@/components/sections/Header";
import convertAllDeviceRowsToTableRows from "@/components/utils/deviceTableList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Measurements | For Device",
};

function convertDeviceRowsToTableRows(
  rows: DataForDevice[],
): RowDataForDevice[] {
  return rows.map((row) => {
    return {
      id: row.id,
      timestamp: row.timestamp,
      parameter: row.parameter.title,
      value: row.value,
      type: row.type,
    };
  });
}

const DeviceSpecific = async ({ params }: { params: { id: string } }) => {
  try {
    const resp = await MeasurementFuApi.devices.deviceData(params.id);
    const rowdata = convertDeviceRowsToTableRows(resp.data.dataForDevice);
    return (
      <div>
        <Header
          title="Measurements From Sepecific Device"
          description={`A list of all the data from the device with id ${params.id} `}
        />
        <div className="mt-20 w-5/6 mx-auto">
          <BasicSection>
            <div className="flex justify justify-between content-between">
              <h2 className="text-xl font-semibold leading-6 mb-4 text-[#495057]">
                A visual represantation of the first 20 numeric data measured
                over time for device
              </h2>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <MultitypeChartDevices
                  data={resp.data.dataForDevice.slice(0, 20)}
                />
              </div>
            </div>
          </BasicSection>
        </div>
        <div className="mt-20 w-5/6 mx-auto">
          <BasicSection>
            <DeviceListTable data={rowdata} />
          </BasicSection>
        </div>

        <div className="mt-20 w-5/6 mx-auto">
          <BasicSection>
            <div className="flex justify justify-between content-between">
              <h2 className="text-xl font-semibold leading-6 mb-4 text-[#495057]">
                A visual represantation of all the numeric data measured over
                time for device
              </h2>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <MultitypeChartDevices data={resp.data.dataForDevice} />
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

export default DeviceSpecific;
