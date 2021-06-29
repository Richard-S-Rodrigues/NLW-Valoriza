import { getCustomRepository } from "typeorm"
import { TagsRepositories } from '../repositories/TagsRepositories'

export class CreateTagService {
	async execute(name: string) {
		const tagsRepositories = getCustomRepository(TagsRepositories)

		if (!name) {
			throw new Error("Incorrect name!")
		}

		const tagExists = await tagsRepositories.findOne({ name })

		if (tagExists) {
			throw new Error("Tag Already Exists!")
		}

		const tag = await tagsRepositories.create({ name })

		await tagsRepositories.save(tag)

		return tag
	}
}