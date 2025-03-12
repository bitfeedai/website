// components/WaitlistDialog.tsx
"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"

interface WaitlistDialogProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
}


export function WaitlistDialog({ 
  trigger, 
  title = "Get notified when we launch🔔", 
  description = "We're launching soon. Be among the first to experience Bitfeed. We'll notify you when we're ready!" 
}: WaitlistDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [source, setSource] = useState("")

  const tempDescription = true;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")

    // Add your form submission logic here
    // Example: await submitToAPI({ email, source })
    console.log({ email, source }) // For testing
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)}>
        {trigger}
      </div>
      <DialogContent className="sm:max-w-[425px] pt-10">

        {
          tempDescription ? (
            <div className="flex flex-col items-center space-y-4 text-center">
              We're launching soon! 🧑‍🚀 Follow us for the latest updates. Things are moving quickly.
              <span className="bg-black p-3 rounded-full">
                <Link href="https://x.com/bitfeedai" className="icon-gradient">
                  <Image src="/social/x_dark.svg" alt="X Logo" width={20} height={20} />
                </Link>
              </span>
            </div>
          ) : (
            <></>
        )}
        {/* <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader> */}

        {/* {submitted ? (
          <div className="space-y-4 py-4 text-center">
            <h3 className="text-lg font-medium text-gray-900">Thank you for joining!</h3>
            <p className="text-gray-500">We'll be in touch soon.</p>
            <Button 
              onClick={() => {
                setSubmitted(false)
                setOpen(false)
                setSource("") // Reset source for next time
              }}
              variant="outline"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="bg-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="source">Where did you find us?</Label>
              <Select
                value={source}
                onValueChange={setSource}
                required
              >
                <SelectTrigger id="source" className="w-full bg-white">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="twitter">X</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="github">GitHub</SelectItem>
                  <SelectItem value="friend">Friend/Colleague</SelectItem>
                  <SelectItem value="search">Search Engine</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end space-x-4 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#d55307] hover:bg-[#a91573] transition-colors duration-200"
              >
                {loading ? "Submitting..." : "Send"}
              </Button>
            </div>
          </form>
        )} */}
      </DialogContent>
    </Dialog>
  )
}