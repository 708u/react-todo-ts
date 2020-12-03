import 'App.css';
import Footer from 'components/organism/Footer';
import Todo from 'components/organism/Todo';
import { FC } from 'react';

const App: FC = () => {
  return (
    <body>
      <Todo />
      <Footer />
    </body>
  );
};

export default App;
