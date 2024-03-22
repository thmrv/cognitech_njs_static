import { Suspense } from "react";
import Button from "../button";
import Loading from "@/app/loading";

export default function Masthead({ suptitle, title, buttonText }: any) {
    return (<Suspense fallback={<Loading/>}>
        <div className="masthead w-full flex flex-col header w-full flex flex-col bg-white m-auto max-w-screen-2xl" suppressHydrationWarning>
            <div className="masthead-inner">
                <div className="masthead-content">
                    <div className="upper">
                        <p className="masthead-suptitle text-md">{suptitle}</p>
                        <h2 className="masthead-title text-2xl pt-4">{title}</h2>
                    </div>
                    <Button text={buttonText} className="masthead-home" icon="svg/icon_open.svg" url="#services" />
                </div>
            </div>
        </div>
    </Suspense>
    )
}
