import 'App.css';
import Footer from 'components/organisms/Footer';
import Todo from 'components/organisms/Todo';
import { FC } from 'react';

const App: FC = () => {
  return (
    <>
      <Todo />
      <Footer />
    </>
  );
};

export default App;
