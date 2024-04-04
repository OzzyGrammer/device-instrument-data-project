import Link from "next/link";

type Props = {
  deviceData: AllDeviceTableRow;
};

function getRandomTailwindColor() {
  const tailwindColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-emerald-500",
  ];
  const randomIndex = Math.floor(Math.random() * tailwindColors.length);
  return tailwindColors[randomIndex];
}

const DeviceDataCard: React.FC<Props> = ({ deviceData }) => {
  return (
    <Link href={`dashboard/device-data/${deviceData.id}`}>
      <div
        className={`overflow-hidden rounded-lg bg-white hover:shadow-xl hover:border-solid p-4 shadow`}
      >
        <dt className="text-sm font-medium text-gray-500">
          Id: {deviceData.id}
        </dt>
        <dd
          className={`mt-1 text-lg font-semibold ${getRandomTailwindColor()}`}
        >
          Parameter: {deviceData.parameter}
        </dd>
        <dd
          className={`mt-1 text-lg font-semibold ${getRandomTailwindColor()}`}
        >
          Type: {deviceData.type}
        </dd>
        <dd
          className={`mt-1 text-lg font-semibold ${getRandomTailwindColor()}`}
        >
          Value: {deviceData.value}
        </dd>
        <dd
          className={`mt-1 text-lg font-semibold ${getRandomTailwindColor()}`}
        >
          TimeStamp: {deviceData.timestamp}
        </dd>
      </div>
    </Link>
  );
};

export default DeviceDataCard;
