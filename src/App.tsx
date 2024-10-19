import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const App: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [inputData, setInputData] = useState<string>("");

  const handleEncode = async () => {
    // Here you would call your Python script
    // For now, we'll just set a dummy result
    setResult(`Encoded: ${inputData}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>DESFire Card Encoder Test</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter data to encode"
            className="mb-4"
          />
          <Button onClick={handleEncode}>Encode</Button>
          {result && <p className="mt-4">{result}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
