import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SCORE = gql`
  mutation addScore($id: ID!, $score: Int!) {
    addScore(id: $id, score: $score) {
      _id
      username
      scores {
        _id
        category {
          _id
          name
        }
        questionCount
        scores
      }
    }
  }
`;

export const USER_ANSWERS = gql`
mutation submitAnswers($answers:[Answers]!){
  submitAnswers(answers:$answers){
    questionCount
    correct
  }
}`
