import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Bienvenue sur Mon Projet</h1>
        <p style={styles.description}>
          Mon projet est une plateforme sécurisée permettant aux utilisateurs de s'inscrire, 
          se connecter et réinitialiser leur mot de passe en toute simplicité.
        </p>
        <div style={styles.buttonContainer}>
          <Link to="/register"><button style={styles.button}>S'inscrire</button></Link>
          <Link to="/login"><button style={styles.button}>Se connecter</button></Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '40px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    textAlign: 'center'
  },
  title: {
    color: '#2c3e50',
    fontSize: '2.2rem',
    marginBottom: '20px'
  },
  description: {
    color: '#34495e',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '30px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px'
  },
  button: {
    padding: '12px 25px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default Home;