


export interface env {
  connectionString: string
}
export interface profile {

}
export interface user {
  username:string
  password:string
  email:string
  skills_id?: number
  skills_wanted?: number
  currproj?: string

}

export interface error {
  log:string,
  message: string,
  status: number
}