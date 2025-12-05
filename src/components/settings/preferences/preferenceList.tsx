
"use client";

import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PreferenceList = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Card className="max-w-md mx-auto">
        <CardHeader>
            <CardTitle>Display Theme</CardTitle>
            <CardDescription>Choose how you would like to experience the application.</CardDescription>
        </CardHeader>
        <CardContent>
             <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="theme">Theme</Label>
                     <Select value={theme} onValueChange={setTheme}>
                        <SelectTrigger id="theme">
                            <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </CardContent>
    </Card>
  );
};

export default PreferenceList;
