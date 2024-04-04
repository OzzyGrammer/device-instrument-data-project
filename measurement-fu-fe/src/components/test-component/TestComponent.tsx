"use client";

import MeasurementFuApi from "../http-clients/measurement-fu-core-api/measurement-fu-core-api";

const FetchData = async () => {
  return await MeasurementFuApi.devices.getAllDevices();
};
const Test = () => {
  return <div>Home page</div>;
};

export default Test;
