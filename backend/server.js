import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const port = Number(process.env.PORT ?? 4000);
const jwtSecret = process.env.JWT_SECRET ?? 'gamehaton-dev-secret';

const users = [];

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const createToken = (user) => jwt.sign({ id: user.id, email: user.email, name: user.name }, jwtSecret, { expiresIn: '7d' });

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, service: 'gamehaton-backend', message: 'Server işləyir' });
});

app.post('/api/auth/register', async (request, response) => {
  const { name, email, password } = request.body ?? {};

  if (!name || !email || !password) {
    return response.status(400).json({ message: 'Ad, e-poçt və şifrə tələb olunur' });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const existingUser = users.find((user) => user.email === normalizedEmail);

  if (existingUser) {
    return response.status(409).json({ message: 'İstifadəçi artıq mövcuddur' });
  }

  const hashedPassword = await bcrypt.hash(String(password), 10);
  const user = {
    id: crypto.randomUUID(),
    name: String(name).trim(),
    email: normalizedEmail,
    password: hashedPassword
  };

  users.push(user);
  const token = createToken(user);

  return response.status(201).json({
    message: 'Hesab uğurla yaradıldı',
    token,
    user: { id: user.id, name: user.name, email: user.email }
  });
});

app.post('/api/auth/login', async (request, response) => {
  const { email, password } = request.body ?? {};

  if (!email || !password) {
    return response.status(400).json({ message: 'E-poçt və şifrə tələb olunur' });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const user = users.find((currentUser) => currentUser.email === normalizedEmail);

  if (!user) {
    return response.status(401).json({ message: 'Yanlış məlumatlar' });
  }

  const passwordMatches = await bcrypt.compare(String(password), user.password);
  if (!passwordMatches) {
    return response.status(401).json({ message: 'Yanlış məlumatlar' });
  }

  const token = createToken(user);
  return response.json({
    message: 'Giriş uğurludur',
    token,
    user: { id: user.id, name: user.name, email: user.email }
  });
});

app.listen(port, () => {
  console.log(`Gamehaton backend running on http://localhost:${port}`);
});
