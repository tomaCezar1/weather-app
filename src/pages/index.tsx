import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import API from "../components/API";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <API />
  </Layout>
);

export default IndexPage;
