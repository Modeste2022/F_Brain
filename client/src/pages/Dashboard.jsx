const Dashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Vous avez réussi à vous connecter ! ✅</h2>
        <p style={styles.subtitle}>Bienvenue sur votre espace personnel</p>
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
    padding: '50px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    textAlign: 'center'
  },
  title: {
    color: '#2c3e50',
    fontSize: '2rem',
    marginBottom: '15px'
  },
  subtitle: {
    color: '#7f8c8d',
    fontSize: '1.2rem'
  }
};

export default Dashboard;