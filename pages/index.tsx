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
    <div className={`flex flex-col items-center justify-center h-screen gap-4`}>
      {/* Render Sign In action only when the user is signed out */}
      <SignedOut>
        <SignInButton mode="modal" forceRedirectUrl="/">
          <Button variant="secondary">Sign in to test</Button>
        </SignInButton>
      </SignedOut>

      {/* Render Sign Out action only when the user is signed in */}
      <SignedIn>
        <SignOutButton>
          <Button variant="secondary">Sign Out</Button>
        </SignOutButton>
      </SignedIn>

      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={!isSignedIn}>Open user profile dialog</Button>
        </DialogTrigger>
        <DialogContent className="min-w-fit p-0">
          <UserProfile />
        </DialogContent>
      </Dialog>
    </div>
  );
}
