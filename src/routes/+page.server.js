import { GraphQLClient, gql } from "graphql-request";

export const load = async () => {
  const endpoint = import.meta.env.VITE_HYGRAPH_API;
  const hygraph = new GraphQLClient(endpoint, {
    headers: {},
  });

  const query = gql`
    query GetAllPosts {
      posts(orderBy: lastUpdated_DESC, first: 12) {
        title
        slug
        lastUpdated
      }
    }
  `;

  const posts = await hygraph.request(query);

  return {
    props: { posts },
  };
};
