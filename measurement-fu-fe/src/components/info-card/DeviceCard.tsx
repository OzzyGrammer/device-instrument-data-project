import Link from "next/link";

type Props = {
  device: Device;
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

const DeviceCard: React.FC<Props> = ({ device }) => {
  return (
    <Link href={`dashboard/devices/${device.id}`}>
      <div
        className={`overflow-hidden rounded-lg hover:shadow-xl hover:border-solid bg-white p-4 shadow`}
      >
        <dt className="text-sm font-medium text-gray-500">
          Device Id: {device.id}
        </dt>
        <dd
          className={`mt-1 text-lg font-semibold ${getRandomTailwindColor()}`}
        >
          Device: {device.title}
        </dd>
      </div>
    </Link>
  );
};

export default DeviceCard;
