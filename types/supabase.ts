export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number
          user_id: string
          name: string
        }
        Insert: {
          id?: number
          user_id: string
          name: string
        }
        Update: {
          id?: number
          user_id?: string
          name?: string
        }
      }
    }
  }
}
