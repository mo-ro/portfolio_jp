/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

import { ThemeProvider } from "styled-components";
import * as theme from "../theme";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  background: ${themeGet("colors.gradient.lightBlue")};
  height: 100vh;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
