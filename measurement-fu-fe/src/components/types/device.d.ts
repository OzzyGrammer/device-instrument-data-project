type Device = {
  id: string;
  title: string;
};
type AllDevices = {
  allDevices: Device[];
};

type AllDevicesResponse = {
  data: AllDevices;
};

type NumericValueDeviceDataSet = {
  value: number;
  type: string;
};

type Parameter = {
  id: int;
  title: string;
};

type AllDeviceDataSet = {
  value: string;
  type: string;
};

type AllDeviceParameter = {
  title: string;
  devicedataSet: AllDeviceDataSet[];
};

type AllDeviceRow = {
  id: string;
  timestamp: string;
  parameter: AllDeviceParameter;
};

type AllDeviceTableRow = {
  id: string;
  timestamp: string;
  parameter: string;
  value: string;
  type: string;
};
type AllDeviceData = {
  allDevicedata: AllDeviceRow[];
};
type LimitedDeviceData = {
  limitedDevicedata: AllDeviceRow[];
};
type AllDeviceDataResponse = {
  data: AllDeviceData;
};

type LimitedDeviceDataResponse = {
  data: LimitedDeviceData;
};

type DataForDevice = {
  id: string;
  parameter: Parameter;
  timestamp: string;
  value: string;
  type: string;
};

type RowDataForDevice = {
  id: string;
  parameter: string;
  timestamp: string;
  value: string;
  type: string;
};

type DeviceData = {
  dataForDevice: DataForDevice[];
};

type DeviceDataListResponse = {
  data: DeviceData;
};

type NumericValueDeviceData = {
  id: int;
  timestamp: string;
  parameter: Parameter;
  devicedataSet: NumericValueDeviceDataSet;
};

type DetailDevice = {
  device: Device;
};

type DetailedDataForDevice = {
  id: string;
  parameter: DetailDevice;
  timestamp: string;
  value: string;
  type: string;
};

type DeviceDataDetail = {
  deviceDataDetail: DetailedDataForDevice[];
};

type DeviceDataDetailResponse = {
  data: DeviceDataDetail;
};

type DeviceDataResponse = {
  data: TextValueDeviceData[];
};

type MenuItem = {
  text: string;
  href: string;
};
