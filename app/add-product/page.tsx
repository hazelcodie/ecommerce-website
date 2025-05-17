import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata = {
  title: "Add Product",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  
}

export default function AddProductPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-4xl p-4">
        {/* Wrap both columns inside the form */}
        <form action={addProduct} encType="multipart/form-data">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column: Form Fields */}
            <div className="flex-1">
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>
                  Add your new product in one click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Name of the product"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      name="description"
                      placeholder="Description of the product"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="price">Pricing</Label>
                    <Input
                      id="price"
                      name="price"
                      placeholder="Price of the product"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="category">Category</Label>
                    <Select name="category">
                      <SelectTrigger id="category" className="w-full h-10">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="footwear">Footwear</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                        <SelectItem value="toys">Toys</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </div>

            {/* Right Column: File Upload */}
            <div className="flex-1 flex flex-col justify-center items-center border border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="mb-2 text-sm text-gray-500">Upload Product Photo</p>
              <Input id="photo" name="photo" type="file" className="w-full" />
              <p className="mt-2 text-xs text-gray-400">PNG, JPG up to 5MB</p>
            </div>
          </div>

          <CardFooter className="flex justify-between mt-6">
            <Button variant="outline" type="reset">
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
