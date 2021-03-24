import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/global.scss';
import Home from '../components/Home';
import { ContextProvider } from '../context/Context';

const IndexPage = () => (
    <ContextProvider>
        <Layout>
            <SEO title="Home" />
            <Home />
        </Layout>
    </ContextProvider>
);

export default IndexPage;
