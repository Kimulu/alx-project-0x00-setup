import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <>
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
      </div>
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">Landing Page Buttons</h1>

        <div className="space-y-2">
          <h2 className="font-semibold">Small Buttons</h2>
          <Button title="Small - Rounded Sm" className="text-sm rounded-sm" />
          <Button title="Small - Rounded Md" className="text-sm rounded-md" />
          <Button
            title="Small - Rounded Full"
            className="text-sm rounded-full"
          />
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">Medium Buttons</h2>
          <Button
            title="Medium - Rounded Sm"
            className="text-base rounded-sm"
          />
          <Button
            title="Medium - Rounded Md"
            className="text-base rounded-md"
          />
          <Button
            title="Medium - Rounded Full"
            className="text-base rounded-full"
          />
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">Large Buttons</h2>
          <Button title="Large - Rounded Sm" className="text-lg rounded-sm" />
          <Button title="Large - Rounded Md" className="text-lg rounded-md" />
          <Button
            title="Large - Rounded Full"
            className="text-lg rounded-full"
          />
        </div>
      </div>
    </>
  );
};
export default Landing;
