import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = () => {
  const [userData, setUserData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerUser(userData);
    setMessage(data.message || data.error);
    if (data.message) setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Inscription</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} type="text" placeholder="Nom d'utilisateur" 
            onChange={(e) => setUserData({ ...userData, username: e.target.value })} required />
          <input style={styles.input} type="email" placeholder="Email" 
            onChange={(e) => setUserData({ ...userData, email: e.target.value })} required />
          <input style={styles.input} type="password" placeholder="Mot de passe" 
            onChange={(e) => setUserData({ ...userData, password: e.target.value })} required />
          <button type="submit" style={styles.button}>S'inscrire</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
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
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
  },
  title: {
    color: '#2c3e50',
    fontSize: '1.8rem',
    marginBottom: '25px',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '14px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  },
  button: {
    padding: '14px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px'
  },
  message: {
    marginTop: '20px',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
    textAlign: 'center'
  }
};

export default Register;