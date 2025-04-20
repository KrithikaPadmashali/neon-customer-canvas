
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserPlus, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent sm:text-6xl">
            Customer Management System
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Streamline your customer onboarding process with our modern and
            efficient management system.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="px-8">
              <Link to="/customers/new">
                <UserPlus className="mr-2 h-5 w-5" />
                Add New Customer
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/customers">
                <Users className="mr-2 h-5 w-5" />
                View All Customers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 backdrop-blur-sm bg-white/50">
              <h3 className="text-lg font-semibold mb-2">Quick Onboarding</h3>
              <p className="text-gray-600">
                Add new customers in minutes with our streamlined process.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-white/50">
              <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
              <p className="text-gray-600">
                Customer data is encrypted and stored securely.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-white/50">
              <h3 className="text-lg font-semibold mb-2">Easy Management</h3>
              <p className="text-gray-600">
                Update and manage customer information effortlessly.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
