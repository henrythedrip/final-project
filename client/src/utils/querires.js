import { gql } from "@apollo/client";

export const ALL_CATEGORIES = gql`
  query {
    categories {
      _id
      name
      questions {
        _id
        questionBody

      }
    }
  }
`;

export const ALL_QUESTIONS = gql`
  query {
    questions {
      _id
      question

    }
  }
`;

export const QUERY_SINGLE_CATEGORY = gql`
  query singleCategory($categoryId: String!) {
    category(categoryId: $categoryId) {
      _id
      name
      setOfQuestions {
        _id
        question

      }
    }
  }
`;
export const QUERY_SINGLE_USER = gql`
  query singleUser($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      scores {
        _id
        category {
          _id
          name
        }
        questionCount
        correct
      }
    }
  }
`;
