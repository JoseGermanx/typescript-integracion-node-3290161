const resolvers = {
    Query: {
      hello: () => 'Hello from GraphQL!',
    },
    Mutation: {
      greet: (_: any, { name }: any) => `Hello, ${name}!`,
    },
    Subscription: {
      newMessage: {
        subscribe: () => {
          // Implement subscription logic here
        },
      },
    },
  };
  
  export default resolvers;
  