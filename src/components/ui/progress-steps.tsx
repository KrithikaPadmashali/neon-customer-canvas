
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
              currentStep >= index ? "text-indigo-600" : "text-gray-400"
            )}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                currentStep >= index
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-200"
                  : "bg-gray-200 text-gray-400"
              )}
            >
              {index + 1}
            </div>
            <span className="text-sm font-medium">{step}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-2">
        <div className="absolute left-0 top-1/2 h-1 w-full bg-gray-200 -translate-y-1/2 rounded-full" />
        <div
          className="absolute left-0 top-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 -translate-y-1/2 transition-all duration-300 rounded-full"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
