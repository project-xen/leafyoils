import { GraphQLClient, gql } from "graphql-request";

export const load = async () => {
  const endpoint = import.meta.env.VITE_HYGRAPH_API;
  const hygraph = new GraphQLClient(endpoint, {
    headers: {},
  });

  const query = gql`
    query GetAllPosts {
      posts(orderBy: title_ASC, first: 10000) {
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
