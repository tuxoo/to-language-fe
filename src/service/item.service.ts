import {AxiosPromise} from "axios";
import {authHost} from "../http/axios";
import {Item} from "../model/item.model.";

class ItemService {
    public getLanguages(): AxiosPromise<Item[]> {
        return authHost.get<Item[]>('/v1/items/languages')
    }

    public getNoteTypes(): AxiosPromise<Item[]> {
        return authHost.get<Item[]>('/v1/items/note-types')
    }
}

export const itemService = new ItemService()