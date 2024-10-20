"use client";


import { useState, ChangeEvent } from "react";

import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ColorPickerComponent() {
  // State hook for managing the selected color
  const [color, setColor] = useState<string>("#000000");

  // Handler for updating the color state on input change
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value);
  };

  // Function to copy the color value to the clipboard
  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(color); // Write the color value to the clipboard
    alert("Copy Successfully!"); // Alert the user that the color was copied
  };

  // JSX return statement rendering the color picker UI
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-400 to-pink-400">
      {/* Center the color picker card within the screen */}
      <Card className="w-full max-w-md mx-auto p-8 shadow-lg rounded-lg">
        {/* Header with title and description */}
        <div className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-700 bg-clip-text text-transparent">
            Color Picker
          </CardTitle>
          <CardDescription className="text-gray-500">
            Select a color and copy the hex and RGB values.
          </CardDescription>
        </div>
        {/* Main content area for color display and input */}
        <div className="grid gap-4">
          {/* Display the selected color */}
          <div
            className="w-full h-48 rounded-lg border-4 border-gray-300"
            style={{ backgroundColor: color }}
          />
          {/* Display the color value in hex and RGB format, and button to copy */}
          <div className="grid gap-2 text-center">
            <div className="text-2xl font-semibold text-gray-900">{color}</div>
            <div className="text-gray-500 dark:text-gray-400">
              RGB: {parseInt(color.slice(1, 3), 16)},{" "}
              {parseInt(color.slice(3, 5), 16)},{" "}
              {parseInt(color.slice(5, 7), 16)}
            </div>
            <Button
              onClick={copyToClipboard}
              variant="default"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition-colors duration-300"
            >
              Copy to Clipboard
            </Button>
          </div>
          {/* Input field to pick a color */}
          <Input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-16 p-0 border-0 rounded-md cursor-pointer"
          />
        </div>
      </Card>

      <div className="text-white font-semibold mt-8">
        Created by Ismail Ahmed Shah
      </div>
    </div>
  );
}