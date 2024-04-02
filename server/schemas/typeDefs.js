const typeDefs = `
type Category {
    _id: ID
    name: String
    setOfQuestions: [Question]
}

type Question {
    _id: ID
    questionBody: String
    answer: Boolean
    category: [Category]
}

type User {
    _id: ID
    username: String
    email: String
    password: String
}
`
