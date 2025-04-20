
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProgressSteps } from "@/components/ui/progress-steps";
import { useState } from "react";

const steps = [
  "Personal Details",
  "Identity Proof",
  "Contact Info",
  "Address",
  "Review",
];

const CustomerForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card className="p-6 backdrop-blur-sm bg-white/50">
        <div className="mb-8">
          <ProgressSteps currentStep={currentStep} steps={steps} />
        </div>

        <form className="space-y-6">
          {currentStep === 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Identity Proof</h2>
              <div>
                <Label htmlFor="idType">ID Type</Label>
                <Input id="idType" placeholder="Enter ID type" />
              </div>
              <div>
                <Label htmlFor="idNumber">ID Number</Label>
                <Input id="idNumber" placeholder="Enter ID number" />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Enter phone number" />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Address</h2>
              <div>
                <Label htmlFor="street">Street</Label>
                <Input id="street" placeholder="Enter street address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter city" />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input id="zipCode" placeholder="Enter ZIP code" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Review Information</h2>
              <p className="text-gray-600">
                Please review all the information before submitting.
              </p>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={previousStep}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              type="button"
              onClick={currentStep === steps.length - 1 ? undefined : nextStep}
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CustomerForm;
