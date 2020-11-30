import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { BasePagesQuery } from "./__generated__/BasePagesQuery";
import SocialLinks from "../utils/sociallinks";
import { Row, Col } from "../components/shortcodes/index"

export default function basePages({ data, location }: PageProps<BasePagesQuery, {}>) {
    return (
        <Layout seo={{
            title: data.mdx.frontmatter.title,
            description: data.mdx.frontmatter.description,
            image: data.mdx.frontmatter.image?.publicURL
        }}
        location={location}>
            <div className="md:px-4 mt-12 py-6 md:w-11/12 mx-auto">
                <div className="uptop" ></div>
                <div className="post-content px-4 lg:px-24 md:px-8 pb-12">
                    <MDXProvider components={{ Row, Col }}>
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </MDXProvider> 
                </div>
            </div>
            <div className="sociallink" >
            <SocialLinks />
            </div>
        </Layout>
    );
} 


export const query = graphql`
    query BasePagesQuery($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                image {
                    publicURL
                }
                description
            }
        }
    }
`;
