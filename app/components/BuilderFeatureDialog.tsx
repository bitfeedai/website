import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BuilderFeatureDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="text-gradient-mixed font-bold hover:text-orange-500 cursor-pointer">
          wizard feature
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[80vh] overflow-auto p-6">
        <DialogHeader>
          <DialogTitle>Bitfeed's Wizard 🪄</DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-4 text-sm leading-relaxed">
          <p>
            <strong>You're Invited to Experience the Future of AI-Powered Dashboards and Feeds with Bitfeed</strong>
          </p>
          <p>
            The Bitfeed wizard will soon launch in closed alpha.
          </p>
          <p>
            With Bitfeed's wizard, you can create flexible and dynamic widgets called <strong>Bits</strong>. 
            These Bits can than be added and combined to create custom dashboards and informative feeds tailored to your unique needs, 
            putting the full power of AI literally at your fingertips.
            Whether for private use or shared with the community, hosted locally or using Bitfeed cloud, everything is possible. 
          </p>
            <p><strong>By applying for early access to Bitfeed's wizard, you will be the first to:</strong></p>
          <ul className="list-none list-inside space-y-1">
            <li>✅ Create AI-powered Bits (paid for by us)</li>
            <li>✅ Have your work featured upon launch</li>
            <li>✅ Have early access to Discord</li>
          </ul>
          <p className="font-bold mt-4">Applying is simple</p>
          <ul className="list-none list-inside space-y-1">
            <li>✔️ Mark the checkbox</li>
            <li>✔️ Complete and submit the form</li>
          </ul>
          <p>
            After you have applied, if selected, you'll receive an email with further instructions.
          </p>
          <p><strong>Important
          </strong></p>
          <p>Applying is not a guarantee you will be selected. If you haven't been selected upon launch and still want early access, send an email or direct message.</p>
          <p>The Bitfeed wizard launches in closed alpha for a reason, don't expect it to be:</p>
          <ul className="list-none list-inside space-y-1">
            <li>❌ Bug proof</li>
            <li>❌ Feature rich</li>
          </ul>
          <p className="font-bold mt-4">
            Final note 
          </p>
          <p className="">Thanks for considering supporting us during our launch
            If you have any questions or experience issues when applying, feel free to email us at <strong>hello@bitfeed.ai</strong> or reach out via X (<strong>@bitfeedai</strong>).
          </p>
          <p className="font-bold mt-4">
            Hope to see you soon!🧙‍♂️
          </p>
          <p>
          </p>
        </DialogDescription>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <div className="flex justify-start space-x-4 pt-2">
                <Button type="button" variant="default">
                Back
                </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
