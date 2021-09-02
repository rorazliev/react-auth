type User = {
  blocked: boolean,
  confirmed: boolean,
  created_at: string,
  email: string,
  id: number,
  provider: string,
  role: {
    description: string,
    id: number,
    name: string,
    type: string,
  },
  updated_at: string,
  username: string,
}

export default User;
