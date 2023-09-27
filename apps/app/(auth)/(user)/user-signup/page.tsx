/* eslint-disable react/no-unescaped-entities */
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import Link from "next/link";

export default function OrganizerLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full md:w-[350px]">
        <CardHeader>
          <div className="text-center">
            <CardTitle>User - Registration</CardTitle>
            <CardDescription className="mt-2"></CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-2" htmlFor="name">
                  Your Name
                </Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-2" htmlFor="email">
                  Your E-mail
                </Label>
                <Input id="email" placeholder="Enter your E-mail" />
              </div>
              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
              <Button variant={"premium"}>Register</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>Already have an account?</p>
          <Link href={"/user-login"}>
            <Button>Login</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
