
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProgressSteps } from "@/components/ui/progress-steps";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { useCustomers } from "@/contexts/CustomerContext";


const steps = [
  "Personal Details",
  "Identity Proof",
  "Contact Info", 
  "Address",
  "Review",
];

const CustomerForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { addCustomer } = useCustomers();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idType: "",
    idNumber: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zipCode: "",
    notes: "",
  });
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    setSubmitError(null); // clear previous error on input change
  };

  const nextStep = () => {
    setSubmitError(null);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    setSubmitError(null);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Simple validation for demo (required fields for each step)
  const validateStep = () => {
    if (currentStep === 0) {
      return formData.firstName.trim() && formData.lastName.trim();
    }
    if (currentStep === 1) {
      return formData.idType.trim() && formData.idNumber.trim();
    }
    if (currentStep === 2) {
      return formData.email.trim() && formData.phone.trim();
    }
    if (currentStep === 3) {
      return formData.street.trim() && formData.city.trim() && formData.zipCode.trim();
    }
    return true;
  };

  const handleSubmit = () => {
    // check required fields
    let missingFields = [];
    if (!formData.firstName.trim()) missingFields.push("First Name");
    if (!formData.lastName.trim()) missingFields.push("Last Name");
    if (!formData.idType.trim()) missingFields.push("ID Type");
    if (!formData.idNumber.trim()) missingFields.push("ID Number");
    if (!formData.email.trim()) missingFields.push("Email");
    if (!formData.phone.trim()) missingFields.push("Phone");
    if (!formData.street.trim()) missingFields.push("Street");
    if (!formData.city.trim()) missingFields.push("City");
    if (!formData.zipCode.trim()) missingFields.push("ZIP Code");
    if (missingFields.length > 0) {
      const errorMsg = `Please fill in: ${missingFields.join(", ")}`;
      setSubmitError(errorMsg);

      toast.error(errorMsg, {
        style: {
          background: "#FFDEE2",
          color: "#ea384c",
          border: "1px solid #ea384c",
        },
      });
      return;
    }

    try {
      addCustomer(formData);
      toast.success("Customer added successfully!", {
        style: {
          background: "#F2FCE2",
          color: "#1A1F2C",
          border: "1px solid #8B5CF6",
        },
      });
      setTimeout(() => {
        navigate("/customers");
      }, 1200);
    } catch (err) {
      setSubmitError("Unable to save customer. Please try again.");
      toast.error("Unable to save customer. Please try again.", {
        style: {
          background: "#FFDEE2",
          color: "#ea384c",
          border: "1px solid #ea384c",
        },
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card className="p-6 backdrop-blur-sm bg-white/50 shadow-lg border border-indigo-100/20">
        <div className="mb-8">
          <ProgressSteps currentStep={currentStep} steps={steps} />
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {currentStep === 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-900">Personal Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-indigo-800">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="border-indigo-200 focus:border-indigo-400" 
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-indigo-800">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="border-indigo-200 focus:border-indigo-400"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-900">Identity Proof</h2>
              <div>
                <Label htmlFor="idType" className="text-indigo-800">ID Type</Label>
                <Input 
                  id="idType" 
                  placeholder="Enter ID type"
                  value={formData.idType}
                  onChange={(e) => handleInputChange("idType", e.target.value)}
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
              <div>
                <Label htmlFor="idNumber" className="text-indigo-800">ID Number</Label>
                <Input 
                  id="idNumber" 
                  placeholder="Enter ID number"
                  value={formData.idNumber}
                  onChange={(e) => handleInputChange("idNumber", e.target.value)}
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-900">Contact Information</h2>
              <div>
                <Label htmlFor="email" className="text-indigo-800">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-indigo-800">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-900">Address</h2>
              <div>
                <Label htmlFor="street" className="text-indigo-800">Street</Label>
                <Input 
                  id="street" 
                  placeholder="Enter street address"
                  value={formData.street}
                  onChange={(e) => handleInputChange("street", e.target.value)}
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="text-indigo-800">City</Label>
                  <Input 
                    id="city" 
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="border-indigo-200 focus:border-indigo-400"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode" className="text-indigo-800">ZIP Code</Label>
                  <Input 
                    id="zipCode" 
                    placeholder="Enter ZIP code"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    className="border-indigo-200 focus:border-indigo-400"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-900">Review Information</h2>
              <p className="text-gray-600">
                Please review all the information before submitting.
              </p>
              <div className="bg-indigo-50/50 p-4 rounded-lg border border-indigo-100">
                <h3 className="font-medium text-indigo-800 mb-2">Personal Details</h3>
                <p>Name: {formData.firstName} {formData.lastName}</p>
                <h3 className="font-medium text-indigo-800 mt-3 mb-2">Identity</h3>
                <p>ID Type: {formData.idType}</p>
                <p>ID Number: {formData.idNumber}</p>
                <h3 className="font-medium text-indigo-800 mt-3 mb-2">Contact</h3>
                <p>Email: {formData.email}</p>
                <p>Phone: {formData.phone}</p>
                <h3 className="font-medium text-indigo-800 mt-3 mb-2">Address</h3>
                <p>Street: {formData.street}</p>
                <p>City: {formData.city}</p>
                <p>ZIP Code: {formData.zipCode}</p>
              </div>
              <div>
                <Label htmlFor="notes" className="text-indigo-800">Additional Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Any additional notes about this customer..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
            </div>
          )}

          {/* Error message area */}
          {submitError && (
            <div className="rounded-md border border-[#ea384c] bg-[#FFDEE2] text-[#ea384c] px-4 py-3 flex items-center gap-2 mb-2 text-sm font-semibold shadow">
              <svg width={20} className="stroke-[#ea384c]" height={20} fill="none" viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} strokeWidth={2}/><path strokeWidth={2} d="M12 8v4m0 4h.01"/></svg>
              {submitError}
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={previousStep}
              disabled={currentStep === 0}
              className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
            >
              Previous
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button
                type="button"
                onClick={handleSubmit}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
              >
                Submit
              </Button>
            ) : (
              <Button
                type="button"
                disabled={!validateStep()}
                onClick={nextStep}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
              >
                Next
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CustomerForm;

