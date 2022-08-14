import {Language} from "../../enums/Language";

export interface ICourse {
    id: string,
    language: Language,
    description: string,
    startedAt: string,
}