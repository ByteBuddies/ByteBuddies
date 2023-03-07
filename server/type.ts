
export interface env {
  connectionString: string
}
export interface profile {

}
export class user implements profile {
  username:string
  private password?:string
  email?:string
  id?: number
  profile_id?: number
}

export interface error {
  log:string,
  message: string,
  status: number
}