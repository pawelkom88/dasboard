import HyperLink from "../../components/hyperlink/HyperLink";
import Form from "../../components/form/Form";
import Layout from "../../layout/Layout";

export default function Login() {
  // test this function !!
  function handleRegistration() {
    console.log("asd");
  }

  return (
    <Layout title="Login">
      <Form handleRegistration={handleRegistration} title="Login"/>
      <HyperLink action="Sign up" description="Do not have an account?" link="register" />
    </Layout>
  );
}
