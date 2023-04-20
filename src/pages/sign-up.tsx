import { SignUp } from "@clerk/nextjs";
import Layout from "~/layout/Layout";



const SignUpPage = () => (
  <Layout>
    <div className="flex flex-row justify-center w-full" style={{ marginTop: '200px' }}>
      <SignUp appearance={{
        layout: {
          socialButtonsVariant: 'iconButton',
          socialButtonsPlacement: 'bottom'
        }
      }} path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  </Layout>
);

export default SignUpPage;