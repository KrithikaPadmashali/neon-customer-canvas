
import { cn } from "@/lib/utils";

interface ProgressStepsProps {
  currentStep: number;
  steps: string[];
}

export function ProgressSteps({ currentStep, steps }: ProgressStepsProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div
            key={step}
            className={cn(
              "flex flex-col items-center",
              currentStep >= index ? "text-blue-600" : "text-gray-400"
            )}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center mb-2",
                currentStep >= index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-400"
              )}
            >
              {index + 1}
            </div>
            <span className="text-sm">{step}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-2">
        <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-200 -translate-y-1/2" />
        <div
          className="absolute left-0 top-1/2 h-0.5 bg-blue-600 -translate-y-1/2 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
