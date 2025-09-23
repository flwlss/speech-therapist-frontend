export default function Map() {
  return (
    <div className="relative overflow-hidden h-[300px] lg:h-full">
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=82.920430%2C55.030199&z=12"
        className="w-full h-full relative"
      />
    </div>
  );
}
