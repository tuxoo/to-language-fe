import {ACCESS_TOKEN} from "../../model/const";

const authHeader = () => {
    const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN) || "{}");
    if (accessToken) {
        return {Authorization: `Bearer ${accessToken}`};
    } else {
        return {};
    }
}

// export const coursesApi = createApi({
//     reducerPath: "courses/api",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:8080/v1/courses",
//     }),
//     endpoints: builder => ({
//         getCourses: builder.query<Course[], void>({
//             query: () => ({
//                 url: "",
//                 headers: authHeader(),
//                 method: "get"
//             }),
//         }),
//         deleteCourse: builder.mutation<void, string>({
//             query: (id) => ({
//                 url: `/${id}`,
//                 method: "delete"
//             })
//         })
//     }),
// });
//
// export const {useGetCoursesQuery, useDeleteCourseMutation} = coursesApi;