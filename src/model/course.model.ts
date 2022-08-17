import {Language} from "./enums/Language";

export interface Course {
    id: string,
    language: Language,
    description: string,
    startedAt: string,
}