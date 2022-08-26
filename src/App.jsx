import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';

import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti, similique ab quisquam sit libero tenetur laudantium aspernatur voluptas, ipsam vel quae voluptate repellendus dolorum amet illum sequi dolor quos?" 
        />
        <Post 
          author="Gabriel Buzzi"
          content="Um novo post muito legal"
        />
        </main>
      </div>
    </div>
   
  );
}


