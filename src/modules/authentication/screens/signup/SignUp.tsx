import Layout from "../../layout/Layout";
import Form from "../../components/form/Form";
import HyperLink from "../../components/hyperlink/HyperLink";

export default function SignUp() {
  function handleRegistration() {
    //firebase
    console.log("first");
  }
  return (
    <Layout title="Sign Up">
      <Form handleRegistration={handleRegistration} title="Sign Up" />
      <HyperLink />
    </Layout>
  );
}
