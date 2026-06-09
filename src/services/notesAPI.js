import axios from 'axios'

const API_URL = "https://zwclbkiaaexcdvjfgejy.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Y2xia2lhYWV4Y2R2amZnZWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDQ5NjgsImV4cCI6MjA5NjUyMDk2OH0.n5RgdaHaipCcRosGcra5P5aF9T0l83uPktQKgKJloyo"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

       async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }

}