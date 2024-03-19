import { auth } from "@/auth/auth";
import { SignInButton } from "./SignInButton";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LoggedInDropdown } from "./LoggedInDropdown";

export const LoggedInButton = async () => {
  const session = await auth();

  if (!session) {
    return <SignInButton />;
  }

  return (
    <LoggedInDropdown>
      <Button className="outline" size="sm">
        <Avatar>
          <AvatarFallback>
            {session.user?.name?.[0]}
            {session.user?.image && (
              <AvatarImage
                src={session.user?.image}
                alt={`${session.user.name ?? "-"}'s profile picture`}
              />
            )}
          </AvatarFallback>
        </Avatar>
      </Button>
    </LoggedInDropdown>
  );
};
