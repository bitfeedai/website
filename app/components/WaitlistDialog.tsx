// components/WaitlistDialog.tsx
"use client"

import { useState, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
import { BuilderFeatureDialog } from "./BuilderFeatureDialog"

interface WaitlistDialogProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  formType?: "notified" | "earlyAccess";
}

export function WaitlistDialog({ 
  trigger,
  formType = "notified",
}: WaitlistDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [source, setSource] = useState("")
  const [message, setMessage] = useState("")
  const [isError, setIsError] = useState(false)
  const [apply, setApply] = useState(formType === "earlyAccess");
  const [role, setRole] = useState("");
  const [socialUrl, setSocialUrl] = useState("");

  // Reset form when dialog opens or formType changes
  useEffect(() => {
    if (open) {
      setApply(formType === "earlyAccess");
      setSource("");
      setRole("");
      setSocialUrl("");
      setMessage("");
      setIsError(false);
      setSubmitted(false);
    }
  }, [open, formType]);
  
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage("")
    setIsError(false)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string

    // Validate X profile URL if early access form
    if (formType === "earlyAccess" && socialUrl) {
      const xUrlPattern = /^(https?:\/\/)?(www\.)?x\.com\/[a-zA-Z0-9_]+$/i;
      if (!xUrlPattern.test(socialUrl)) {
        setIsError(true);
        setMessage("Please enter a valid X profile URL (e.g., x.com/yourhandle, https://x.com/yourhandle, www.x.com/yourhandle)");
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email, 
          formType,
          apply,
          source: apply ? source : "", 
          role: apply ? role : "", 
          socialUrl: apply ? socialUrl : "" 
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        setIsError(true)
        setMessage(data.error || "An error occurred. Please try again.");
      } else {
        setMessage(data.message+'🎉' || "Subscribed successfully!🎉");
        setSubmitted(true)
      }
    } catch (error) {
      setIsError(true)
      setMessage("An unexpected error occurred. Please try again.");
      console.error("Subscription error:", error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] pt-10 bg-gradient-to-br from-[#050206] to-[#080309] border-purple-900/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-white">
            {formType === "earlyAccess" ? "Get Early Access 🚀" : "Get notified when we launch🛎️"}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="space-y-4 py-4 text-center">
            <p className="text-gray-300">{message}</p>
            <h3 className="text-lg font-medium text-white">We'll be in touch soon!</h3>
            <Button 
              onClick={() => {
                setSubmitted(false)
                setOpen(false)
                setSource("")
                setMessage("")
                setRole("")
                setSocialUrl("")
                setApply(formType === "earlyAccess")
              }}
              variant="outline"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="bg-[#050206] text-white border-purple-900/10"
                required
              />
            </div>

            {/* For early access form, show questions by default */}
            {/* Checkbox for notification preference - commented out for now */}
            {/* <div className="flex items-center space-x-2">
              <Checkbox 
                id="apply" 
                checked={apply} 
                onCheckedChange={(checked) => setApply(checked === true)} 
              />
              <Label htmlFor="apply" className="flex items-center text-white">
                <div className="flex flex-wrap justify-start">
                  I want early access to Bitfeed's &nbsp; <BuilderFeatureDialog />
                </div>
              </Label>
            </div> */}

            {/* Additional Fields - shown by default for early access, hidden for notified */}
            {formType === "earlyAccess" && (
              <div className="space-y-4">
                {/* How did you find us? */}
                <div className="space-y-2">
                  <Label htmlFor="source" className="text-white">How did you find us?</Label>
                  <Input
                    id="source"
                    name="source"
                    type="text"
                    placeholder="X, Google, friend, etc."
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                  />
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-white">Your current role</Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-[#050206] to-[#080309] border-purple-900/10 text-white">
                      <SelectItem value="business_owner">Business Owner</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                      <SelectItem value="employed">Employed</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Social Media / Website - X only */}
                <div className="space-y-2">
                  <Label htmlFor="social" className="text-white">Link to your X profile</Label>
                  <Input
                    id="social"
                    name="social"
                    type="text"
                    placeholder="x.com/yourhandle"
                    value={socialUrl}
                    onChange={(e) => setSocialUrl(e.target.value)}
                    pattern="^(https?://)?(www\.)?x\.com/[a-zA-Z0-9_]+$"
                  />
                  {socialUrl && !/^(https?:\/\/)?(www\.)?x\.com\/[a-zA-Z0-9_]+$/i.test(socialUrl) && (
                    <p className="text-sm text-red-400">Please enter a valid X profile URL (e.g., x.com/yourhandle, https://x.com/yourhandle, www.x.com/yourhandle)</p>
                  )}
                </div>
              </div>
            )}

            {/* Error or Success Message */}
            {message && (
              <div className={`text-sm ${isError ? 'text-red-500' : 'text-green-500'} text-center`}>
                {message}
              </div>
            )}
          
            {/* Buttons */}
            <div className="flex justify-end space-x-4 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setOpen(false)
                  setSource("")
                  setRole("")
                  setSocialUrl("")
                  setApply(formType === "earlyAccess")
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                variant={"default"}
              >
                {loading ? "Submitting..." : "Send"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
