export type SessionContextType = {
  authenticated: Boolean;
  info: {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    membership: string;
  };
};