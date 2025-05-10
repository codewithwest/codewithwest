import gql from "graphql-tag";
import PAGINATION from "./reusables.gql";

export const GET_PROJECTS = gql`
  query getProjects($limit: Int!) {
    getProjects(limit: $limit) {
      data {
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
      ${PAGINATION}
    }
  }
`;

export const GET_PROJECTS_COUNT = gql`
  query getProjects($limit: Int!) {
    getProjects(limit: $limit) {
      ${PAGINATION}
    }
  }
`;

export const GET_PROJECT_CATEGORIES = gql`
  query getProjectCategories($limit: Int, $page: Int) {
    getProjectCategories(limit: $limit, page: $page) {
      data {
        created_at
        description
        id
        name
        updated_at
      }
      ${PAGINATION}
    }
  }
`;
