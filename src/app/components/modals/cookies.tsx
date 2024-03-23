import Loading from "@/app/loading";
import { Suspense } from "react";
import Button from "../button";
import CookiesHelper from "@/app/lib/helpers/cookies";

export default function Cookies({ content, buttonText, buttonTextCancel }: { content: string, buttonText: string, buttonTextCancel: string }) {
    return (<Suspense fallback={<Loading />}>
        <div className="modal cookies container flex flex-col bg-white w-max p-4 rounded-md max-w-xl flex-column gap-4 items-center">
            <p className="text-sm font-normal">{content}</p>
            <div className="button-group cookies flex justify-between w-full gap-2">
                <Button onClick={(e) => { return document != null ? (document.querySelector('.modal.cookies') as HTMLElement).style.display = 'none' : Error('Document is NULL.') }} downSizing={true} text={buttonText} />
                <Button onClick={(e) => { CookiesHelper.removeAllClient(); return document != null ? (document.querySelector('.modal.cookies') as HTMLElement).style.display = 'none' : Error('Document is NULL.') }} downSizing={true} text={buttonTextCancel} fillcolor="var(--bluegrey)" />
            </div>
        </div>
    </Suspense>)
}