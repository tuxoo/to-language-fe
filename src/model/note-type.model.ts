export type NoteTypeEnum = "EXP" | "WORD"

export interface NoteType {
    name: NoteTypeEnum;
    description: string;
}