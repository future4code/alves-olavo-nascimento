import bcypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export class HashManager {
    public hash = async (plaintext: string) => {
        const rounds = Number(process.env.BCRIPT_COST)
        const salt = await bcypt.genSalt(rounds)
        const hash = await bcypt.hash(plaintext, salt)

        return hash
    }

    public compare = async (plaintext: string, hash: string) => {
        return bcypt.compare(plaintext, hash)
    }

}