import { Injectable } from "@angular/core";
import { Participant } from "../models/Participant";
import { Meeting } from "../models/Meeting";

@Injectable({
    providedIn: 'root'
})
export class MeetingService {

    _meeting: Meeting = {
        id: 123456789,
        title: 'ועדת קורונה'
    };
    constructor() { }

    getMeeting() {
        return this._meeting
    }

}