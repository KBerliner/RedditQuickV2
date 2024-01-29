import { faker } from '@faker-js/faker';

export const createRandomPost = () => {
    return {
        id: faker.string.uuid(),
        title: faker.word.noun(),
        selftext: faker.lorem.paragraph()
    }
}

let posts = [];

for (let i = 0; i < 5; i++) {
    posts.push(createRandomPost());
}

export default posts;