import MeasurementFuApi from "@/components/http-clients/measurement-fu-core-api/measurement-fu-core-api";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Measurements | Device Data",
};

const DeviceDetail = async ({ params }: { params: { id: string } }) => {
  try {
    const resp = await MeasurementFuApi.devices.deviceDataDetail(params.id);
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Detailed Information about Data
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Device : {resp.data.deviceDataDetail[0].parameter.device.title}
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-500">Value Type</dt>
                  <dd className="flex items-start gap-x-2">
                    <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset">
                      {resp.data.deviceDataDetail[0].type}
                    </div>
                  </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-500">Value</dt>
                  <dd className="flex items-start gap-x-2">
                    <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset">
                      {resp.data.deviceDataDetail[0].value}
                    </div>
                  </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-500">Timestamp</dt>
                  <dd className="flex items-start gap-x-2">
                    <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset">
                      {resp.data.deviceDataDetail[0].timestamp}
                    </div>
                  </dd>
                </div>
              </dl>
            </dl>
          </div>
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

export default DeviceDetail;
