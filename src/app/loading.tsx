"use client"

function Loading() {
    return (
        <div className="preloader-suspense w-screen h-screen flex justify-center items-center black-fill">
            <div className="preloader">
                <div></div><div></div>
            </div>
        </div>)
}

export default Loading;