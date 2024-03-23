"use client"

function Loading() {
    return (
        <div className="preloader-suspense w-screen h-screen flex justify-center items-center bluegrey-fill animate__animated animate__fadeOut">
            <div className="preloader">
                <div></div><div></div>
            </div>
        </div>)
}

export default Loading;