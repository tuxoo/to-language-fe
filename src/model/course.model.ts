import {LanguageEnum} from "./enum/language.enum";

export interface Course {
    id: string,
    language: LanguageEnum,
    description: string,
    startedAt: string,
}