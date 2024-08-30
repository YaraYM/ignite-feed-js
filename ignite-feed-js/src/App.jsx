import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [ 
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CEO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa!', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. � um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto � DoctorCare!' },
      { type: 'link', content: 'jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2024-08-28 08:13:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Diego Fernandes',
      role: 'Educador @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa!', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. � um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto � DoctorCare!' },
      { type: 'link', content: 'jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2022-08-30 20:00:48'),
  },
];

// itera��o = repeti��o
// iterar um array = percorrer o array e, pra cada posi��o do array, fazer alguma coisa

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}


