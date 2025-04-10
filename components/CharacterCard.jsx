import styles from './../styles/CharacterCard.module.css';

export default function CharacterCard( {character} ) {
    return (
        <div className={styles.card}>
            <img 
            src={character.image}
            alt={character.name}
            className={styles.avatar} 
            />
            <h3 className={styles.name}>{character.name}</h3>
            <p className={styles.status}>{character.status}</p>
            <p className={styles.species}>{character.species}</p>
            <p className={styles.type}>{character.type || "Sem tipo"}</p>
            <p className={styles.gender}>{character.gender}</p>
        </div>
    );
}