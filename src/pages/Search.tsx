
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // This would typically come from an API
  const sampleCustomers = [
    { id: 1, name: "Jane Cooper", email: "jane@example.com" },
    { id: 2, name: "Cody Fisher", email: "cody@example.com" },
    { id: 3, name: "Robert Johnson", email: "robert@example.com" },
    { id: 4, name: "Leslie Alexander", email: "leslie@example.com" },
    { id: 5, name: "Darlene Robertson", email: "darlene@example.com" },
  ];
  
  const filteredCustomers = sampleCustomers.filter(
    (customer) => 
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card className="p-6 backdrop-blur-sm bg-white/50 shadow-lg border border-indigo-100/20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-2">Search Customers</h1>
          <p className="text-indigo-600">Find customers by name, email, or ID</p>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-indigo-400" />
            <Input
              className="pl-10 bg-white border-indigo-200 focus-visible:ring-indigo-400"
              placeholder="Search for customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-indigo-100 overflow-hidden">
          <Command className="border-0">
            <CommandList>
              {filteredCustomers.length === 0 && (
                <CommandEmpty>No customers found.</CommandEmpty>
              )}
              <CommandGroup>
                {filteredCustomers.map((customer) => (
                  <CommandItem 
                    key={customer.id}
                    className="flex justify-between cursor-pointer hover:bg-indigo-50"
                  >
                    <div>
                      <p className="font-medium text-indigo-900">{customer.name}</p>
                      <p className="text-sm text-indigo-600">{customer.email}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                    >
                      View Details
                    </Button>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </Card>
    </div>
  );
};

export default Search;
