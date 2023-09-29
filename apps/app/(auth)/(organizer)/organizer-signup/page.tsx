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
            <CardTitle>Organizer - Registration</CardTitle>
            <CardDescription className="mt-2"></CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-2" htmlFor="name">
                  Organization Name
                </Label>
                <Input id="name" placeholder="Name of your organization" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-2" htmlFor="email">
                  Organization E-mail
                </Label>
                <Input id="email" placeholder="E-mail of your organization" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-2" htmlFor="framework">
                  Organization Type
                </Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="university/college">
                      University/college
                    </SelectItem>
                    <SelectItem value="private organization">
                      Private Organization
                    </SelectItem>
                    <SelectItem value="government office">
                      Government office
                    </SelectItem>
                  </SelectContent>
                </Select>
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
          <Link href={"/organizer-login"}>
            <Button>Login</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
