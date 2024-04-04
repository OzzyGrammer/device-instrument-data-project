import ENVIRONMENT_VARIABLES from "@/components/utils/constants/environment-variables";

const getAllDevices = async (): Promise<AllDevicesResponse> => {
  const url = `${ENVIRONMENT_VARIABLES.CORE_API_URL}/graphql/`;
  const headers = {
    "Content-Type": "application/json",
  };
  const query = `
    {
      allDevices { 
        id,
        title
      }
    }
    `;

  const resp = await fetch(url, {
    method: "POST",
    headers: headers,
    cache: "no-store",
    body: JSON.stringify({
      query: query,
    }),
  });
  const data = (await resp.json()) as AllDevicesResponse;
  return data;
};

const getAllDeviceData = async (): Promise<AllDeviceRow[]> => {
  const query = `
    {
      allDevicedata{
        id,
        timestamp
        parameter{
          title,
          devicedataSet{
            value,
            type
          }
        }
      }
    }
    `;
  const url = `${ENVIRONMENT_VARIABLES.CORE_API_URL}/graphql/`;
  const headers = {
    "Content-Type": "application/json",
  };

  const resp = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: query }),
    cache: "no-store",
  });
  const data = (await resp.json()) as AllDeviceDataResponse;
  return data.data.allDevicedata;
};

const getLimitedDeviceData = async (limit: number): Promise<AllDeviceRow[]> => {
  const query = `
    {
      limitedDevicedata(limit: ${limit}){
        id,
        timestamp
        parameter{
          title,
          devicedataSet{
            value,
            type
          }
        }
      }
    }
    `;
  const url = `${ENVIRONMENT_VARIABLES.CORE_API_URL}/graphql/`;
  const headers = {
    "Content-Type": "application/json",
  };

  const resp = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: query }),
    cache: "no-store",
  });
  const data = (await resp.json()) as LimitedDeviceDataResponse;
  return data.data.limitedDevicedata;
};

const deviceData = async (
  deviceId: string,
): Promise<DeviceDataListResponse> => {
  const url = `${ENVIRONMENT_VARIABLES.CORE_API_URL}/graphql/`;
  const headers = {
    "Content-Type": "application/json",
  };
  const query = `
      {
        dataForDevice(deviceId: ${deviceId}) {
          id
          parameter {
            id
            title
          }
          timestamp
          value
          type
        }
      }
      `;
  const resp = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: query }),
    cache: "no-store",
  });
  const data = (await resp.json()) as DeviceDataListResponse;
  return data;
};

const deviceDataDetail = async (
  id: string,
): Promise<DeviceDataDetailResponse> => {
  const url = `${ENVIRONMENT_VARIABLES.CORE_API_URL}/graphql/`;
  const headers = {
    "Content-Type": "application/json",
  };
  const query = `
  {
    deviceDataDetail(deviceDataId: ${id}) {
      id,
      parameter {device{
        id,
        title
      }},
      timestamp,
      value,
      type
    }
  }
      `;
  const resp = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: query }),
    cache: "no-store",
  });
  const data = (await resp.json()) as DeviceDataDetailResponse;
  return data;
};

const deviceApi = {
  getAllDevices,
  getAllDeviceData,
  deviceData,
  deviceDataDetail,
  getLimitedDeviceData,
};

export default deviceApi;
