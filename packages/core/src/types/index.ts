export interface UserProfile {
  id: string;
  email: string;
  createdAt: string;
}

export interface Message {
  id: string;
  body: string;
  userId: string;
  timestamp: string;
}