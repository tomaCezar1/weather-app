import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/global.scss";
import Home from "../components/Home";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
);

export default IndexPage;
