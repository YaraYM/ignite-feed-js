import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar';


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Tony Corleone" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt dolorum, enim inventore ea earum voluptates vitae atque iste facilis consequatur nisi illum quasi quibusdam voluptas doloribus mollitia totam natus." 
          />
          <Post 
            author="Ipa Corleone" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt dolorum, enim inventore ea earum voluptates vitae atque iste facilis consequatur nisi illum quasi quibusdam voluptas doloribus mollitia totam natus." 
          />
        </main>
      </div>
    </>
  )
}


