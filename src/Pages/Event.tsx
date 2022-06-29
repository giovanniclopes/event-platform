import { MonitorPlay } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>();
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                    { slug ? (
                            <Video lessonSlug={slug} />
                        ) : (
                        <div className="flex-1 flex flex-col justify-center items-center gap-2 bg-reactIcon bg-center bg-no-repeat bg-contain">
                            <MonitorPlay size={100} className="text-green-300" />
                            <p className="text-2xl">Selecione uma <strong className="text-green-300">aula</strong> para assistir</p>
                        </div>
                    )}
                <Sidebar />
            </main>
        </div>
    )
}
