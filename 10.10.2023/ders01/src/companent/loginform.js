import { useEffect } from "react";



const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada API çağrısı veya başka bir işlem yapabilirsiniz.
    console.log("Kullanıcı Adı:", username, "Şifre:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kullanıcı Adı:</label>
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Şifre:</label>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginForm;