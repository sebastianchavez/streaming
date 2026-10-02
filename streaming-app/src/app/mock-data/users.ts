import { User } from '../shared/models/user.model';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@email.com',
    password: '123456',
    avatar: 'https://picsum.photos/seed/user1/150/150',
    plan: 'Premium',
    memberSince: 'Enero 2024'
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria@email.com',
    password: '123456',
    avatar: 'https://picsum.photos/seed/user2/150/150',
    plan: 'Básico',
    memberSince: 'Marzo 2024'
  },
  {
    id: '3',
    name: 'Carlos López',
    email: 'carlos@email.com',
    password: '123456',
    avatar: 'https://picsum.photos/seed/user3/150/150',
    plan: 'Familiar',
    memberSince: 'Junio 2023'
  }
];
