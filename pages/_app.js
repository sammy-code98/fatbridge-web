import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import LayoutTwo from "../components/Layout/LayoutTwo";

const layouts = {
  L1: Layout,
  L2: LayoutTwo,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
