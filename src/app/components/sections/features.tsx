
"use client"

import Image from "next/image"
import React from "react";
import Button from "../button";

export default function Features({ points, suptitle, title, name, buttonText, plaqueText }: any) {
    return (<div id="analytics" className="features flex flex-row pt-16 pb-16 w-full flex flex-col w-full flex flex-col bg-white m-auto max-w-screen-2xl">
        <div className="features-inner flex flex-row justify-between">
            <div className="features-block feature-block-A flex flex-1 p-8 h-full min-h-144 flex-col white">
                <div className="image-wrapper ui-abstract">
                    <Image
                        src={'png/element_ui_abstract.png'}
                        width={500}
                        height={500}
                        alt="icon"
                    />
                </div>
            </div>
            <div className="features-block feature-block-B flex flex-1 p-8 h-full min-h-144 flex-col white">
                <p className="features-suptitle text-sm">{suptitle}</p>
                <h2 className="features-title w-full pt-4 font-medium text-lg mt-16"><i>{name}</i>{title}</h2>
            </div>
            <div className="features-block feature-block-C flex flex-1 p-8 gap-y-4 h-full min-h-144 flex-col white">
                <div className="image-wrapper feature-icon mt-2">
                    <Image
                        src={'svg/icon_workflow_import.svg'}
                        width={60}
                        height={60}
                        alt="icon"
                    />
                </div>
                <p className="features-point text-md ibm-plex font-medium">{points.A}</p>
                <div className="image-wrapper feature-icon mt-2">
                    <Image
                        src={'svg/icon_workflow_conversion.svg'}
                        width={60}
                        height={60}
                        alt="icon"
                    />
                </div>
                <p className="features-point text-md ibm-plex font-medium">{points.B}</p>
                <div className="image-wrapper feature-icon mt-2">
                    <Image
                        src={'svg/icon_workflow_analysis.svg'}
                        width={60}
                        height={60}
                        alt="icon"
                    />
                </div>
                <p className="features-point text-md ibm-plex font-medium">{points.C}</p>
                <div className="image-wrapper feature-icon mt-2">
                    <Image
                        src={'svg/icon_workflow_visual.svg'}
                        width={60}
                        height={60}
                        alt="icon"
                    />
                </div>
                <p className="features-point text-md ibm-plex font-medium">{points.D}</p>
            </div>
        </div>
        <div className="features-button features-button flex flex-row justify-end">
            <Button plaque={{ enabled: true, fillcolor: "red-fill", text: plaqueText }} fillcolor="#6B7097" className="w-full" hoverAnimation={false} text={buttonText} icon="/svg/icon_open.svg" />
        </div>
    </div>)
}