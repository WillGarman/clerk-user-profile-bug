import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@clerk/clerk-react";

export default function Home() {
  return (
    <div className={`flex flex-col items-center justify-center h-screen`}>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="min-w-fit p-0">
          <UserProfile />
        </DialogContent>
      </Dialog>
    </div>
  );
}
