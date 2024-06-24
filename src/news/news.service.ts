import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {

    private newsList = [
        { id: 1, title: 'Local Hero Saves Family from Burning Building', description: 'Local Hero Saves Family from Burning Building', category: 'Politics', likes: 5, dateCreated: new Date(), dateUpdated: new Date(), editorFirstName: 'John', editorLastName: 'Doe' },
        { id: 2, title: 'New Study Reveals Surprising Health Benefits of Coffee', description: 'New Study Reveals Surprising Health Benefits of Coffee', category: 'Politics', likes: 7, dateCreated: new Date(), dateUpdated: new Date(), editorFirstName: 'James', editorLastName: 'Smith' },
        { id: 3, title: 'Tech Giant Announces Revolutionary New Smartphone Features', description: 'Tech Giant Announces Revolutionary New Smartphone Features', category: 'Science', likes: 5, dateCreated: new Date(), dateUpdated: new Date(), editorFirstName: 'John', editorLastName: 'Amber' },
        { id: 4, title: 'International Space Mission Successfully Returns to Earth', description: 'International Space Mission Successfully Returns to Earth', category: 'Lifestyle', likes: 5, dateCreated: new Date(), dateUpdated: new Date(), editorFirstName: 'Kate', editorLastName: 'Smith' },
        { id: 5, title: 'Historic Peace Agreement Signed Between Long-Standing Rivals', description: 'Historic Peace Agreement Signed Between Long-Standing Rivals', category: 'Politics', likes: 5, dateCreated: new Date(), dateUpdated: new Date(), editorFirstName: 'David', editorLastName: 'Watson' },
    ];
    private idCounter = 6; // Counter for generating unique IDs

    findAll() {
        return this.newsList;
    }

    findOne(id: number) {
        return this.newsList.find(news => news.id === id);
    }

    create(title: string, description: string, category: string, editorFirstName: string, editorLastName: string) {
        const newNews = { id: this.idCounter++, title, description, category, editorFirstName, editorLastName, likes: 5, dateCreated: new Date(), dateUpdated: new Date() };
        this.newsList.push(newNews);
        return newNews;
    }

    delete(id: number) {
        const index = this.newsList.findIndex(news => news.id == id);
        if (index !== -1) {
            const deletedNews = this.newsList.splice(index, 1)[0];
            return deletedNews;
        }
        return null;
    }

    update(id: number, title: string, description: string, category: string, editorFirstName: string, editorLastName) {
        const news = this.newsList.find(news => news.id == id);
        if (news) {
            news.title = title;
            news.description = description;
            news.category = category;
            news.editorFirstName = editorFirstName;
            news.editorLastName = editorLastName;
            news.dateUpdated = new Date();
            return news;
        }
        return null;
    }
}
