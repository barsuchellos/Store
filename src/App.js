import List from "./components/List/List";
import Header from "./components/Header/Header";
import styles from './styles/app.module.scss'

import { Provider } from "react-redux";

import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Header />
        <List />
      </div>
    </Provider>
 
  );
}

export default App;
