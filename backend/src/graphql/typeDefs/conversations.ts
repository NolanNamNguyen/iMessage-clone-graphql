import gql from "graphql-tag";

const typeDefs = gql`
    type Conversation {
        id: String
        latestMessage: Message
        participants: [Participant]
        updatedAt: Date
    }

    type Participant {
        id: String
        user: User
        hasSeenLatestMessage: Boolean
    }

    type CreateConversationResponse {
        conversationId: String
    }

    type ConversationDeletedResponse {
        id: String
    }

    type ConversationUpdatedSubscriptionPayload {
        conversation: Conversation
        addedUserIds: [String]
        removedUserIds: [String]
    }

    type Query {
        conversations: [Conversation]
    }

    type Mutation {
        createConversation(participantIds: [String]): CreateConversationResponse
        markConversationAsRead(userId: String!, conversationId: String!): Boolean
        deleteConversation(conversationId: String!): Boolean
        updateParticipants(
            conversationId: String!
            participantIds: [String]!
        ): Boolean
    }

    type Subscription {
        conversationCreated: Conversation
    }

    type Subscription {
        conversationUpdated: ConversationUpdatedSubscriptionPayload
    }

    type Subscription {
        conversationDeleted: ConversationDeletedResponse
    }
`;

export default typeDefs;
