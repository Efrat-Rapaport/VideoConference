import { Injectable } from "@angular/core";
import { Participant } from "../models/Participant";

@Injectable({
    providedIn: 'root'
})
export class ParticipantService {

    _participants: Participant[] = [
        { id: 1, name: 'Participant 1', type: 'judge', title: 'Judge', imageURL: 'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/800x392.2020805T113640.jpg' },
        { id: 2, name: 'Participant 2', type: 'side', title: 'Side', imageURL: 'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/800x392.2020805T113640.jpg' },
        // { id: 3, name: 'Participant 3', type: 'judge', title: 'Judge', imageURL: 'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/800x392.2020805T113640.jpg' },
        { id: 4, name: 'Participant 4', type: 'side', title: 'Side', imageURL: 'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/800x392.2020805T113640.jpg' },
    ];


    constructor() { }

    getParticipantList() {
        return this._participants
    }

}