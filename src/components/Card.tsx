import { useProgress } from "../hooks/useProgress";
import { ProgressBar } from "./ProgressBar";

type CardProps = {
  character: string;
  activeIndex: number;
};

export function Card({ character, activeIndex }: CardProps) {
  const { progress } = useProgress();

  return (
    <>
      <div>
        <p className="text-white font-bold text-center mb-2">
          Pressione as teclas na ordem correta
        </p>
        <div className={`flex gap-3`}>
          {character.split("").map((digit, index) => {
            const isActive = index <= activeIndex - 1;

            return (
              <div
                key={index}
                className={`w-12 h-12 text-center rounded-md font-bold text-xl items-center justify-center flex text-white border-2 border-solid border-gray-300 ${
                  isActive
                    ? "border-2 border-yellow-200 border-solid bg-yellow-500 text-black"
                    : "bg-blue-900"
                }
                  `}
              >
                {digit}
              </div>
            );
          })}
        </div>
        {progress}
        <ProgressBar progress={progress} />
      </div>
    </>
  );
}
