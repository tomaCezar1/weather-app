import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/global.scss';
import Home from '../components/Home';
import { ContextProvider } from '../context/Context';
import { ToastContextProvider } from '../context/toastContext';

const IndexPage = () => (
    <ContextProvider>
        <ToastContextProvider>
            <Layout>
                <SEO title="Home" />
                <Home />
            </Layout>
        </ToastContextProvider>
    </ContextProvider>
);

export default IndexPage;
