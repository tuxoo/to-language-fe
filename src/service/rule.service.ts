import {authHost} from "../http/axios";
import {AxiosPromise} from "axios";
import {Rule} from "../model/rule.model";
import {Page} from "../model/pagination/page.model";

class RuleService {
    public addCourse(courseId: string, rule: Rule) {
        return authHost.post(`/v1/courses/${courseId}/rules`, rule)
    }

    public getCourses(courseId: string): AxiosPromise<Page<Rule>> {
        return authHost.get<Page<Rule>>(`/v1/courses/${courseId}`)
    }

    public getCourse(courseId: string, id: string): AxiosPromise<Rule> {
        return authHost.get<Rule>(`/v1/courses/${courseId}/rules/${id}`)
    }

    public editCourse(courseId: string, id: string, rule: Rule): AxiosPromise<Rule> {
        return authHost.patch<Rule>(`/v1/courses/${courseId}/rules/${id}`, rule)
    }

    public deleteCourse(courseId: string, id: string) {
        return authHost.delete(`/v1/courses/${courseId}/rules/${id}`)
    }
}

export const ruleService = new RuleService()