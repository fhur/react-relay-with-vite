import { graphql, useLazyLoadQuery } from "react-relay";
import { RepositoriesQuery } from "./__generated__/RepositoriesQuery.graphql";

export function Repositories() {
  const { repository } = useLazyLoadQuery<RepositoriesQuery>(
    graphql`
      query RepositoriesQuery {
        repository(owner: "facebook", name: "relay") {
          name
          stargazerCount
        }
      }
    `,
    {}
  );

  if (!repository) {
    return null;
  }

  return (
    <div>
      <h1>Repositories</h1>
      <p>
        {repository.name} - {repository.stargazerCount}
      </p>
    </div>
  );
}
