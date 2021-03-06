import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { Footer } from "./Footer";
import { Lesson } from "./Lesson";

export function Sidebar() {
    const { data } = useGetLessonsQuery()

    

    return (
       <aside className="w-[348px] bg-gray-700 p-6 rounded sm:w-[91.5vw] m-3">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
            })}
            </div>
            <footer className="sm:block md,lg,xl,2xl: hidden">
                <Footer />
            </footer>
        </aside>
    )
}