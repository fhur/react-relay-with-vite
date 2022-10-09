import { RelayEnvironmentProvider } from "react-relay";
import "./App.css";
import { Repositories } from "./components/Repositories";
import { RelayEnvironment } from "./graphql/RelayEnvironment";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Repositories />
    </RelayEnvironmentProvider>
  );
}

export default App;
