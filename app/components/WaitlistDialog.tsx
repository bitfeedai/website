// components/WaitlistDialog.tsx
"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"


interface WaitlistDialogProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
}

export function WaitlistDialog({ 
  trigger, 
  title = "Get notified when we launch🚀", 
  description = "We're launching soon. Be among the first to experience Bitfeed. We'll notify you when we're ready!" 
}: WaitlistDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [source, setSource] = useState("")
  const [message, setMessage] = useState("")
  const [isError, setIsError] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage("")
    setIsError(false)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        // Handle error responses
        setIsError(true)
        if (res.status === 400) {
          setMessage(data.error || "Failed to subscribe. You may already be subscribed.");
        } else {
          setMessage(data.error || "An error occurred. Please try again later.");
        }
      } else {
        // Success response
        setMessage(data.message || "Successfully subscribed!");
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
      <div onClick={() => setOpen(true)}>
        {trigger}
      </div>
      <DialogContent className="sm:max-w-[425px] pt-10">

        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="space-y-4 py-4 text-center">
            <h3 className="text-lg font-medium text-gray-900">Thank you for joining!</h3>
            <p className="text-gray-500">{message || "We'll be in touch soon."}</p>
            <Button 
              onClick={() => {
                setSubmitted(false)
                setOpen(false)
                setSource("") // Reset source for next time
                setMessage("")
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
            
            {message && (
              <div className={`text-sm ${isError ? 'text-red-500' : 'text-green-500'} text-center`}>
                {message}
              </div>
            )}
          
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
        )}
      </DialogContent>
    </Dialog>
  )
}