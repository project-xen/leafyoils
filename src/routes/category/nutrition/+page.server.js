import { GraphQLClient, gql } from "graphql-request";

export const load = async () => {
  const endpoint = import.meta.env.VITE_HYGRAPH_API;
  const hygraph = new GraphQLClient(endpoint, {
    headers: {},
  });

  const query = gql`
    query getPosts {
      posts(where: { category: Nutrition }, orderBy: lastUpdated_DESC) {
        title
        slug
        lastUpdated
        category
      }
    }
  `;

  const posts = await hygraph.request(query);

  return {
    props: { posts },
  };
};
