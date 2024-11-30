import { InputComp } from "./input";

export const Signup = () => {
  return (
    <div className>
      <div className=" flex justify-center mt-32">
        <div>
          <div className="bg-[#e7f0fe]  text-xl font-bold h-96 w-80 ">
            <div className="flex justify-center">Signup</div>
            <div className=" pt-8 flex justify-center">
              <InputComp />
            </div>
            <div className=" pt-8 flex justify-center">
              <InputComp holdertext="djkshd" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
