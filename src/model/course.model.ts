import {LanguageEnum} from "./enums/language.enum";

export interface Course {
    id: string,
    language: LanguageEnum,
    description: string,
    startedAt: string,
}