import gql from "graphql-tag";

export const GET_PROJECTS = gql`
  query getProjects($limit: Int!) {
    getProjects(limit: $limit) {
      created_at
      description
      github_link
      id
      live_link
      name
      project_category_id
      tech_stacks
      test_link
      updated_at
    }
  }
`;

export const GET_PROJECT_CATEGORIES = gql`
  query getProjectCategories($limit: Int!) {
    getProjectCategories(limit: $limit) {
      created_at
      id
      name
      updated_at
    }
  }
`;
