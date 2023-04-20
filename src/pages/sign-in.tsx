import { SignIn } from "@clerk/nextjs";
import Layout from "~/layout";

const SignInPage = () => (
  <Layout>
    <div className="flex flex-row justify-center w-full" style={{marginTop:'200px'}}>
      <SignIn
        appearance={{
          layout: {
            socialButtonsVariant: 'iconButton',
            socialButtonsPlacement: 'bottom'
          }
        }}
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up" />
    </div>
  </Layout>
);

export default SignInPage;