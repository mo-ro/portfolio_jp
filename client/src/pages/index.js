import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Box from "@components/Box";
import Avatar from "@components/Avatar";

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Box hasBg skew={{ way: "horizontal", amount: "positive" }}>
      fdfdfd
    </Box>
    <Box
      gradient="colors.gradient.blue"
      hasBg
      skew={{ way: "vertical", amount: "positive" }}
    >
      fdfdfd
    </Box>
    <Avatar src="https://pbs.twimg.com/profile_images/1176835197372731392/MhDRmYmU_400x400.jpg"></Avatar>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
