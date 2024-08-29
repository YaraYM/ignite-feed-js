import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yara Y Marques</strong>
              <time dateTime="2022-05-11 08:13:30">Cerca de 1h atr�s</time>
            </div>

            <button title='Deletar coment�rio'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parab�ns!! ????</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}