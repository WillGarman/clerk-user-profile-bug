import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserProfile,
  useAuth,
} from "@clerk/clerk-react";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <div
      className={`flex items-center justify-between max-w-5xl mx-auto h-screen gap-12`}
    >
      {/* Render Sign In action only when the user is signed out */}
      <div className="flex flex-col gap-2 w-5/6">
        <SignedOut>
          <SignInButton mode="modal" forceRedirectUrl="/">
            <Button variant="secondary" className="w-5/6">
              Sign in to test
            </Button>
          </SignInButton>
        </SignedOut>
        {/* Render Sign Out action only when the user is signed in */}
        <SignedIn>
          <SignOutButton>
            <Button variant="secondary" className="w-5/6">
              Sign Out
            </Button>
          </SignOutButton>
        </SignedIn>
        <Dialog>
          <DialogTrigger asChild>
            <Button disabled={!isSignedIn} className="w-5/6">
              Open user profile dialog
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-fit p-0">
            <UserProfile />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-2 w-full">
        Demo of bug:
        <video
          src="https://github.com/user-attachments/assets/b7f626ec-aebc-4748-b3fa-227132c30017"
          autoPlay
          controls
          className="rounded-md max-h-[500px]"
        />
      </div>
    </div>
  );
}
