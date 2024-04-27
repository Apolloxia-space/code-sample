export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      mst_user_profile: {
        Row: {
          building: string | null
          city: string | null
          created_at: string
          firstname: string
          id: string
          kana: string
          lastname: string
          nickname: string
          state: string | null
          street: string | null
          updated_at: string | null
          zipcode: string | null
        }
        Insert: {
          building?: string | null
          city?: string | null
          created_at?: string
          firstname: string
          id: string
          kana: string
          lastname: string
          nickname: string
          state?: string | null
          street?: string | null
          updated_at?: string | null
          zipcode?: string | null
        }
        Update: {
          building?: string | null
          city?: string | null
          created_at?: string
          firstname?: string
          id?: string
          kana?: string
          lastname?: string
          nickname?: string
          state?: string | null
          street?: string | null
          updated_at?: string | null
          zipcode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mst_user_profile_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      trn_subscription: {
        Row: {
          cancel_at: string | null
          created_at: string
          current_period_end: string | null
          customer_id: string
          id: string
          plan_id: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          cancel_at?: string | null
          created_at?: string
          current_period_end?: string | null
          customer_id: string
          id: string
          plan_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          cancel_at?: string | null
          created_at?: string
          current_period_end?: string | null
          customer_id?: string
          id?: string
          plan_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trn_subscription_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
