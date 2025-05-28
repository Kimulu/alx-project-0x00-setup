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
          <Button title="Small - Rounded Sm" styles="text-sm rounded-sm" />
          <Button title="Small - Rounded Md" styles="text-sm rounded-md" />
          <Button title="Small - Rounded Full" styles="text-sm rounded-full" />
          <Button title="Small - Rounded Lg" styles="text-sm rounded-lg" />
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">Medium Buttons</h2>
          <Button title="Medium - Rounded Sm" styles="text-base rounded-sm" />
          <Button
            title="Medium - Rounded Full"
            styles="text-base rounded-full"
          />
          <Button title="Medium - Rounded Md" styles="text-base rounded-md" />
          <Button title="Medium - Rounded Lg" styles="text-base rounded-lg" />
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">Large Buttons</h2>
          <Button title="Large - Rounded Sm" styles="text-lg rounded-sm" />
          <Button title="Large - Rounded Md" styles="text-lg rounded-md" />
          <Button title="Large - Rounded Lg" styles="text-lg rounded-lg" />
          <Button title="Large - Rounded Full" styles="text-lg rounded-full" />
        </div>
      </div>
    </>
  );
};
export default Landing;
