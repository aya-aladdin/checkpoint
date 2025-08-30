export interface StoreItemType {
    id: string;
    name: string;
    description: string;
    img: string;
    stock: number;
    startingBid: number;
    category: 'Merch' | 'Tech' | 'Collectible' | 'Experience';
    rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

export interface Quest {
    id: string;
    title: string;
    description: string;
    reward: number;
    type: 'Workshop' | 'Submission' | 'Challenge' | 'Social' | 'Bonus';
    difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface StoreItemProps {
    item: StoreItemType;
}

export interface QuestCardProps {
    quest: Quest;
}
