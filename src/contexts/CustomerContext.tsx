
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  idType: string;
  idNumber: string;
  street: string;
  city: string;
  zipCode: string;
  notes: string;
  status: string;
}

interface CustomerContextType {
  customers: Customer[];
  addCustomer: (customer: Omit<Customer, 'id' | 'status'>) => void;
}

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export const useCustomers = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomers must be used within a CustomerProvider');
  }
  return context;
};

export const CustomerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initial demo data
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "+1 234 567 890",
      idType: "Passport",
      idNumber: "AB123456",
      street: "123 Main St",
      city: "New York",
      zipCode: "10001",
      notes: "",
      status: "Active",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phone: "+1 234 567 891",
      idType: "Driver's License",
      idNumber: "DL987654",
      street: "456 Oak Ave",
      city: "Los Angeles",
      zipCode: "90001",
      notes: "",
      status: "Pending",
    },
  ]);

  const addCustomer = (newCustomerData: Omit<Customer, 'id' | 'status'>) => {
    const newCustomer = {
      ...newCustomerData,
      id: customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1,
      status: "Pending"
    };
    
    setCustomers(prevCustomers => [...prevCustomers, newCustomer]);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
