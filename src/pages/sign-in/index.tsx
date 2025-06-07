import { GoogleIcon } from "@/components/google-icon";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { googleLogin } from "@/services/modules/google/auth";

export function SignIn() {

  return (
    <div className="flex items-center justify-center h-screen">
      <Card
        className="w-[300px]"
      >
        <CardHeader className="flex flex-col items-center w-full mx-auto">
          <CardTitle>
            <div className="flex flex-col items-center gap-8">
              <Logo size={100} />
              Thayna Manager
            </div>
          </CardTitle>
          <CardDescription>
            sign in with your account
          </CardDescription>
        </CardHeader>
        <CardContent
          className="flex items-center justify-center "
        >
          <Button
            onClick={googleLogin}
            size={"lg"}
          >
            <GoogleIcon />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div >
  );
}
