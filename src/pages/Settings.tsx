
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { toast } from "sonner";

const Settings = () => {
  const [settings, setSettings] = useState({
    companyName: "Acme Corporation",
    email: "admin@acmecorp.com",
    darkMode: false,
    notifications: true,
    twoFactorAuth: false,
    autoBackup: true
  });

  const handleChange = (field: string, value: any) => {
    setSettings({
      ...settings,
      [field]: value
    });
  };

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card className="p-6 backdrop-blur-sm bg-white/50 shadow-lg border border-indigo-100/20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-2">Settings</h1>
          <p className="text-indigo-600">Manage your application preferences</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">Account Settings</h2>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="companyName" className="text-indigo-800">Company Name</Label>
                <Input 
                  id="companyName" 
                  value={settings.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-indigo-800">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={settings.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
            </div>
          </div>
          
          <Separator className="my-6 bg-indigo-100" />
          
          <div>
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">Appearance & Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="darkMode" className="text-indigo-800">Dark Mode</Label>
                  <p className="text-sm text-indigo-600">Enable dark theme for the application</p>
                </div>
                <Switch 
                  id="darkMode" 
                  checked={settings.darkMode}
                  onCheckedChange={(checked) => handleChange("darkMode", checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications" className="text-indigo-800">Notifications</Label>
                  <p className="text-sm text-indigo-600">Receive email notifications</p>
                </div>
                <Switch 
                  id="notifications" 
                  checked={settings.notifications}
                  onCheckedChange={(checked) => handleChange("notifications", checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactorAuth" className="text-indigo-800">Two-Factor Authentication</Label>
                  <p className="text-sm text-indigo-600">Enable additional security layer</p>
                </div>
                <Switch 
                  id="twoFactorAuth" 
                  checked={settings.twoFactorAuth}
                  onCheckedChange={(checked) => handleChange("twoFactorAuth", checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="autoBackup" className="text-indigo-800">Automatic Backup</Label>
                  <p className="text-sm text-indigo-600">Automatically backup your data</p>
                </div>
                <Switch 
                  id="autoBackup" 
                  checked={settings.autoBackup}
                  onCheckedChange={(checked) => handleChange("autoBackup", checked)}
                />
              </div>
            </div>
          </div>
          
          <div className="pt-6 flex justify-end">
            <Button 
              onClick={handleSave}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
