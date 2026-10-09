import { GoogleLogin } from "@react-oauth/google";

type GoogleAuthButtonProps = {
  onCredential: (credential: string) => void;
  onError: (message: string) => void;
  text: "signin_with" | "signup_with";
};

const GoogleAuthButton = ({
  onCredential,
  onError,
  text,
}: GoogleAuthButtonProps) => {
  if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
    return (
      <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        Google sign-in is not configured. Set VITE_GOOGLE_CLIENT_ID and restart
        the frontend.
      </p>
    );
  }

  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={(response) => {
          if (!response.credential) {
            onError("Google did not return an ID token. Please try again.");
            return;
          }
          onCredential(response.credential);
        }}
        onError={() =>
          onError("Google sign-in could not be completed. Please try again.")
        }
        text={text}
        theme="outline"
        shape="rectangular"
      />
    </div>
  );
};

export default GoogleAuthButton;
